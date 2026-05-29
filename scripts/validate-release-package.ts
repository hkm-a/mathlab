import { readFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const failures: string[] = []

const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"))
const tauriConfig = JSON.parse(readFileSync(join(root, "src-tauri", "tauri.conf.json"), "utf8"))
const cargoToml = readFileSync(join(root, "src-tauri", "Cargo.toml"), "utf8")
const workflow = readFileSync(join(root, ".github", "workflows", "desktop-release.yml"), "utf8")

const packageVersion = packageJson.version

if (typeof packageVersion !== "string" || !/^\d+\.\d+\.\d+$/.test(packageVersion)) {
  failures.push(`package.json version must be semver x.y.z, got ${packageVersion}`)
}

if (tauriConfig.version !== packageVersion) {
  failures.push(`Tauri version must match package.json (${packageVersion}), got ${tauriConfig.version}`)
}

if (tauriConfig.bundle?.active !== false) {
  failures.push("Tauri bundle.active must be false for portable-only releases")
}

if (!new RegExp(`version = "${packageVersion.replace(/\./g, "\\.")}"`).test(cargoToml)) {
  failures.push(`src-tauri/Cargo.toml package version must match package.json (${packageVersion})`)
}

const requiredWorkflowTokens = [
  `default: "v${packageVersion}-desktop"`,
  `MathLab_${packageVersion}_x64_portable.zip`,
  "Compress-Archive",
  "src-tauri/target/release/portable/*.zip",
]

for (const token of requiredWorkflowTokens) {
  if (!workflow.includes(token)) {
    failures.push(`desktop release workflow missing ${token}`)
  }
}

const forbiddenWorkflowTokens = [
  "bundle/nsis/*.exe",
  "bundle/msi/*.msi",
]

for (const token of forbiddenWorkflowTokens) {
  if (workflow.includes(token)) {
    failures.push(`desktop release workflow still references installer artifact ${token}`)
  }
}

if (failures.length > 0) {
  console.error("Release package validation failed:")
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log("Release package validation passed")
