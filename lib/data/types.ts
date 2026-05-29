import type { Circle, Line, PlotRange, Point } from "@/lib/math/types"

export type Difficulty = "easy" | "medium" | "hard" | "olympiad"

export type CategoryId =
  | "thinking-methods"
  | "methods"
  | "reference"
  | "algebra"
  | "geometry"
  | "number-theory"
  | "combinatorics"

export interface Category {
  id: CategoryId
  name: string
  icon: string
}

/** Book-level chapter (章) */
export interface Chapter {
  id: string
  name: string
  description: string
  category: CategoryId
  sections: string[]       // section IDs
  icon: string
}

/** Section within a chapter (节) */
export interface Section {
  id: string
  chapterId: string
  name: string
  description: string
  topics: string[]         // topic IDs
  /** Starting page in the original book */
  pageStart?: number
}

export interface Topic {
  id: string
  sectionId: string
  name: string
  description: string
  category: CategoryId
  difficulty: Difficulty
  problems: string[]
  /** Key formulas shown as KaTeX */
  keyFormulas?: string[]
  /** Prerequisites: other topic IDs */
  prerequisites?: string[]
  /** Geometric intuition description */
  geometricIntuition?: string
}

export interface Problem {
  id: string
  topicId: string
  title: string
  content: string
  /** Plain text preview for card display (no LaTeX) */
  preview?: string
  difficulty: Difficulty
  solutions: Solution[]
  visualization?: VisualizationConfig
  tags: string[]
  /** Source: e.g. "2024 全国甲卷" or "更高更妙 p.179" */
  source?: string
}

export interface Solution {
  id: string
  title: string
  /** Method type: "standard" | "geometric" | "algebraic" | "creative" */
  method: SolutionMethod
  steps: SolutionStep[]
  explanation: string
}

export type SolutionMethod = "standard" | "geometric" | "algebraic" | "creative" | "competition"

export interface SolutionStep {
  step: number
  content: string
  visualization?: VisualizationStep
}

export interface InequalityState {
  a?: number
  b?: number
  c?: number
}

export interface FunctionState {
  range?: PlotRange
  functionKey?: string
}

export interface GeometryState {
  points?: Point[]
  circles?: Circle[]
  lines?: Line[]
}

export interface VectorState {
  vectors: { x: number; y: number; label: string; color: string }[]
  showProjection?: boolean
  showAngle?: boolean
}

export interface TransformationState {
  type: "affine" | "homothety" | "rotation" | "reflection"
  params: Record<string, number>
}

export type VisualizationConfig =
  | { type: "function"; initialState: FunctionState }
  | { type: "geometry"; initialState: GeometryState }
  | { type: "inequality"; initialState: InequalityState }
  | { type: "vector"; initialState: VectorState }
  | { type: "transformation"; initialState: TransformationState }

export interface VisualizationStep {
  type: VisualizationConfig["type"]
  data: Record<string, unknown>
  description?: string
}

/** Knowledge connection between topics */
export interface KnowledgeConnection {
  from: string    // topic ID
  to: string      // topic ID
  /** Relationship type */
  relation: "prerequisite" | "extends" | "applies-to" | "similar"
  description?: string
}
