"use client"

import React from "react"

interface ProblemFigureProps {
  /** Image hash filename like "abc123.jpg" */
  type: string
  className?: string
}

/* ── Generated SVG figure components ── */

function GenericFig1() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="211" height="137" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="261" y2="187" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="261" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="261" cy="187" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="187" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="265" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="265" y="203" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="203" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig2() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="152" y2="66" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function GenericFig3() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,90 33,88 36,85 39,83 42,82 45,81 48,80 51,80 54,80 57,80 60,81 63,82 66,84 69,86 72,88 75,91 78,94 81,97 84,100 87,104 90,108 93,112 96,117 99,121 102,125 105,130 108,134 111,139 114,143 117,148 120,152 123,156 126,159 129,163 132,166 135,169 138,172 141,174 144,176 147,177 150,178 153,179 156,179 159,179 162,179 165,178 168,177 171,175 174,173 177,171 180,168 183,165 186,162 189,158 192,154 195,150 198,146 201,142 204,138 207,133 210,129 213,124 216,120 219,115 222,111 225,107 228,103 231,99 234,96 237,93 240,90 243,87 246,85 249,83 252,82 255,81 258,80 261,80 264,80 267,80 270,81 273,82 276,84 279,86 282,88 285,91 288,94" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig4() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="52" y1="115" x2="52" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="49" y="140" fill="#475569" fontSize="11">1</text>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="250" y1="115" x2="250" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="247" y="140" fill="#475569" fontSize="11">10</text>
    </svg>
  )
}

function GenericFig5() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 180,80 180,174 80,174" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 205,60 180,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="180,80 205,60 205,154 180,174" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="174" x2="105" y2="154" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="154" x2="205" y2="154" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function GenericFig6() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig7() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="203" height="151" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="253" y2="201" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="253" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="253" cy="201" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="201" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="257" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="257" y="217" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="217" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig8() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="132" y2="40" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function GenericFig9() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,108 33,112 36,117 39,121 42,125 45,130 48,134 51,139 54,143 57,148 60,152 63,156 66,159 69,163 72,166 75,169 78,172 81,174 84,176 87,177 90,178 93,179 96,179 99,179 102,179 105,178 108,177 111,175 114,173 117,171 120,168 123,165 126,162 129,158 132,154 135,150 138,146 141,142 144,138 147,133 150,129 153,124 156,120 159,115 162,111 165,107 168,103 171,99 174,96 177,93 180,90 183,87 186,85 189,83 192,82 195,81 198,80 201,80 204,80 207,80 210,81 213,82 216,84 219,86 222,88 225,91 228,94 231,97 234,101 237,105 240,109 243,113 246,117 249,122 252,126 255,131 258,135 261,140 264,144 267,148 270,152 273,156 276,160 279,163 282,167 285,169 288,172" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig10() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="74" y1="115" x2="74" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="71" y="140" fill="#475569" fontSize="11">2</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
      <line x1="162" y1="115" x2="162" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="159" y="140" fill="#475569" fontSize="11">6</text>
      <line x1="206" y1="115" x2="206" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="203" y="140" fill="#475569" fontSize="11">8</text>
      <line x1="228" y1="115" x2="228" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="225" y="140" fill="#475569" fontSize="11">9</text>
    </svg>
  )
}

function TriangleFig1() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="55,203 168,50 247,196" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="55" cy="203" r="4" fill="#0f172a"/>
      <circle cx="168" cy="50" r="4" fill="#0f172a"/>
      <circle cx="247" cy="196" r="4" fill="#0f172a"/>
      <text x="43" y="221" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="163" y="40" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="252" y="214" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function CoordinateFig1() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,34 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="34" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="26" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function HyperbolaFig1() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 110,130 Q 120,80 140,55 Q 155,40 170,35" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 110,130 Q 120,180 140,205 Q 155,220 170,225" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 210,130 Q 200,80 180,55 Q 165,40 150,35" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 210,130 Q 200,180 180,205 Q 165,220 150,225" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="60" y1="40" x2="260" y2="220" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
      <line x1="60" y1="220" x2="260" y2="40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
      <circle cx="110" cy="130" r="4" fill="#ef4444"/>
      <text x="100" y="150" fill="#ef4444" fontSize="13" fontWeight="600">F</text>
      <circle cx="210" cy="130" r="4" fill="#0f172a"/>
      <text x="213" y="150" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig11() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 194,80 194,169 80,169" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 219,60 194,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="194,80 219,60 219,149 194,169" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="169" x2="105" y2="149" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="149" x2="219" y2="149" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function TriangleFig2() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="50,215 147,64 252,194" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="50" cy="215" r="4" fill="#0f172a"/>
      <circle cx="147" cy="64" r="4" fill="#0f172a"/>
      <circle cx="252" cy="194" r="4" fill="#0f172a"/>
      <text x="38" y="233" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="142" y="54" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="257" y="212" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function TriangleFig3() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="63,216 174,62 243,195" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="63" cy="216" r="4" fill="#0f172a"/>
      <circle cx="174" cy="62" r="4" fill="#0f172a"/>
      <circle cx="243" cy="195" r="4" fill="#0f172a"/>
      <text x="51" y="234" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="169" y="52" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="248" y="213" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="208" cy="128" r="4" fill="#3b82f6"/>
      <text x="214" y="122" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="63" y1="216" x2="208" y2="128" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="208" y1="128" x2="243" y2="195" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function TriangleFig4() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="51,211 177,59 240,197" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="51" cy="211" r="4" fill="#0f172a"/>
      <circle cx="177" cy="59" r="4" fill="#0f172a"/>
      <circle cx="240" cy="197" r="4" fill="#0f172a"/>
      <text x="39" y="229" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="172" y="49" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="245" y="215" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <path d="M 167,71 A 15,15 0 0,1 172,81" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
    </svg>
  )
}

function GenericFig12() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig13() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="204" height="138" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="254" y2="188" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="254" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="254" cy="188" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="188" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="258" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="258" y="204" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="204" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig14() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="135" y2="52" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function CoordinateFig2() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="93" ry="40" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="86" cy="125" r="3.5" fill="#8b5cf6"/>
      <text x="94" y="117" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig5() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="79,203 158,62 254,204" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="79" cy="203" r="4" fill="#0f172a"/>
      <circle cx="158" cy="62" r="4" fill="#0f172a"/>
      <circle cx="254" cy="204" r="4" fill="#0f172a"/>
      <text x="67" y="221" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="153" y="52" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="259" y="222" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function CircleFig1() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="92" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="71" cy="191" r="4" fill="#3b82f6"/>
      <circle cx="126" cy="38" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="79" y="196" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="134" y="43" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="71" y2="191" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function GenericFig15() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,178 33,179 36,179 39,179 42,179 45,178 48,177 51,175 54,173 57,171 60,168 63,165 66,162 69,158 72,154 75,150 78,146 81,142 84,138 87,133 90,129 93,124 96,120 99,115 102,111 105,107 108,103 111,99 114,96 117,93 120,90 123,87 126,85 129,83 132,82 135,81 138,80 141,80 144,80 147,80 150,81 153,82 156,84 159,86 162,88 165,91 168,94 171,97 174,101 177,105 180,109 183,113 186,117 189,122 192,126 195,131 198,135 201,140 204,144 207,148 210,152 213,156 216,160 219,163 222,167 225,169 228,172 231,174 234,176 237,177 240,179 243,179 246,179 249,179 252,179 255,178 258,177 261,175 264,173 267,170 270,168 273,165 276,161 279,158 282,154 285,150 288,146" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig3() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig1() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="103" ry="64" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="221" cy="78" r="4" fill="#3b82f6"/>
      <circle cx="87" cy="84" r="4" fill="#8b5cf6"/>
      <text x="229" y="73" fill="#3b82f6" fontSize="13" fontWeight="600">B</text>
      <text x="95" y="79" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig2() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="112" ry="69" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="207" cy="67" r="4" fill="#3b82f6"/>
      <circle cx="64" cy="94" r="4" fill="#8b5cf6"/>
      <text x="215" y="62" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <text x="72" y="89" fill="#8b5cf6" fontSize="13" fontWeight="600">M</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="207" y2="67" stroke="#475569" strokeWidth="1.5"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig3() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="110" ry="46" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="201" cy="87" r="4" fill="#3b82f6"/>
      <circle cx="58" cy="112" r="4" fill="#8b5cf6"/>
      <text x="209" y="82" fill="#3b82f6" fontSize="13" fontWeight="600">M</text>
      <text x="66" y="107" fill="#8b5cf6" fontSize="13" fontWeight="600">N</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <circle cx="226" cy="130" r="3" fill="#ef4444"/>
      <text x="232" y="135" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig6() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="65,214 145,44 252,191" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="65" cy="214" r="4" fill="#0f172a"/>
      <circle cx="145" cy="44" r="4" fill="#0f172a"/>
      <circle cx="252" cy="191" r="4" fill="#0f172a"/>
      <text x="53" y="232" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="140" y="34" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="257" y="209" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="198" cy="117" r="4" fill="#3b82f6"/>
      <text x="204" y="111" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="65" y1="214" x2="198" y2="117" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="198" y1="117" x2="252" y2="191" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function TriangleFig7() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="61,210 165,69 246,193" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="61" cy="210" r="4" fill="#0f172a"/>
      <circle cx="165" cy="69" r="4" fill="#0f172a"/>
      <circle cx="246" cy="193" r="4" fill="#0f172a"/>
      <text x="49" y="228" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="160" y="59" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="251" y="211" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig16() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
      <line x1="250" y1="115" x2="250" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="247" y="140" fill="#475569" fontSize="11">10</text>
    </svg>
  )
}

function TriangleFig8() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="58,207 169,54 257,191" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="58" cy="207" r="4" fill="#0f172a"/>
      <circle cx="169" cy="54" r="4" fill="#0f172a"/>
      <circle cx="257" cy="191" r="4" fill="#0f172a"/>
      <text x="46" y="225" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="164" y="44" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="262" y="209" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <path d="M 159,66 A 15,15 0 0,1 164,76" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
    </svg>
  )
}

function EllipseFig4() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="111" ry="47" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="245" cy="100" r="4" fill="#3b82f6"/>
      <circle cx="104" cy="89" r="4" fill="#8b5cf6"/>
      <text x="253" y="95" fill="#3b82f6" fontSize="13" fontWeight="600">N</text>
      <text x="112" y="84" fill="#8b5cf6" fontSize="13" fontWeight="600">F</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="245" y2="100" stroke="#475569" strokeWidth="1.5"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig5() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="118" ry="51" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="264" cy="106" r="4" fill="#3b82f6"/>
      <circle cx="78" cy="93" r="4" fill="#8b5cf6"/>
      <text x="272" y="101" fill="#3b82f6" fontSize="13" fontWeight="600">F</text>
      <text x="86" y="88" fill="#8b5cf6" fontSize="13" fontWeight="600">A</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function ParabolaFig1() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 46,198 Q 160,96 274,198" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="97" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="89" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="198" r="3" fill="#ef4444"/>
      <text x="168" y="203" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function ParabolaFig2() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 76,202 Q 160,95 244,202" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="96" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="88" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="202" r="3" fill="#ef4444"/>
      <text x="168" y="207" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig4() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,84 45,89 50,96 55,104 60,113 65,122 70,132 75,142 80,152 85,160 90,167 95,173 100,177 105,179 110,179 115,177 120,174 125,168 130,161 135,153 140,143 145,134 150,124 155,114 160,105 165,97 170,90 175,85 180,81 185,80 190,80 195,82 200,87 205,93 210,100 215,109 220,118 225,128 230,138 235,148 240,157 245,164 250,171 255,176 260,179 265,179 270,178 275,175 280,171" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="143" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="135" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function ParabolaFig3() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 51,212 Q 160,92 269,212" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="93" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="85" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="212" r="3" fill="#ef4444"/>
      <text x="168" y="217" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig5() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="61" y1="171" x2="241" y2="38" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="61" cy="171" r="3.5" fill="#0f172a"/><circle cx="241" cy="38" r="3.5" fill="#0f172a"/>
      <text x="247" y="32" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig17() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 180,80 180,168 80,168" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 205,60 180,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="180,80 205,60 205,148 180,168" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="168" x2="105" y2="148" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="148" x2="205" y2="148" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function CoordinateFig6() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,22 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="22" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="14" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig18() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig19() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="188" height="133" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="238" y2="183" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="238" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="238" cy="183" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="183" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="242" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="242" y="199" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="199" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function CoordinateFig7() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="111" ry="67" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="151" cy="183" r="3.5" fill="#8b5cf6"/>
      <text x="159" y="175" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CircleFig2() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="82" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="99" cy="201" r="4" fill="#3b82f6"/>
      <circle cx="168" cy="53" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="107" y="206" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="176" y="58" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="99" y2="201" stroke="#475569" strokeWidth="1.5"/>
      <line x1="99" y1="201" x2="168" y2="53" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function CoordinateFig8() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig9() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,178 45,179 50,179 55,176 60,171 65,165 70,157 75,148 80,139 85,129 90,119 95,109 100,101 105,93 110,87 115,83 120,80 125,80 130,81 135,84 140,90 145,96 150,104 155,114 160,123 165,133 170,143 175,152 180,161 185,168 190,173 195,177 200,179 205,179 210,177 215,173 220,168 225,160 230,152 235,143 240,133 245,123 250,113 255,104 260,96 265,89 270,84 275,81 280,80" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="90" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="82" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig10() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="60" y1="186" x2="279" y2="20" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="60" cy="186" r="3.5" fill="#0f172a"/><circle cx="279" cy="20" r="3.5" fill="#0f172a"/>
      <text x="285" y="14" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig20() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="165" y2="65" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function CoordinateFig11() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,32 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="32" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="24" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig21() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,129 33,124 36,120 39,115 42,111 45,107 48,103 51,99 54,96 57,93 60,90 63,87 66,85 69,83 72,82 75,81 78,80 81,80 84,80 87,80 90,81 93,82 96,84 99,86 102,88 105,91 108,94 111,97 114,101 117,105 120,109 123,113 126,117 129,122 132,126 135,131 138,135 141,140 144,144 147,148 150,152 153,156 156,160 159,163 162,167 165,169 168,172 171,174 174,176 177,177 180,179 183,179 186,179 189,179 192,179 195,178 198,177 201,175 204,173 207,170 210,168 213,165 216,161 219,158 222,154 225,150 228,146 231,141 234,137 237,132 240,128 243,123 246,119 249,115 252,110 255,106 258,102 261,99 264,95 267,92 270,89 273,87 276,85 279,83 282,81 285,80 288,80" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig22() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="74" y1="115" x2="74" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="71" y="140" fill="#475569" fontSize="11">2</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
      <line x1="184" y1="115" x2="184" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="181" y="140" fill="#475569" fontSize="11">7</text>
      <line x1="206" y1="115" x2="206" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="203" y="140" fill="#475569" fontSize="11">8</text>
      <line x1="228" y1="115" x2="228" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="225" y="140" fill="#475569" fontSize="11">9</text>
    </svg>
  )
}

function CircleFig3() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="88" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="168" cy="213" r="4" fill="#3b82f6"/>
      <circle cx="66" cy="82" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="176" y="218" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="74" y="87" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="168" y2="213" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function GenericFig23() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 187,80 187,187 80,187" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 212,60 187,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="187,80 212,60 212,167 187,187" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="187" x2="105" y2="167" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="167" x2="212" y2="167" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function VectorFig1() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <defs>
        <marker id={`${mid}-ab`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
        <marker id={`${mid}-av`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker>
      </defs>
      <circle cx="140" cy="140" r="89" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="140" y1="140" x2="186" y2="64" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#${mid}-ab)`}/>
      <line x1="140" y1="140" x2="200" y2="205" stroke="#8b5cf6" strokeWidth="2.5" markerEnd={`url(#${mid}-av)`}/>
      <circle cx="140" cy="140" r="3.5" fill="#0f172a"/>
      <text x="146" y="155" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="173" y="94" fill="#3b82f6" fontSize="13" fontWeight="600">a</text>
      <text x="155" y="164" fill="#8b5cf6" fontSize="13" fontWeight="600">b</text>
    </svg>
  )
}

function GenericFig24() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function VectorFig2() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <defs>
        <marker id={`${mid}-ab`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
        <marker id={`${mid}-av`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker>
      </defs>
      <circle cx="140" cy="140" r="94" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="140" y1="140" x2="205" y2="73" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#${mid}-ab)`}/>
      <line x1="140" y1="140" x2="193" y2="217" stroke="#8b5cf6" strokeWidth="2.5" markerEnd={`url(#${mid}-av)`}/>
      <circle cx="140" cy="140" r="3.5" fill="#0f172a"/>
      <text x="146" y="155" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="182" y="98" fill="#3b82f6" fontSize="13" fontWeight="600">a</text>
      <text x="151" y="170" fill="#8b5cf6" fontSize="13" fontWeight="600">b</text>
    </svg>
  )
}

function EllipseFig6() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="121" ry="46" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="272" cy="112" r="4" fill="#3b82f6"/>
      <circle cx="142" cy="84" r="4" fill="#8b5cf6"/>
      <text x="280" y="107" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="150" y="79" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="272" y2="112" stroke="#475569" strokeWidth="1.5"/>
      <circle cx="232" cy="130" r="3" fill="#ef4444"/>
      <text x="238" y="135" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CircleFig4() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="84" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="67" cy="87" r="4" fill="#3b82f6"/>
      <circle cx="204" cy="75" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="75" y="92" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="212" y="80" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="67" y2="87" stroke="#475569" strokeWidth="1.5"/>
      <line x1="67" y1="87" x2="204" y2="75" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function EllipseFig7() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="108" ry="57" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="236" cy="89" r="4" fill="#3b82f6"/>
      <circle cx="78" cy="92" r="4" fill="#8b5cf6"/>
      <text x="244" y="84" fill="#3b82f6" fontSize="13" fontWeight="600">B</text>
      <text x="86" y="87" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig8() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="102" ry="63" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="251" cy="102" r="4" fill="#3b82f6"/>
      <circle cx="85" cy="86" r="4" fill="#8b5cf6"/>
      <text x="259" y="97" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <text x="93" y="81" fill="#8b5cf6" fontSize="13" fontWeight="600">M</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="251" y2="102" stroke="#475569" strokeWidth="1.5"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig25() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="199" height="130" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="249" y2="180" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="249" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="249" cy="180" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="180" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="253" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="253" y="196" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="196" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function TriangleFig9() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="66,206 178,67 249,219" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="66" cy="206" r="4" fill="#0f172a"/>
      <circle cx="178" cy="67" r="4" fill="#0f172a"/>
      <circle cx="249" cy="219" r="4" fill="#0f172a"/>
      <text x="54" y="224" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="173" y="57" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="254" y="237" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="213" cy="143" r="4" fill="#3b82f6"/>
      <text x="219" y="137" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="66" y1="206" x2="213" y2="143" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="213" y1="143" x2="249" y2="219" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function GenericFig26() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="137" y2="60" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function TriangleFig10() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="71,211 180,60 258,198" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="71" cy="211" r="4" fill="#0f172a"/>
      <circle cx="180" cy="60" r="4" fill="#0f172a"/>
      <circle cx="258" cy="198" r="4" fill="#0f172a"/>
      <text x="59" y="229" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="175" y="50" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="263" y="216" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig27() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,81 33,82 36,84 39,86 42,88 45,91 48,94 51,97 54,101 57,105 60,109 63,113 66,117 69,122 72,126 75,131 78,135 81,140 84,144 87,148 90,152 93,156 96,160 99,163 102,167 105,169 108,172 111,174 114,176 117,177 120,179 123,179 126,179 129,179 132,179 135,178 138,177 141,175 144,173 147,170 150,168 153,165 156,161 159,158 162,154 165,150 168,146 171,141 174,137 177,132 180,128 183,123 186,119 189,115 192,110 195,106 198,102 201,99 204,95 207,92 210,89 213,87 216,85 219,83 222,81 225,80 228,80 231,80 234,80 237,80 240,81 243,83 246,84 249,86 252,89 255,92 258,95 261,98 264,102 267,106 270,110 273,114 276,118 279,123 282,127 285,132 288,136" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig11() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="62,220 142,67 252,201" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="62" cy="220" r="4" fill="#0f172a"/>
      <circle cx="142" cy="67" r="4" fill="#0f172a"/>
      <circle cx="252" cy="201" r="4" fill="#0f172a"/>
      <text x="50" y="238" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="137" y="57" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="257" y="219" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig28() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="184" y1="115" x2="184" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="181" y="140" fill="#475569" fontSize="11">7</text>
      <line x1="206" y1="115" x2="206" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="203" y="140" fill="#475569" fontSize="11">8</text>
      <line x1="272" y1="115" x2="272" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="269" y="140" fill="#475569" fontSize="11">11</text>
    </svg>
  )
}

function CoordinateFig12() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="92" ry="62" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="104" cy="97" r="3.5" fill="#8b5cf6"/>
      <text x="112" y="89" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig12() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="66,206 175,45 247,219" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="66" cy="206" r="4" fill="#0f172a"/>
      <circle cx="175" cy="45" r="4" fill="#0f172a"/>
      <circle cx="247" cy="219" r="4" fill="#0f172a"/>
      <text x="54" y="224" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="170" y="35" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="252" y="237" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="211" cy="132" r="4" fill="#3b82f6"/>
      <text x="217" y="126" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="66" y1="206" x2="211" y2="132" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="211" y1="132" x2="247" y2="219" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
      <path d="M 165,57 A 15,15 0 0,1 170,67" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
    </svg>
  )
}

function GenericFig29() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 220,80 220,174 80,174" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 245,60 220,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="220,80 245,60 245,154 220,174" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="174" x2="105" y2="154" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="154" x2="245" y2="154" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function CoordinateFig13() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig14() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,97 45,90 50,85 55,81 60,80 65,80 70,82 75,87 80,93 85,100 90,109 95,118 100,128 105,138 110,148 115,157 120,164 125,171 130,176 135,179 140,179 145,178 150,175 155,171 160,164 165,156 170,147 175,138 180,128 185,118 190,108 195,100 200,92 205,87 210,82 215,80 220,80 225,81 230,85 235,90 240,97 245,105 250,114 255,124 260,134 265,144 270,153 275,161 280,168" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="179" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="171" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig15() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="70" y1="170" x2="275" y2="53" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="70" cy="170" r="3.5" fill="#0f172a"/><circle cx="275" cy="53" r="3.5" fill="#0f172a"/>
      <text x="281" y="47" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig13() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="75,200 168,40 255,201" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="75" cy="200" r="4" fill="#0f172a"/>
      <circle cx="168" cy="40" r="4" fill="#0f172a"/>
      <circle cx="255" cy="201" r="4" fill="#0f172a"/>
      <text x="63" y="218" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="163" y="30" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="260" y="219" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function CoordinateFig16() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,21 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="21" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="13" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function ParabolaFig4() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 71,192 Q 160,98 249,192" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="99" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="91" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="192" r="3" fill="#ef4444"/>
      <text x="168" y="197" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig17() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="112" ry="47" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="193" cy="164" r="3.5" fill="#8b5cf6"/>
      <text x="201" y="156" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig14() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="61,215 177,44 258,215" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="61" cy="215" r="4" fill="#0f172a"/>
      <circle cx="177" cy="44" r="4" fill="#0f172a"/>
      <circle cx="258" cy="215" r="4" fill="#0f172a"/>
      <text x="49" y="233" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="172" y="34" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="263" y="233" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig30() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig31() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="207" height="139" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="257" y2="189" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="257" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="257" cy="189" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="189" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="261" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="261" y="205" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="205" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function EllipseFig9() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="104" ry="66" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="228" cy="80" r="4" fill="#3b82f6"/>
      <circle cx="144" cy="64" r="4" fill="#8b5cf6"/>
      <text x="236" y="75" fill="#3b82f6" fontSize="13" fontWeight="600">M</text>
      <text x="152" y="59" fill="#8b5cf6" fontSize="13" fontWeight="600">N</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <circle cx="222" cy="130" r="3" fill="#ef4444"/>
      <text x="228" y="135" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function QuadrilateralFig1() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="62,192 121,68 238,67 260,206" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="62" cy="192" r="4" fill="#0f172a"/>
      <circle cx="121" cy="68" r="4" fill="#0f172a"/>
      <circle cx="238" cy="67" r="4" fill="#0f172a"/>
      <circle cx="260" cy="206" r="4" fill="#0f172a"/>
      <text x="50" y="208" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="109" y="60" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="244" y="59" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <text x="266" y="222" fill="#0f172a" fontSize="14" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig32() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="143" y2="48" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function CircleFig5() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="83" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="57" cy="121" r="4" fill="#3b82f6"/>
      <circle cx="188" cy="62" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="65" y="126" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="196" y="67" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="57" y2="121" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function GenericFig33() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,152 33,156 36,160 39,163 42,167 45,169 48,172 51,174 54,176 57,177 60,179 63,179 66,179 69,179 72,179 75,178 78,177 81,175 84,173 87,170 90,168 93,165 96,161 99,158 102,154 105,150 108,146 111,141 114,137 117,132 120,128 123,123 126,119 129,115 132,110 135,106 138,102 141,99 144,95 147,92 150,89 153,87 156,85 159,83 162,81 165,80 168,80 171,80 174,80 177,80 180,81 183,83 186,84 189,86 192,89 195,92 198,95 201,98 204,102 207,106 210,110 213,114 216,118 219,123 222,127 225,132 228,136 231,141 234,145 237,149 240,153 243,157 246,161 249,164 252,167 255,170 258,172 261,175 264,176 267,178 270,179 273,179 276,179 279,179 282,179 285,178 288,176" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig34() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="52" y1="115" x2="52" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="49" y="140" fill="#475569" fontSize="11">1</text>
      <line x1="74" y1="115" x2="74" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="71" y="140" fill="#475569" fontSize="11">2</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
      <line x1="162" y1="115" x2="162" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="159" y="140" fill="#475569" fontSize="11">6</text>
      <line x1="272" y1="115" x2="272" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="269" y="140" fill="#475569" fontSize="11">11</text>
    </svg>
  )
}

function TriangleFig15() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="51,206 141,44 259,217" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="51" cy="206" r="4" fill="#0f172a"/>
      <circle cx="141" cy="44" r="4" fill="#0f172a"/>
      <circle cx="259" cy="217" r="4" fill="#0f172a"/>
      <text x="39" y="224" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="136" y="34" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="264" y="235" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="200" cy="130" r="4" fill="#3b82f6"/>
      <text x="206" y="124" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="51" y1="206" x2="200" y2="130" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="200" y1="130" x2="259" y2="217" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function CoordinateFig18() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig35() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 196,80 196,169 80,169" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 221,60 196,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="196,80 221,60 221,149 196,169" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="169" x2="105" y2="149" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="149" x2="221" y2="149" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function TriangleFig16() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="54,213 154,49 240,196" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="54" cy="213" r="4" fill="#0f172a"/>
      <circle cx="154" cy="49" r="4" fill="#0f172a"/>
      <circle cx="240" cy="196" r="4" fill="#0f172a"/>
      <text x="42" y="231" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="149" y="39" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="245" y="214" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <path d="M 144,61 A 15,15 0 0,1 149,71" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
    </svg>
  )
}

function TriangleFig17() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="65,201 175,58 259,218" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="65" cy="201" r="4" fill="#0f172a"/>
      <circle cx="175" cy="58" r="4" fill="#0f172a"/>
      <circle cx="259" cy="218" r="4" fill="#0f172a"/>
      <text x="53" y="219" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="170" y="48" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="264" y="236" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig36() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function CoordinateFig19() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,133 45,143 50,152 55,161 60,168 65,173 70,177 75,179 80,179 85,177 90,173 95,168 100,160 105,152 110,143 115,133 120,123 125,113 130,104 135,96 140,89 145,84 150,81 155,80 160,80 165,83 170,87 175,93 180,101 185,110 190,119 195,129 200,139 205,149 210,157 215,165 220,171 225,176 230,179 235,179 240,178 245,175 250,170 255,164 260,156 265,147 270,137 275,127 280,117" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="89" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="81" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig37() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="183" height="155" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="233" y2="205" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="233" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="233" cy="205" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="205" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="237" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="237" y="221" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="221" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function CoordinateFig20() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="73" y1="194" x2="241" y2="57" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="73" cy="194" r="3.5" fill="#0f172a"/><circle cx="241" cy="57" r="3.5" fill="#0f172a"/>
      <text x="247" y="51" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig21() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,45 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="45" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="37" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig22() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="117" ry="56" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="69" cy="119" r="3.5" fill="#8b5cf6"/>
      <text x="77" y="111" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig23() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig38() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="179" y2="61" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function ParabolaFig5() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 50,181 Q 160,101 270,181" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="102" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="94" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="181" r="3" fill="#ef4444"/>
      <text x="168" y="186" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig39() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,168 33,165 36,161 39,158 42,154 45,150 48,146 51,141 54,137 57,132 60,128 63,123 66,119 69,115 72,110 75,106 78,102 81,99 84,95 87,92 90,89 93,87 96,85 99,83 102,81 105,80 108,80 111,80 114,80 117,80 120,81 123,83 126,84 129,86 132,89 135,92 138,95 141,98 144,102 147,106 150,110 153,114 156,118 159,123 162,127 165,132 168,136 171,141 174,145 177,149 180,153 183,157 186,161 189,164 192,167 195,170 198,172 201,175 204,176 207,178 210,179 213,179 216,179 219,179 222,179 225,178 228,176 231,174 234,172 237,170 240,167 243,164 246,161 249,157 252,153 255,149 258,145 261,140 264,136 267,131 270,127 273,123 276,118 279,114 282,110 285,106 288,102" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig40() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="184" y1="115" x2="184" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="181" y="140" fill="#475569" fontSize="11">7</text>
      <line x1="206" y1="115" x2="206" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="203" y="140" fill="#475569" fontSize="11">8</text>
    </svg>
  )
}

function ParabolaFig6() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 65,194 Q 160,97 255,194" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="98" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="90" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="194" r="3" fill="#ef4444"/>
      <text x="168" y="199" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CircleFig6() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="78" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="150" cy="207" r="4" fill="#3b82f6"/>
      <circle cx="63" cy="114" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="158" y="212" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="71" y="119" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="150" y2="207" stroke="#475569" strokeWidth="1.5"/>
      <line x1="150" y1="207" x2="63" y2="114" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function GenericFig41() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 202,80 202,169 80,169" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 227,60 202,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="202,80 227,60 227,149 202,169" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="169" x2="105" y2="149" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="149" x2="227" y2="149" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function VectorFig3() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <defs>
        <marker id={`${mid}-ab`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
        <marker id={`${mid}-av`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker>
      </defs>
      <circle cx="140" cy="140" r="96" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="140" y1="140" x2="218" y2="84" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#${mid}-ab)`}/>
      <line x1="140" y1="140" x2="86" y2="219" stroke="#8b5cf6" strokeWidth="2.5" markerEnd={`url(#${mid}-av)`}/>
      <circle cx="140" cy="140" r="3.5" fill="#0f172a"/>
      <text x="146" y="155" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="189" y="104" fill="#3b82f6" fontSize="13" fontWeight="600">a</text>
      <text x="98" y="171" fill="#8b5cf6" fontSize="13" fontWeight="600">b</text>
    </svg>
  )
}

function EllipseFig10() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="100" ry="65" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="207" cy="72" r="4" fill="#3b82f6"/>
      <circle cx="83" cy="87" r="4" fill="#8b5cf6"/>
      <text x="215" y="67" fill="#3b82f6" fontSize="13" fontWeight="600">N</text>
      <text x="91" y="82" fill="#8b5cf6" fontSize="13" fontWeight="600">F</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="207" y2="72" stroke="#475569" strokeWidth="1.5"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig42() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function ParabolaFig7() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 52,182 Q 160,101 268,182" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="102" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="94" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="182" r="3" fill="#ef4444"/>
      <text x="168" y="187" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig43() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="199" height="148" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="249" y2="198" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="249" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="249" cy="198" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="198" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="253" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="253" y="214" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="214" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function CircleFig7() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="88" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="221" cy="162" r="4" fill="#3b82f6"/>
      <circle cx="66" cy="177" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="229" y="167" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="74" y="182" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="221" y2="162" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function EllipseFig11() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="130" ry="53" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="251" cy="92" r="4" fill="#3b82f6"/>
      <circle cx="139" cy="77" r="4" fill="#8b5cf6"/>
      <text x="259" y="87" fill="#3b82f6" fontSize="13" fontWeight="600">F</text>
      <text x="147" y="72" fill="#8b5cf6" fontSize="13" fontWeight="600">A</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig24() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,156 45,147 50,138 55,128 60,118 65,108 70,100 75,92 80,87 85,82 90,80 95,80 100,81 105,85 110,90 115,97 120,105 125,114 130,124 135,134 140,144 145,153 150,161 155,168 160,174 165,178 170,179 175,179 180,177 185,173 190,167 195,160 200,151 205,142 210,132 215,122 220,112 225,103 230,95 235,89 240,84 245,81 250,80 255,80 260,83 265,88 270,94 275,102 280,110" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="144" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="136" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig12() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="121" ry="56" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="238" cy="87" r="4" fill="#3b82f6"/>
      <circle cx="83" cy="86" r="4" fill="#8b5cf6"/>
      <text x="246" y="82" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="91" y="81" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="238" y2="87" stroke="#475569" strokeWidth="1.5"/>
      <circle cx="232" cy="130" r="3" fill="#ef4444"/>
      <text x="238" y="135" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig13() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="104" ry="49" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="227" cy="92" r="4" fill="#3b82f6"/>
      <circle cx="76" cy="100" r="4" fill="#8b5cf6"/>
      <text x="235" y="87" fill="#3b82f6" fontSize="13" fontWeight="600">B</text>
      <text x="84" y="95" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig44() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="127" y2="68" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function CircleFig8() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="99" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="179" cy="220" r="4" fill="#3b82f6"/>
      <circle cx="79" cy="51" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="187" y="225" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="87" y="56" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="179" y2="220" stroke="#475569" strokeWidth="1.5"/>
      <line x1="179" y1="220" x2="79" y2="51" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function ParabolaFig8() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 46,219 Q 160,90 274,219" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="91" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="83" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="219" r="3" fill="#ef4444"/>
      <text x="168" y="224" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig25() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="41" y1="171" x2="254" y2="27" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="41" cy="171" r="3.5" fill="#0f172a"/><circle cx="254" cy="27" r="3.5" fill="#0f172a"/>
      <text x="260" y="21" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig26() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,26 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="26" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="18" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig45() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,89 33,87 36,85 39,83 42,81 45,80 48,80 51,80 54,80 57,80 60,81 63,83 66,84 69,86 72,89 75,92 78,95 81,98 84,102 87,106 90,110 93,114 96,118 99,123 102,127 105,132 108,136 111,141 114,145 117,149 120,153 123,157 126,161 129,164 132,167 135,170 138,172 141,175 144,176 147,178 150,179 153,179 156,179 159,179 162,179 165,178 168,176 171,174 174,172 177,170 180,167 183,164 186,161 189,157 192,153 195,149 198,145 201,140 204,136 207,131 210,127 213,123 216,118 219,114 222,110 225,106 228,102 231,98 234,95 237,92 240,89 243,86 246,84 249,83 252,81 255,80 258,80 261,80 264,80 267,80 270,81 273,83 276,85 279,87 282,89 285,92 288,95" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig46() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="52" y1="115" x2="52" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="49" y="140" fill="#475569" fontSize="11">1</text>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="118" y1="115" x2="118" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="115" y="140" fill="#475569" fontSize="11">4</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
      <line x1="162" y1="115" x2="162" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="159" y="140" fill="#475569" fontSize="11">6</text>
    </svg>
  )
}

function CircleFig9() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="73" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="67" cy="128" r="4" fill="#3b82f6"/>
      <circle cx="158" cy="59" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="75" y="133" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="166" y="64" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="67" y2="128" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function EllipseFig14() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="119" ry="60" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="264" cy="101" r="4" fill="#3b82f6"/>
      <circle cx="165" cy="70" r="4" fill="#8b5cf6"/>
      <text x="272" y="96" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <text x="173" y="65" fill="#8b5cf6" fontSize="13" fontWeight="600">M</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="264" y2="101" stroke="#475569" strokeWidth="1.5"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CircleFig10() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="100" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="160" cy="227" r="4" fill="#3b82f6"/>
      <circle cx="40" cy="123" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="168" y="232" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="48" y="128" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="160" y2="227" stroke="#475569" strokeWidth="1.5"/>
      <line x1="160" y1="227" x2="40" y2="123" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function ParabolaFig9() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 52,202 Q 160,95 268,202" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="96" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="88" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="202" r="3" fill="#ef4444"/>
      <text x="168" y="207" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function ParabolaFig10() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 76,200 Q 160,96 244,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="96" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="88" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="200" r="3" fill="#ef4444"/>
      <text x="168" y="205" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig18() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="53,206 149,53 243,203" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="53" cy="206" r="4" fill="#0f172a"/>
      <circle cx="149" cy="53" r="4" fill="#0f172a"/>
      <circle cx="243" cy="203" r="4" fill="#0f172a"/>
      <text x="41" y="224" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="144" y="43" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="248" y="221" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="196" cy="128" r="4" fill="#3b82f6"/>
      <text x="202" y="122" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="53" y1="206" x2="196" y2="128" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="196" y1="128" x2="243" y2="203" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function EllipseFig15() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="123" ry="48" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="248" cy="96" r="4" fill="#3b82f6"/>
      <circle cx="109" cy="86" r="4" fill="#8b5cf6"/>
      <text x="256" y="91" fill="#3b82f6" fontSize="13" fontWeight="600">M</text>
      <text x="117" y="81" fill="#8b5cf6" fontSize="13" fontWeight="600">N</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <circle cx="233" cy="130" r="3" fill="#ef4444"/>
      <text x="239" y="135" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig47() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 215,80 215,160 80,160" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 240,60 215,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="215,80 240,60 240,140 215,160" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="160" x2="105" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="140" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function TriangleFig19() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="74,219 141,70 249,207" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="74" cy="219" r="4" fill="#0f172a"/>
      <circle cx="141" cy="70" r="4" fill="#0f172a"/>
      <circle cx="249" cy="207" r="4" fill="#0f172a"/>
      <text x="62" y="237" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="136" y="60" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="254" y="225" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig48() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function VectorFig4() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <defs>
        <marker id={`${mid}-ab`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
        <marker id={`${mid}-av`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker>
      </defs>
      <circle cx="140" cy="140" r="83" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="140" y1="140" x2="89" y2="74" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#${mid}-ab)`}/>
      <line x1="140" y1="140" x2="71" y2="186" stroke="#8b5cf6" strokeWidth="2.5" markerEnd={`url(#${mid}-av)`}/>
      <circle cx="140" cy="140" r="3.5" fill="#0f172a"/>
      <text x="146" y="155" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="124" y="99" fill="#3b82f6" fontSize="13" fontWeight="600">a</text>
      <text x="90" y="155" fill="#8b5cf6" fontSize="13" fontWeight="600">b</text>
    </svg>
  )
}

function GenericFig49() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="197" height="160" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="247" y2="210" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="247" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="247" cy="210" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="210" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="251" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="251" y="226" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="226" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig50() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="165" y2="52" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function CircleFig11() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="96" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="63" cy="72" r="4" fill="#3b82f6"/>
      <circle cx="230" cy="98" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="71" y="77" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="238" y="103" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="63" y2="72" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function CoordinateFig27() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="84" ry="45" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="94" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="86" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function VectorFig5() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <defs>
        <marker id={`${mid}-ab`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
        <marker id={`${mid}-av`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker>
      </defs>
      <circle cx="140" cy="140" r="96" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="140" y1="140" x2="71" y2="72" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#${mid}-ab)`}/>
      <line x1="140" y1="140" x2="48" y2="168" stroke="#8b5cf6" strokeWidth="2.5" markerEnd={`url(#${mid}-av)`}/>
      <circle cx="140" cy="140" r="3.5" fill="#0f172a"/>
      <text x="146" y="155" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="115" y="98" fill="#3b82f6" fontSize="13" fontWeight="600">a</text>
      <text x="79" y="146" fill="#8b5cf6" fontSize="13" fontWeight="600">b</text>
    </svg>
  )
}

function CoordinateFig28() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CircleFig12() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="88" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="85" cy="198" r="4" fill="#3b82f6"/>
      <circle cx="66" cy="81" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="93" y="203" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="74" y="86" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="85" y2="198" stroke="#475569" strokeWidth="1.5"/>
      <line x1="85" y1="198" x2="66" y2="81" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function GenericFig51() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,110 33,114 36,118 39,123 42,127 45,132 48,136 51,141 54,145 57,149 60,153 63,157 66,161 69,164 72,167 75,170 78,172 81,175 84,176 87,178 90,179 93,179 96,179 99,179 102,179 105,178 108,176 111,174 114,172 117,170 120,167 123,164 126,161 129,157 132,153 135,149 138,145 141,140 144,136 147,131 150,127 153,123 156,118 159,114 162,110 165,106 168,102 171,98 174,95 177,92 180,89 183,86 186,84 189,83 192,81 195,80 198,80 201,80 204,80 207,80 210,81 213,83 216,85 219,87 222,89 225,92 228,95 231,99 234,102 237,106 240,110 243,115 246,119 249,123 252,128 255,132 258,137 261,141 264,146 267,150 270,154 273,158 276,161 279,165 282,168 285,170 288,173" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig20() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="75,212 170,66 250,205" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="75" cy="212" r="4" fill="#0f172a"/>
      <circle cx="170" cy="66" r="4" fill="#0f172a"/>
      <circle cx="250" cy="205" r="4" fill="#0f172a"/>
      <text x="63" y="230" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="165" y="56" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="255" y="223" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <path d="M 160,78 A 15,15 0 0,1 165,88" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
    </svg>
  )
}

function GenericFig52() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="52" y1="115" x2="52" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="49" y="140" fill="#475569" fontSize="11">1</text>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="162" y1="115" x2="162" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="159" y="140" fill="#475569" fontSize="11">6</text>
    </svg>
  )
}

function TriangleFig21() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="79,209 171,48 241,205" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="79" cy="209" r="4" fill="#0f172a"/>
      <circle cx="171" cy="48" r="4" fill="#0f172a"/>
      <circle cx="241" cy="205" r="4" fill="#0f172a"/>
      <text x="67" y="227" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="166" y="38" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="246" y="223" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="206" cy="126" r="4" fill="#3b82f6"/>
      <text x="212" y="120" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="79" y1="209" x2="206" y2="126" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="206" y1="126" x2="241" y2="205" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function CircleFig13() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="99" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="143" cy="31" r="4" fill="#3b82f6"/>
      <circle cx="210" cy="199" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="151" y="36" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="218" y="204" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="143" y2="31" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function GenericFig53() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 198,80 198,178 80,178" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 223,60 198,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="198,80 223,60 223,158 198,178" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="178" x2="105" y2="158" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="158" x2="223" y2="158" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function CoordinateFig29() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,83 45,87 50,93 55,101 60,110 65,119 70,129 75,139 80,149 85,157 90,165 95,171 100,176 105,179 110,179 115,178 120,175 125,170 130,164 135,156 140,147 145,137 150,127 155,117 160,108 165,99 170,92 175,86 180,82 185,80 190,80 195,81 200,85 205,91 210,98 215,106 220,115 225,125 230,135 235,145 240,154 245,162 250,169 255,174 260,178 265,179 270,179 275,177 280,172" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="147" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="139" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig54() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig55() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="185" height="149" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="235" y2="199" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="235" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="235" cy="199" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="199" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="239" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="239" y="215" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="215" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function TriangleFig22() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="71,215 180,56 242,202" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="71" cy="215" r="4" fill="#0f172a"/>
      <circle cx="180" cy="56" r="4" fill="#0f172a"/>
      <circle cx="242" cy="202" r="4" fill="#0f172a"/>
      <text x="59" y="233" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="175" y="46" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="247" y="220" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig56() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="168" y2="51" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function VectorFig6() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <defs>
        <marker id={`${mid}-ab`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
        <marker id={`${mid}-av`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker>
      </defs>
      <circle cx="140" cy="140" r="100" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="140" y1="140" x2="112" y2="43" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#${mid}-ab)`}/>
      <line x1="140" y1="140" x2="176" y2="233" stroke="#8b5cf6" strokeWidth="2.5" markerEnd={`url(#${mid}-av)`}/>
      <circle cx="140" cy="140" r="3.5" fill="#0f172a"/>
      <text x="146" y="155" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="136" y="83" fill="#3b82f6" fontSize="13" fontWeight="600">a</text>
      <text x="143" y="178" fill="#8b5cf6" fontSize="13" fontWeight="600">b</text>
    </svg>
  )
}

function TriangleFig23() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="54,206 167,56 254,191" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="54" cy="206" r="4" fill="#0f172a"/>
      <circle cx="167" cy="56" r="4" fill="#0f172a"/>
      <circle cx="254" cy="191" r="4" fill="#0f172a"/>
      <text x="42" y="224" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="162" y="46" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="259" y="209" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function CoordinateFig30() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="76" y1="181" x2="255" y2="21" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="76" cy="181" r="3.5" fill="#0f172a"/><circle cx="255" cy="21" r="3.5" fill="#0f172a"/>
      <text x="261" y="15" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig31() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,39 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="39" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="31" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig57() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,179 33,179 36,179 39,179 42,179 45,178 48,176 51,174 54,172 57,170 60,167 63,164 66,161 69,157 72,153 75,149 78,145 81,140 84,136 87,131 90,127 93,123 96,118 99,114 102,110 105,106 108,102 111,98 114,95 117,92 120,89 123,86 126,84 129,83 132,81 135,80 138,80 141,80 144,80 147,80 150,81 153,83 156,85 159,87 162,89 165,92 168,95 171,99 174,102 177,106 180,110 183,115 186,119 189,123 192,128 195,132 198,137 201,141 204,146 207,150 210,154 213,158 216,161 219,165 222,168 225,170 228,173 231,175 234,177 237,178 240,179 243,179 246,179 249,179 252,179 255,177 258,176 261,174 264,172 267,169 270,166 273,163 276,160 279,156 282,152 285,148 288,144" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig58() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="52" y1="115" x2="52" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="49" y="140" fill="#475569" fontSize="11">1</text>
      <line x1="162" y1="115" x2="162" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="159" y="140" fill="#475569" fontSize="11">6</text>
      <line x1="206" y1="115" x2="206" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="203" y="140" fill="#475569" fontSize="11">8</text>
      <line x1="228" y1="115" x2="228" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="225" y="140" fill="#475569" fontSize="11">9</text>
      <line x1="250" y1="115" x2="250" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="247" y="140" fill="#475569" fontSize="11">10</text>
    </svg>
  )
}

function VectorFig7() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <defs>
        <marker id={`${mid}-ab`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
        <marker id={`${mid}-av`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker>
      </defs>
      <circle cx="140" cy="140" r="80" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="140" y1="140" x2="101" y2="69" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#${mid}-ab)`}/>
      <line x1="140" y1="140" x2="87" y2="200" stroke="#8b5cf6" strokeWidth="2.5" markerEnd={`url(#${mid}-av)`}/>
      <circle cx="140" cy="140" r="3.5" fill="#0f172a"/>
      <text x="146" y="155" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="130" y="96" fill="#3b82f6" fontSize="13" fontWeight="600">a</text>
      <text x="98" y="162" fill="#8b5cf6" fontSize="13" fontWeight="600">b</text>
    </svg>
  )
}

function TriangleFig24() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="64,200 164,40 246,197" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="64" cy="200" r="4" fill="#0f172a"/>
      <circle cx="164" cy="40" r="4" fill="#0f172a"/>
      <circle cx="246" cy="197" r="4" fill="#0f172a"/>
      <text x="52" y="218" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="159" y="30" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="251" y="215" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="205" cy="118" r="4" fill="#3b82f6"/>
      <text x="211" y="112" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="64" y1="200" x2="205" y2="118" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="205" y1="118" x2="246" y2="197" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
      <path d="M 154,52 A 15,15 0 0,1 159,62" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
    </svg>
  )
}

function TriangleFig25() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,219 144,69 241,202" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="80" cy="219" r="4" fill="#0f172a"/>
      <circle cx="144" cy="69" r="4" fill="#0f172a"/>
      <circle cx="241" cy="202" r="4" fill="#0f172a"/>
      <text x="68" y="237" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="139" y="59" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="246" y="220" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function CoordinateFig32() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="95" ry="45" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="149" cy="94" r="3.5" fill="#8b5cf6"/>
      <text x="157" y="86" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig33() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig26() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="56,215 150,54 258,192" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="56" cy="215" r="4" fill="#0f172a"/>
      <circle cx="150" cy="54" r="4" fill="#0f172a"/>
      <circle cx="258" cy="192" r="4" fill="#0f172a"/>
      <text x="44" y="233" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="145" y="44" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="263" y="210" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function CoordinateFig34() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,178 45,179 50,179 55,177 60,173 65,167 70,160 75,151 80,142 85,132 90,122 95,112 100,103 105,95 110,89 115,84 120,81 125,80 130,80 135,83 140,88 145,94 150,102 155,110 160,120 165,130 170,140 175,149 180,158 185,166 190,172 195,176 200,179 205,179 210,178 215,175 220,170 225,163 230,155 235,146 240,136 245,126 250,116 255,107 260,99 265,91 270,86 275,82 280,80" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="88" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="80" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig35() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="43" y1="186" x2="264" y2="42" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="43" cy="186" r="3.5" fill="#0f172a"/><circle cx="264" cy="42" r="3.5" fill="#0f172a"/>
      <text x="270" y="36" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig36() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,54 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="54" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="46" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig59() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 210,80 210,161 80,161" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 235,60 210,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="210,80 235,60 235,141 210,161" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="161" x2="105" y2="141" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="141" x2="235" y2="141" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function EllipseFig16() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="128" ry="51" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="277" cy="109" r="4" fill="#3b82f6"/>
      <circle cx="158" cy="79" r="4" fill="#8b5cf6"/>
      <text x="285" y="104" fill="#3b82f6" fontSize="13" fontWeight="600">N</text>
      <text x="166" y="74" fill="#8b5cf6" fontSize="13" fontWeight="600">F</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="277" y2="109" stroke="#475569" strokeWidth="1.5"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig60() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function EllipseFig17() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="102" ry="50" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="217" cy="88" r="4" fill="#3b82f6"/>
      <circle cx="69" cy="106" r="4" fill="#8b5cf6"/>
      <text x="225" y="83" fill="#3b82f6" fontSize="13" fontWeight="600">F</text>
      <text x="77" y="101" fill="#8b5cf6" fontSize="13" fontWeight="600">A</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig61() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="183" height="151" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="233" y2="201" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="233" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="233" cy="201" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="201" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="237" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="237" y="217" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="217" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function EllipseFig18() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="102" ry="67" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="244" cy="92" r="4" fill="#3b82f6"/>
      <circle cx="166" cy="63" r="4" fill="#8b5cf6"/>
      <text x="252" y="87" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="174" y="58" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="244" y2="92" stroke="#475569" strokeWidth="1.5"/>
      <circle cx="221" cy="130" r="3" fill="#ef4444"/>
      <text x="227" y="135" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig62() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="151" y2="48" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function EllipseFig19() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="112" ry="64" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="202" cy="70" r="4" fill="#3b82f6"/>
      <circle cx="76" cy="87" r="4" fill="#8b5cf6"/>
      <text x="210" y="65" fill="#3b82f6" fontSize="13" fontWeight="600">B</text>
      <text x="84" y="82" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig63() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,127 33,123 36,118 39,114 42,110 45,106 48,102 51,98 54,95 57,92 60,89 63,86 66,84 69,83 72,81 75,80 78,80 81,80 84,80 87,80 90,81 93,83 96,85 99,87 102,89 105,92 108,95 111,99 114,102 117,106 120,110 123,115 126,119 129,123 132,128 135,132 138,137 141,141 144,146 147,150 150,154 153,158 156,161 159,165 162,168 165,170 168,173 171,175 174,177 177,178 180,179 183,179 186,179 189,179 192,179 195,177 198,176 201,174 204,172 207,169 210,166 213,163 216,160 219,156 222,152 225,148 228,144 231,140 234,135 237,131 240,126 243,122 246,117 249,113 252,109 255,105 258,101 261,97 264,94 267,91 270,88 273,86 276,84 279,82 282,81 285,80 288,80" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig37() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="93" ry="42" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="228" cy="117" r="3.5" fill="#8b5cf6"/>
      <text x="236" y="109" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig64() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="74" y1="115" x2="74" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="71" y="140" fill="#475569" fontSize="11">2</text>
      <line x1="118" y1="115" x2="118" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="115" y="140" fill="#475569" fontSize="11">4</text>
      <line x1="228" y1="115" x2="228" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="225" y="140" fill="#475569" fontSize="11">9</text>
    </svg>
  )
}

function CoordinateFig38() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig65() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 184,80 184,171 80,171" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 209,60 184,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="184,80 209,60 209,151 184,171" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="171" x2="105" y2="151" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="151" x2="209" y2="151" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function GenericFig66() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig67() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="181" height="126" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="231" y2="176" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="231" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="231" cy="176" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="176" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="235" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="235" y="192" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="192" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig68() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="127" y2="58" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function GenericFig69() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,81 33,83 36,85 39,87 42,89 45,92 48,95 51,99 54,102 57,106 60,110 63,115 66,119 69,123 72,128 75,132 78,137 81,141 84,146 87,150 90,154 93,158 96,161 99,165 102,168 105,170 108,173 111,175 114,177 117,178 120,179 123,179 126,179 129,179 132,179 135,177 138,176 141,174 144,172 147,169 150,166 153,163 156,160 159,156 162,152 165,148 168,144 171,140 174,135 177,131 180,126 183,122 186,117 189,113 192,109 195,105 198,101 201,97 204,94 207,91 210,88 213,86 216,84 219,82 222,81 225,80 228,80 231,80 234,80 237,81 240,82 243,83 246,85 249,87 252,90 255,93 258,96 261,99 264,103 267,107 270,111 273,115 276,120 279,124 282,129 285,133 288,138" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig39() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,99 45,92 50,86 55,82 60,80 65,80 70,81 75,85 80,91 85,98 90,106 95,115 100,125 105,135 110,145 115,154 120,162 125,169 130,174 135,178 140,179 145,179 150,177 155,172 160,166 165,159 170,150 175,141 180,131 185,121 190,112 195,103 200,95 205,88 210,84 215,81 220,80 225,80 230,83 235,88 240,95 245,102 250,111 255,121 260,131 265,141 270,150 275,159 280,166" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="179" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="171" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig70() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="74" y1="115" x2="74" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="71" y="140" fill="#475569" fontSize="11">2</text>
      <line x1="118" y1="115" x2="118" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="115" y="140" fill="#475569" fontSize="11">4</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
      <line x1="184" y1="115" x2="184" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="181" y="140" fill="#475569" fontSize="11">7</text>
      <line x1="206" y1="115" x2="206" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="203" y="140" fill="#475569" fontSize="11">8</text>
    </svg>
  )
}

function GenericFig71() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 217,80 217,175 80,175" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 242,60 217,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="217,80 242,60 242,155 217,175" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="175" x2="105" y2="155" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="155" x2="242" y2="155" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function GenericFig72() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function CoordinateFig40() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="41" y1="179" x2="256" y2="27" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="41" cy="179" r="3.5" fill="#0f172a"/><circle cx="256" cy="27" r="3.5" fill="#0f172a"/>
      <text x="262" y="21" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig73() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="190" height="123" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="240" y2="173" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="240" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="240" cy="173" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="173" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="244" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="244" y="189" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="189" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function CoordinateFig41() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,38 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="38" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="30" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig74() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="175" y2="54" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function GenericFig75() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,154 33,158 36,161 39,165 42,168 45,170 48,173 51,175 54,177 57,178 60,179 63,179 66,179 69,179 72,179 75,177 78,176 81,174 84,172 87,169 90,166 93,163 96,160 99,156 102,152 105,148 108,144 111,140 114,135 117,131 120,126 123,122 126,117 129,113 132,109 135,105 138,101 141,97 144,94 147,91 150,88 153,86 156,84 159,82 162,81 165,80 168,80 171,80 174,80 177,81 180,82 183,83 186,85 189,87 192,90 195,93 198,96 201,99 204,103 207,107 210,111 213,115 216,120 219,124 222,129 225,133 228,138 231,142 234,146 237,151 240,155 243,158 246,162 249,165 252,168 255,171 258,173 261,175 264,177 267,178 270,179 273,179 276,179 279,179 282,178 285,177 288,176" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig42() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="98" ry="65" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="79" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="71" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function QuadrilateralFig2() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="74,198 133,64 221,76 255,201" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="74" cy="198" r="4" fill="#0f172a"/>
      <circle cx="133" cy="64" r="4" fill="#0f172a"/>
      <circle cx="221" cy="76" r="4" fill="#0f172a"/>
      <circle cx="255" cy="201" r="4" fill="#0f172a"/>
      <text x="62" y="214" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="121" y="56" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="227" y="68" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <text x="261" y="217" fill="#0f172a" fontSize="14" fontWeight="600">D</text>
      <line x1="74" y1="198" x2="221" y2="76" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3"/>
    </svg>
  )
}

function CoordinateFig43() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig76() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
      <line x1="228" y1="115" x2="228" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="225" y="140" fill="#475569" fontSize="11">9</text>
    </svg>
  )
}

function CoordinateFig44() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,130 45,140 50,149 55,158 60,166 65,172 70,176 75,179 80,179 85,178 90,175 95,170 100,163 105,155 110,146 115,136 120,126 125,116 130,107 135,99 140,91 145,86 150,82 155,80 160,80 165,82 170,86 175,91 180,98 185,107 190,116 195,126 200,136 205,145 210,155 215,163 220,169 225,175 230,178 235,179 240,179 245,176 250,172 255,166 260,158 265,150 270,140 275,130 280,120" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="91" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="83" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig45() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="41" y1="195" x2="240" y2="40" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="41" cy="195" r="3.5" fill="#0f172a"/><circle cx="240" cy="40" r="3.5" fill="#0f172a"/>
      <text x="246" y="34" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CircleFig14() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="74" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="122" cy="201" r="4" fill="#3b82f6"/>
      <circle cx="67" cy="144" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="130" y="206" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="75" y="149" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="122" y2="201" stroke="#475569" strokeWidth="1.5"/>
      <line x1="122" y1="201" x2="67" y2="144" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function GenericFig77() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 206,80 206,178 80,178" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 231,60 206,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="206,80 231,60 231,158 206,178" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="178" x2="105" y2="158" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="158" x2="231" y2="158" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function GenericFig78() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function EllipseFig20() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="110" ry="56" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="244" cy="94" r="4" fill="#3b82f6"/>
      <circle cx="113" cy="79" r="4" fill="#8b5cf6"/>
      <text x="252" y="89" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <text x="121" y="74" fill="#8b5cf6" fontSize="13" fontWeight="600">M</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="244" y2="94" stroke="#475569" strokeWidth="1.5"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig21() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="110" ry="53" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="211" cy="83" r="4" fill="#3b82f6"/>
      <circle cx="64" cy="103" r="4" fill="#8b5cf6"/>
      <text x="219" y="78" fill="#3b82f6" fontSize="13" fontWeight="600">M</text>
      <text x="72" y="98" fill="#8b5cf6" fontSize="13" fontWeight="600">N</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <circle cx="226" cy="130" r="3" fill="#ef4444"/>
      <text x="232" y="135" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig46() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,27 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="27" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="19" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig22() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="104" ry="54" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="237" cy="94" r="4" fill="#3b82f6"/>
      <circle cx="108" cy="83" r="4" fill="#8b5cf6"/>
      <text x="245" y="89" fill="#3b82f6" fontSize="13" fontWeight="600">N</text>
      <text x="116" y="78" fill="#8b5cf6" fontSize="13" fontWeight="600">F</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="237" y2="94" stroke="#475569" strokeWidth="1.5"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function ParabolaFig11() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 66,195 Q 160,97 254,195" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="98" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="90" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="195" r="3" fill="#ef4444"/>
      <text x="168" y="200" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig79() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="197" height="150" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="247" y2="200" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="247" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="247" cy="200" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="200" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="251" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="251" y="216" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="216" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig80() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="168" y2="60" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function CoordinateFig47() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="119" ry="42" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="247" cy="116" r="3.5" fill="#8b5cf6"/>
      <text x="255" y="108" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig23() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="115" ry="54" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="248" cy="95" r="4" fill="#3b82f6"/>
      <circle cx="113" cy="80" r="4" fill="#8b5cf6"/>
      <text x="256" y="90" fill="#3b82f6" fontSize="13" fontWeight="600">F</text>
      <text x="121" y="75" fill="#8b5cf6" fontSize="13" fontWeight="600">A</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig81() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,166 33,163 36,160 39,156 42,152 45,148 48,144 51,140 54,135 57,131 60,126 63,122 66,117 69,113 72,109 75,105 78,101 81,97 84,94 87,91 90,88 93,86 96,84 99,82 102,81 105,80 108,80 111,80 114,80 117,81 120,82 123,83 126,85 129,87 132,90 135,93 138,96 141,99 144,103 147,107 150,111 153,115 156,120 159,124 162,129 165,133 168,138 171,142 174,146 177,151 180,155 183,158 186,162 189,165 192,168 195,171 198,173 201,175 204,177 207,178 210,179 213,179 216,179 219,179 222,178 225,177 228,176 231,174 234,171 237,169 240,166 243,163 246,159 249,155 252,152 255,147 258,143 261,139 264,134 267,130 270,125 273,121 276,116 279,112 282,108 285,104 288,100" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function ParabolaFig12() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 73,192 Q 160,98 247,192" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="99" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="91" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="192" r="3" fill="#ef4444"/>
      <text x="168" y="197" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig82() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="74" y1="115" x2="74" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="71" y="140" fill="#475569" fontSize="11">2</text>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="118" y1="115" x2="118" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="115" y="140" fill="#475569" fontSize="11">4</text>
      <line x1="184" y1="115" x2="184" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="181" y="140" fill="#475569" fontSize="11">7</text>
      <line x1="206" y1="115" x2="206" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="203" y="140" fill="#475569" fontSize="11">8</text>
    </svg>
  )
}

function EllipseFig24() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="106" ry="45" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="241" cy="100" r="4" fill="#3b82f6"/>
      <circle cx="121" cy="88" r="4" fill="#8b5cf6"/>
      <text x="249" y="95" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="129" y="83" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="241" y2="100" stroke="#475569" strokeWidth="1.5"/>
      <circle cx="223" cy="130" r="3" fill="#ef4444"/>
      <text x="229" y="135" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig27() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="70,201 170,67 248,203" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="70" cy="201" r="4" fill="#0f172a"/>
      <circle cx="170" cy="67" r="4" fill="#0f172a"/>
      <circle cx="248" cy="203" r="4" fill="#0f172a"/>
      <text x="58" y="219" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="165" y="57" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="253" y="221" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="209" cy="135" r="4" fill="#3b82f6"/>
      <text x="215" y="129" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="70" y1="201" x2="209" y2="135" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="209" y1="135" x2="248" y2="203" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function HyperbolaFig2() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 110,130 Q 120,80 140,55 Q 155,40 170,35" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 110,130 Q 120,180 140,205 Q 155,220 170,225" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 210,130 Q 200,80 180,55 Q 165,40 150,35" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 210,130 Q 200,180 180,205 Q 165,220 150,225" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="60" y1="40" x2="260" y2="220" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
      <line x1="60" y1="220" x2="260" y2="40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
      <circle cx="110" cy="130" r="4" fill="#ef4444"/>
      <text x="100" y="150" fill="#ef4444" fontSize="13" fontWeight="600">F</text>
      <circle cx="210" cy="130" r="4" fill="#0f172a"/>
      <text x="213" y="150" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig28() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="74,211 159,70 247,209" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="74" cy="211" r="4" fill="#0f172a"/>
      <circle cx="159" cy="70" r="4" fill="#0f172a"/>
      <circle cx="247" cy="209" r="4" fill="#0f172a"/>
      <text x="62" y="229" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="154" y="60" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="252" y="227" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <path d="M 149,82 A 15,15 0 0,1 154,92" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
    </svg>
  )
}

function TriangleFig29() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="51,208 148,50 247,206" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="51" cy="208" r="4" fill="#0f172a"/>
      <circle cx="148" cy="50" r="4" fill="#0f172a"/>
      <circle cx="247" cy="206" r="4" fill="#0f172a"/>
      <text x="39" y="226" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="143" y="40" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="252" y="224" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function ParabolaFig13() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 76,189 Q 160,99 244,189" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="92" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="189" r="3" fill="#ef4444"/>
      <text x="168" y="194" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function EllipseFig25() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="129" ry="54" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="254" cy="93" r="4" fill="#3b82f6"/>
      <circle cx="162" cy="76" r="4" fill="#8b5cf6"/>
      <text x="262" y="88" fill="#3b82f6" fontSize="13" fontWeight="600">B</text>
      <text x="170" y="71" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig48() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function ParabolaFig14() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 75,191 Q 160,98 245,191" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="99" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="91" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="191" r="3" fill="#ef4444"/>
      <text x="168" y="196" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig30() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="61,210 141,70 244,220" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="61" cy="210" r="4" fill="#0f172a"/>
      <circle cx="141" cy="70" r="4" fill="#0f172a"/>
      <circle cx="244" cy="220" r="4" fill="#0f172a"/>
      <text x="49" y="228" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="136" y="60" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="249" y="238" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="192" cy="145" r="4" fill="#3b82f6"/>
      <text x="198" y="139" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="61" y1="210" x2="192" y2="145" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="192" y1="145" x2="244" y2="220" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function GenericFig83() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 215,80 215,170 80,170" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 240,60 215,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="215,80 240,60 240,150 215,170" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="170" x2="105" y2="150" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="150" x2="240" y2="150" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function GenericFig84() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig85() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="207" height="127" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="257" y2="177" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="257" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="257" cy="177" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="177" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="261" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="261" y="193" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="193" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig86() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="178" y2="47" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function GenericFig87() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,88 33,86 36,84 39,82 42,81 45,80 48,80 51,80 54,80 57,81 60,82 63,83 66,85 69,87 72,90 75,93 78,96 81,99 84,103 87,107 90,111 93,115 96,120 99,124 102,129 105,133 108,138 111,142 114,146 117,151 120,155 123,158 126,162 129,165 132,168 135,171 138,173 141,175 144,177 147,178 150,179 153,179 156,179 159,179 162,178 165,177 168,176 171,174 174,171 177,169 180,166 183,163 186,159 189,155 192,152 195,147 198,143 201,139 204,134 207,130 210,125 213,121 216,116 219,112 222,108 225,104 228,100 231,97 234,93 237,91 240,88 243,86 246,84 249,82 252,81 255,80 258,80 261,80 264,80 267,81 270,82 273,84 276,85 279,88 282,90 285,93 288,97" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig88() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="118" y1="115" x2="118" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="115" y="140" fill="#475569" fontSize="11">4</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
    </svg>
  )
}

function CoordinateFig49() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,159 45,150 50,141 55,131 60,121 65,112 70,103 75,95 80,88 85,84 90,81 95,80 100,80 105,83 110,88 115,95 120,102 125,111 130,121 135,131 140,141 145,150 150,159 155,166 160,172 165,177 170,179 175,179 180,178 185,174 190,169 195,162 200,154 205,145 210,135 215,125 220,115 225,106 230,98 235,91 240,85 245,82 250,80 255,80 260,82 265,86 270,92 275,99 280,107" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="141" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="133" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CircleFig15() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="80" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="142" cy="50" r="4" fill="#3b82f6"/>
      <circle cx="216" cy="152" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="150" y="55" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="224" y="157" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="142" y2="50" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function CoordinateFig50() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="79" y1="188" x2="262" y2="40" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="79" cy="188" r="3.5" fill="#0f172a"/><circle cx="262" cy="40" r="3.5" fill="#0f172a"/>
      <text x="268" y="34" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig51() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,35 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="35" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="27" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig89() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 199,80 199,189 80,189" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 224,60 199,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="199,80 224,60 224,169 199,189" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="189" x2="105" y2="169" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="169" x2="224" y2="169" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function CircleFig16() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="83" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="89" cy="195" r="4" fill="#3b82f6"/>
      <circle cx="169" cy="52" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="97" y="200" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="177" y="57" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="89" y2="195" stroke="#475569" strokeWidth="1.5"/>
      <line x1="89" y1="195" x2="169" y2="52" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function GenericFig90() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function CircleFig17() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="72" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="207" cy="105" r="4" fill="#3b82f6"/>
      <circle cx="169" cy="195" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="215" y="110" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="177" y="200" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="207" y2="105" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function GenericFig91() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="202" height="131" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="252" y2="181" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="252" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="252" cy="181" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="181" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="256" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="256" y="197" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="197" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function TriangleFig31() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="75,214 156,70 257,197" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="75" cy="214" r="4" fill="#0f172a"/>
      <circle cx="156" cy="70" r="4" fill="#0f172a"/>
      <circle cx="257" cy="197" r="4" fill="#0f172a"/>
      <text x="63" y="232" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="151" y="60" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="262" y="215" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig92() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="162" y2="60" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function CoordinateFig52() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="98" ry="69" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="139" cy="76" r="3.5" fill="#8b5cf6"/>
      <text x="147" y="68" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function HyperbolaFig3() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 110,130 Q 120,80 140,55 Q 155,40 170,35" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 110,130 Q 120,180 140,205 Q 155,220 170,225" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 210,130 Q 200,80 180,55 Q 165,40 150,35" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 210,130 Q 200,180 180,205 Q 165,220 150,225" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="60" y1="40" x2="260" y2="220" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
      <line x1="60" y1="220" x2="260" y2="40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
      <circle cx="110" cy="130" r="4" fill="#ef4444"/>
      <text x="100" y="150" fill="#ef4444" fontSize="13" fontWeight="600">F</text>
      <circle cx="210" cy="130" r="4" fill="#0f172a"/>
      <text x="213" y="150" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig53() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 100,40 Q 140,110 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 100,220 Q 140,150 150,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,40 Q 180,110 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/><path d="M 220,220 Q 180,150 170,130" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="200" cy="100" r="3.5" fill="#8b5cf6"/>
      <text x="208" y="92" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig32() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="70,219 179,48 255,211" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="70" cy="219" r="4" fill="#0f172a"/>
      <circle cx="179" cy="48" r="4" fill="#0f172a"/>
      <circle cx="255" cy="211" r="4" fill="#0f172a"/>
      <text x="58" y="237" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="174" y="38" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="260" y="229" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <path d="M 169,60 A 15,15 0 0,1 174,70" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
    </svg>
  )
}

function TriangleFig33() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="61,202 173,46 252,206" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="61" cy="202" r="4" fill="#0f172a"/>
      <circle cx="173" cy="46" r="4" fill="#0f172a"/>
      <circle cx="252" cy="206" r="4" fill="#0f172a"/>
      <text x="49" y="220" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="168" y="36" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="257" y="224" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="212" cy="126" r="4" fill="#3b82f6"/>
      <text x="218" y="120" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="61" y1="202" x2="212" y2="126" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="212" y1="126" x2="252" y2="206" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function CircleFig18() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="88" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="185" cy="205" r="4" fill="#3b82f6"/>
      <circle cx="54" cy="110" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="193" y="210" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="62" y="115" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="185" y2="205" stroke="#475569" strokeWidth="1.5"/>
      <line x1="185" y1="205" x2="54" y2="110" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function CircleFig19() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="100" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="231" cy="88" r="4" fill="#3b82f6"/>
      <circle cx="215" cy="195" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="239" y="93" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="223" y="200" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="231" y2="88" stroke="#475569" strokeWidth="1.5"/>
    </svg>
  )
}

function TriangleFig34() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="63,216 140,59 252,203" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="63" cy="216" r="4" fill="#0f172a"/>
      <circle cx="140" cy="59" r="4" fill="#0f172a"/>
      <circle cx="252" cy="203" r="4" fill="#0f172a"/>
      <text x="51" y="234" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="135" y="49" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="257" y="221" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig93() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,111 33,115 36,120 39,124 42,129 45,133 48,138 51,142 54,146 57,151 60,155 63,158 66,162 69,165 72,168 75,171 78,173 81,175 84,177 87,178 90,179 93,179 96,179 99,179 102,178 105,177 108,176 111,174 114,171 117,169 120,166 123,163 126,159 129,155 132,152 135,147 138,143 141,139 144,134 147,130 150,125 153,121 156,116 159,112 162,108 165,104 168,100 171,97 174,93 177,91 180,88 183,86 186,84 189,82 192,81 195,80 198,80 201,80 204,80 207,81 210,82 213,84 216,85 219,88 222,90 225,93 228,97 231,100 234,104 237,108 240,112 243,116 246,121 249,125 252,130 255,134 258,139 261,143 264,147 267,151 270,155 273,159 276,163 279,166 282,169 285,171 288,174" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig94() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="52" y1="115" x2="52" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="49" y="140" fill="#475569" fontSize="11">1</text>
      <line x1="74" y1="115" x2="74" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="71" y="140" fill="#475569" fontSize="11">2</text>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
      <line x1="162" y1="115" x2="162" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="159" y="140" fill="#475569" fontSize="11">6</text>
    </svg>
  )
}

function GenericFig95() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 182,80 182,184 80,184" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 207,60 182,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="182,80 207,60 207,164 182,184" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="184" x2="105" y2="164" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="164" x2="207" y2="164" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function EllipseFig26() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="127" ry="69" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="268" cy="94" r="4" fill="#3b82f6"/>
      <circle cx="66" cy="83" r="4" fill="#8b5cf6"/>
      <text x="276" y="89" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <text x="74" y="78" fill="#8b5cf6" fontSize="13" fontWeight="600">M</text>
      <circle cx="160" cy="130" r="3" fill="#0f172a"/>
      <text x="166" y="135" fill="#0f172a" fontSize="12" fontWeight="600">O</text>
      <line x1="160" y1="130" x2="268" y2="94" stroke="#475569" strokeWidth="1.5"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function VectorFig8() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <defs>
        <marker id={`${mid}-ab`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
        <marker id={`${mid}-av`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker>
      </defs>
      <circle cx="140" cy="140" r="80" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="140" y1="140" x2="146" y2="60" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#${mid}-ab)`}/>
      <line x1="140" y1="140" x2="60" y2="141" stroke="#8b5cf6" strokeWidth="2.5" markerEnd={`url(#${mid}-av)`}/>
      <circle cx="140" cy="140" r="3.5" fill="#0f172a"/>
      <text x="146" y="155" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="153" y="92" fill="#3b82f6" fontSize="13" fontWeight="600">a</text>
      <text x="85" y="132" fill="#8b5cf6" fontSize="13" fontWeight="600">b</text>
    </svg>
  )
}

function TriangleFig35() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="59,215 141,52 259,214" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="59" cy="215" r="4" fill="#0f172a"/>
      <circle cx="141" cy="52" r="4" fill="#0f172a"/>
      <circle cx="259" cy="214" r="4" fill="#0f172a"/>
      <text x="47" y="233" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="136" y="42" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="264" y="232" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig96() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig97() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="214" height="130" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="264" y2="180" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="264" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="264" cy="180" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="180" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="268" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="268" y="196" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="196" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function CoordinateFig54() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="40,82 45,86 50,91 55,98 60,107 65,116 70,126 75,136 80,145 85,155 90,163 95,169 100,175 105,178 110,179 115,179 120,176 125,172 130,166 135,158 140,150 145,140 150,130 155,120 160,111 165,102 170,94 175,88 180,83 185,80 190,80 195,81 200,84 205,89 210,95 215,103 220,112 225,122 230,132 235,142 240,151 245,159 250,167 255,173 260,177 265,179 270,179 275,178 280,174" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="150" r="3.5" fill="#8b5cf6"/>
      <text x="148" y="142" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig98() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="158" y2="57" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function ParabolaFig15() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 76,196 Q 160,97 244,196" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="98" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="90" fill="#8b5cf6" fontSize="13" fontWeight="600">P</text>
      <circle cx="160" cy="196" r="3" fill="#ef4444"/>
      <text x="168" y="201" fill="#ef4444" fontSize="12" fontWeight="600">F</text>
      <text x="295" y="135" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig55() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="79" y1="179" x2="265" y2="54" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="79" cy="179" r="3.5" fill="#0f172a"/><circle cx="265" cy="54" r="3.5" fill="#0f172a"/>
      <text x="271" y="48" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function CoordinateFig56() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 40,200 Q 160,43 280,200" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="160" cy="43" r="3.5" fill="#8b5cf6"/>
      <text x="168" y="35" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig99() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,179 33,179 36,179 39,179 42,178 45,177 48,176 51,174 54,171 57,169 60,166 63,163 66,159 69,155 72,152 75,147 78,143 81,139 84,134 87,130 90,125 93,121 96,116 99,112 102,108 105,104 108,100 111,97 114,93 117,91 120,88 123,86 126,84 129,82 132,81 135,80 138,80 141,80 144,80 147,81 150,82 153,84 156,85 159,88 162,90 165,93 168,97 171,100 174,104 177,108 180,112 183,116 186,121 189,125 192,130 195,134 198,139 201,143 204,147 207,151 210,155 213,159 216,163 219,166 222,169 225,171 228,174 231,176 234,177 237,178 240,179 243,179 246,179 249,179 252,178 255,177 258,175 261,173 264,171 267,168 270,165 273,162 276,159 279,155 282,151 285,147 288,142" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig100() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="74" y1="115" x2="74" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="71" y="140" fill="#475569" fontSize="11">2</text>
      <line x1="250" y1="115" x2="250" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="247" y="140" fill="#475569" fontSize="11">10</text>
      <line x1="272" y1="115" x2="272" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="269" y="140" fill="#475569" fontSize="11">11</text>
    </svg>
  )
}

function GenericFig101() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 220,80 220,181 80,181" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 245,60 220,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="220,80 245,60 245,161 220,181" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="181" x2="105" y2="161" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="161" x2="245" y2="161" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function GenericFig102() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function TriangleFig36() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="60,210 143,40 251,212" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="60" cy="210" r="4" fill="#0f172a"/>
      <circle cx="143" cy="40" r="4" fill="#0f172a"/>
      <circle cx="251" cy="212" r="4" fill="#0f172a"/>
      <text x="48" y="228" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="138" y="30" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="256" y="230" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="197" cy="126" r="4" fill="#3b82f6"/>
      <text x="203" y="120" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="60" y1="210" x2="197" y2="126" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="197" y1="126" x2="251" y2="212" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
      <path d="M 133,52 A 15,15 0 0,1 138,62" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
    </svg>
  )
}

function GenericFig103() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="198" height="129" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="248" y2="179" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="248" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="248" cy="179" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="179" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="252" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="252" y="195" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="195" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig104() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="139" y2="45" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function TriangleFig37() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="55,205 171,48 245,197" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="55" cy="205" r="4" fill="#0f172a"/>
      <circle cx="171" cy="48" r="4" fill="#0f172a"/>
      <circle cx="245" cy="197" r="4" fill="#0f172a"/>
      <text x="43" y="223" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="166" y="38" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="250" y="215" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig105() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,125 33,121 36,116 39,112 42,108 45,104 48,100 51,97 54,93 57,91 60,88 63,86 66,84 69,82 72,81 75,80 78,80 81,80 84,80 87,81 90,82 93,84 96,85 99,88 102,90 105,93 108,97 111,100 114,104 117,108 120,112 123,116 126,121 129,125 132,130 135,134 138,139 141,143 144,147 147,151 150,155 153,159 156,163 159,166 162,169 165,171 168,174 171,176 174,177 177,178 180,179 183,179 186,179 189,179 192,178 195,177 198,175 201,173 204,171 207,168 210,165 213,162 216,159 219,155 222,151 225,147 228,142 231,138 234,133 237,129 240,124 243,120 246,116 249,111 252,107 255,103 258,100 261,96 264,93 267,90 270,87 273,85 276,83 279,82 282,81 285,80 288,80" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function TriangleFig38() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="53,205 171,49 258,205" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="53" cy="205" r="4" fill="#0f172a"/>
      <circle cx="171" cy="49" r="4" fill="#0f172a"/>
      <circle cx="258" cy="205" r="4" fill="#0f172a"/>
      <text x="41" y="223" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="166" y="39" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="263" y="223" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
    </svg>
  )
}

function GenericFig106() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="96" y1="115" x2="96" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="93" y="140" fill="#475569" fontSize="11">3</text>
      <line x1="118" y1="115" x2="118" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="115" y="140" fill="#475569" fontSize="11">4</text>
      <line x1="140" y1="115" x2="140" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="137" y="140" fill="#475569" fontSize="11">5</text>
      <line x1="184" y1="115" x2="184" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="181" y="140" fill="#475569" fontSize="11">7</text>
      <line x1="228" y1="115" x2="228" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="225" y="140" fill="#475569" fontSize="11">9</text>
    </svg>
  )
}

function TriangleFig39() {
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="50,214 149,50 253,201" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="50" cy="214" r="4" fill="#0f172a"/>
      <circle cx="149" cy="50" r="4" fill="#0f172a"/>
      <circle cx="253" cy="201" r="4" fill="#0f172a"/>
      <text x="38" y="232" fill="#0f172a" fontSize="14" fontWeight="600">A</text>
      <text x="144" y="40" fill="#0f172a" fontSize="14" fontWeight="600">B</text>
      <text x="258" y="219" fill="#0f172a" fontSize="14" fontWeight="600">C</text>
      <circle cx="201" cy="125" r="4" fill="#3b82f6"/>
      <text x="207" y="119" fill="#3b82f6" fontSize="13" fontWeight="600">D</text>
      <line x1="50" y1="214" x2="201" y2="125" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="201" y1="125" x2="253" y2="201" stroke="#475569" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}

function GenericFig107() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 194,80 194,172 80,172" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 219,60 194,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="194,80 219,60 219,152 194,172" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="172" x2="105" y2="152" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="152" x2="219" y2="152" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function HyperbolaFig4() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <path d="M 110,130 Q 120,80 140,55 Q 155,40 170,35" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 110,130 Q 120,180 140,205 Q 155,220 170,225" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 210,130 Q 200,80 180,55 Q 165,40 150,35" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M 210,130 Q 200,180 180,205 Q 165,220 150,225" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="60" y1="40" x2="260" y2="220" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
      <line x1="60" y1="220" x2="260" y2="40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
      <circle cx="110" cy="130" r="4" fill="#ef4444"/>
      <text x="100" y="150" fill="#ef4444" fontSize="13" fontWeight="600">F</text>
      <circle cx="210" cy="130" r="4" fill="#0f172a"/>
      <text x="213" y="150" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig108() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig109() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="197" height="132" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="247" y2="182" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="247" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="247" cy="182" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="182" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="251" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="251" y="198" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="198" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function VectorFig9() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <defs>
        <marker id={`${mid}-ab`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
        <marker id={`${mid}-av`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker>
      </defs>
      <circle cx="140" cy="140" r="87" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="140" y1="140" x2="108" y2="59" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#${mid}-ab)`}/>
      <line x1="140" y1="140" x2="56" y2="164" stroke="#8b5cf6" strokeWidth="2.5" markerEnd={`url(#${mid}-av)`}/>
      <circle cx="140" cy="140" r="3.5" fill="#0f172a"/>
      <text x="146" y="155" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="134" y="91" fill="#3b82f6" fontSize="13" fontWeight="600">a</text>
      <text x="83" y="144" fill="#8b5cf6" fontSize="13" fontWeight="600">b</text>
    </svg>
  )
}

function CircleFig20() {
  return (
    <svg viewBox="0 0 280 280" className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white">
      <circle cx="140" cy="130" r="81" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="140" cy="130" r="3" fill="#0f172a"/>
      <circle cx="74" cy="82" r="4" fill="#3b82f6"/>
      <circle cx="220" cy="127" r="4" fill="#8b5cf6"/>
      <text x="146" y="135" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
      <text x="82" y="87" fill="#3b82f6" fontSize="13" fontWeight="600">A</text>
      <text x="228" y="132" fill="#8b5cf6" fontSize="13" fontWeight="600">B</text>
      <line x1="140" y1="130" x2="74" y2="82" stroke="#475569" strokeWidth="1.5"/>
      <line x1="74" y1="82" x2="220" y2="127" stroke="#3b82f6" strokeWidth="2"/>
    </svg>
  )
}

function CoordinateFig57() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="160" y1="240" x2="160" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <ellipse cx="160" cy="130" rx="99" ry="57" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="158" cy="175" r="3.5" fill="#8b5cf6"/>
      <text x="166" y="167" fill="#475569" fontSize="12" fontWeight="600">P</text>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="165" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig110() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="164" y2="52" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function GenericFig111() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,82 33,84 36,85 39,88 42,90 45,93 48,97 51,100 54,104 57,108 60,112 63,116 66,121 69,125 72,130 75,134 78,139 81,143 84,147 87,151 90,155 93,159 96,163 99,166 102,169 105,171 108,174 111,176 114,177 117,178 120,179 123,179 126,179 129,179 132,178 135,177 138,175 141,173 144,171 147,168 150,165 153,162 156,159 159,155 162,151 165,147 168,142 171,138 174,133 177,129 180,124 183,120 186,116 189,111 192,107 195,103 198,100 201,96 204,93 207,90 210,87 213,85 216,83 219,82 222,81 225,80 228,80 231,80 234,80 237,81 240,82 243,84 246,86 249,88 252,91 255,94 258,97 261,101 264,105 267,109 270,113 273,117 276,121 279,126 282,130 285,135 288,139" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig112() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="52" y1="115" x2="52" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="49" y="140" fill="#475569" fontSize="11">1</text>
      <line x1="74" y1="115" x2="74" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="71" y="140" fill="#475569" fontSize="11">2</text>
      <line x1="250" y1="115" x2="250" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="247" y="140" fill="#475569" fontSize="11">10</text>
    </svg>
  )
}

function GenericFig113() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 210,80 210,169 80,169" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 235,60 210,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="210,80 235,60 235,149 210,169" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="169" x2="105" y2="149" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="149" x2="235" y2="149" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function GenericFig114() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig115() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="208" height="132" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="258" y2="182" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="258" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="258" cy="182" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="182" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="262" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="262" y="198" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="198" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig116() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="131" y2="69" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function GenericFig117() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,155 33,159 36,163 39,166 42,169 45,171 48,174 51,176 54,177 57,178 60,179 63,179 66,179 69,179 72,178 75,177 78,175 81,173 84,171 87,168 90,165 93,162 96,159 99,155 102,151 105,147 108,142 111,138 114,133 117,129 120,124 123,120 126,116 129,111 132,107 135,103 138,100 141,96 144,93 147,90 150,87 153,85 156,83 159,82 162,81 165,80 168,80 171,80 174,80 177,81 180,82 183,84 186,86 189,88 192,91 195,94 198,97 201,101 204,105 207,109 210,113 213,117 216,121 219,126 222,130 225,135 228,139 231,144 234,148 237,152 240,156 243,160 246,163 249,166 252,169 255,172 258,174 261,176 264,177 267,178 270,179 273,179 276,179 279,179 282,178 285,177 288,175" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

function GenericFig118() {
  return (
    <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="280,115 290,120 280,125" fill="#0f172a"/>
      <line x1="52" y1="115" x2="52" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="49" y="140" fill="#475569" fontSize="11">1</text>
      <line x1="118" y1="115" x2="118" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="115" y="140" fill="#475569" fontSize="11">4</text>
      <line x1="206" y1="115" x2="206" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="203" y="140" fill="#475569" fontSize="11">8</text>
      <line x1="228" y1="115" x2="228" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="225" y="140" fill="#475569" fontSize="11">9</text>
      <line x1="272" y1="115" x2="272" y2="125" stroke="#0f172a" strokeWidth="2"/>
      <text x="269" y="140" fill="#475569" fontSize="11">11</text>
    </svg>
  )
}

function GenericFig119() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <polygon points="80,80 211,80 211,166 80,166" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <polygon points="80,80 105,60 236,60 211,80" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <polygon points="211,80 236,60 236,146 211,166" fill="none" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="80" x2="105" y2="60" stroke="#475569" strokeWidth="1.5"/>
      <line x1="80" y1="166" x2="105" y2="146" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="105" y1="146" x2="236" y2="146" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}

function GenericFig120() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="40" y1="200" x2="260" y2="50" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="40" x2="250" y2="210" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="155" cy="122" r="4" fill="#3b82f6"/>
      <text x="163" y="114" fill="#3b82f6" fontSize="13" fontWeight="600">P</text>
      <circle cx="40" cy="200" r="3" fill="#475569"/>
      <circle cx="260" cy="50" r="3" fill="#475569"/>
      <text x="28" y="216" fill="#475569" fontSize="12">A</text>
      <text x="265" y="55" fill="#475569" fontSize="12">B</text>
    </svg>
  )
}

function GenericFig121() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <rect x="50" y="50" width="192" height="139" fill="none" stroke="#0f172a" strokeWidth="2"/>
      <line x1="50" y1="50" x2="242" y2="189" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="242" cy="50" r="3.5" fill="#0f172a"/>
      <circle cx="242" cy="189" r="3.5" fill="#0f172a"/>
      <circle cx="50" cy="189" r="3.5" fill="#0f172a"/>
      <text x="40" y="44" fill="#0f172a" fontSize="13" fontWeight="600">A</text>
      <text x="246" y="44" fill="#0f172a" fontSize="13" fontWeight="600">B</text>
      <text x="246" y="205" fill="#0f172a" fontSize="13" fontWeight="600">C</text>
      <text x="40" y="205" fill="#0f172a" fontSize="13" fontWeight="600">D</text>
    </svg>
  )
}

function GenericFig122() {
  return (
    <svg viewBox="0 0 300 240" className="mx-auto w-full max-w-[300px] rounded-2xl border border-slate-200 bg-white">
      <line x1="100" y1="180" x2="250" y2="180" stroke="#0f172a" strokeWidth="2"/>
      <line x1="100" y1="180" x2="135" y2="54" stroke="#0f172a" strokeWidth="2"/>
      <path d="M 130,180 A 30,30 0 0,0 120,160" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="130" y="168" fill="#8b5cf6" fontSize="12">α</text>
      <circle cx="100" cy="180" r="4" fill="#0f172a"/>
      <text x="85" y="198" fill="#0f172a" fontSize="13" fontWeight="600">O</text>
    </svg>
  )
}

function GenericFig123() {
  const mid = React.useId()
  return (
    <svg viewBox="0 0 320 260" className="mx-auto w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white">
      <defs><marker id={`${mid}-ax`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#94a3b8" strokeWidth="1"/></marker></defs>
      <line x1="20" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <line x1="30" y1="240" x2="30" y2="15" stroke="#94a3b8" strokeWidth="1.5" markerEnd={`url(#${mid}-ax)`}/>
      <polyline points="30,165 33,162 36,159 39,155 42,151 45,147 48,142 51,138 54,133 57,129 60,124 63,120 66,116 69,111 72,107 75,103 78,100 81,96 84,93 87,90 90,87 93,85 96,83 99,82 102,81 105,80 108,80 111,80 114,80 117,81 120,82 123,84 126,86 129,88 132,91 135,94 138,97 141,101 144,105 147,109 150,113 153,117 156,121 159,126 162,130 165,135 168,139 171,144 174,148 177,152 180,156 183,160 186,163 189,166 192,169 195,172 198,174 201,176 204,177 207,178 210,179 213,179 216,179 219,179 222,178 225,177 228,175 231,173 234,171 237,168 240,165 243,161 246,158 249,154 252,150 255,146 258,141 261,137 264,133 267,128 270,124 273,119 276,115 279,111 282,107 285,103 288,99" fill="none" stroke="#3b82f6" strokeWidth="2"/>
      <text x="295" y="145" fill="#475569" fontSize="12">x</text>
      <text x="35" y="20" fill="#475569" fontSize="12">y</text>
    </svg>
  )
}

/* ── Figure registry ── */
const figureByHash: Record<string, React.ComponentType> = {
  "501d6fc625a7b2bb384f64240e54a6dbec86ee040d2810b5e349bb96e01e7439.jpg": GenericFig1,
  "7a4d2737d9f239d48c190a674f4ac9936ab1301f689325f92a074df3ce6ad296.jpg": GenericFig2,
  "9602685c1dcf9bd8c593f49e7cb2560e85f35d840f2e8f5ef5d07ec3d232b218.jpg": GenericFig3,
  "fe2521a23a0b29683c2eb142d561d694bab7fc009f37ef1346924e1467edd9b3.jpg": GenericFig4,
  "fc77979d5b3506d34a73895c4053515e80cadfe7cae57c0be39525f743c99fc2.jpg": GenericFig5,
  "c3b3ebc38a24a63b5c5e0cb5aee97dcac6d3614afeb11276295df945a3d892f0.jpg": GenericFig6,
  "c95ede4811d34cca33e8a79d6cfe310fcdbd81b883804f64a6d8969f43d55519.jpg": GenericFig7,
  "7743da94abf8cfa5200bde90d80ab3770dd3fe8aa980cbf8444716d69c8c8374.jpg": GenericFig8,
  "f83a568a5331273a48e0fc5a0409efb1c5b7ca7d77906974c82929819ce86aec.jpg": GenericFig9,
  "04c35f642aa9f1315c141f1c1c3eb9fbcffdd7b65ad0ea67d33cff0db19576f0.jpg": GenericFig10,
  "62add5e2b7f41fa790d1c8e3cabddaa2e693eceb28b86571b49b4fa56ca2651d.jpg": TriangleFig1,
  "d818aafd972a4698e7f948cf5a6c13debd5c6537560eda5f0058f93e2e15a068.jpg": CoordinateFig1,
  "5bd231feede6f63accba664536287bb69c2b5382db7d4ca48ec360d0d99d9890.jpg": HyperbolaFig1,
  "1c6dd017fa91a7e853189a94a28ff45ae026bdff8f4406dfb1fa17a9008f0eef.jpg": GenericFig11,
  "2869e5882eba0972082d16dd032b3b76d4a7c4f2310b014ba0f22035b8497e14.jpg": TriangleFig2,
  "4bd7a764e72897e89774f9e4c089f090c136939e0328aad7955f54cf1ed86417.jpg": TriangleFig3,
  "5ba82050eb89fdae9e792487f941c90dfbf6a249761f2fa513d3c38197cea14d.jpg": TriangleFig4,
  "809a11c66a4ac704b346c7b30938b1ac6f3721bf90c4cad2d97e247b017e3fa3.jpg": GenericFig12,
  "b77cfe991810d56ada6f56acc705e869f1836ad6b9d9280429924fd4d72993ac.jpg": GenericFig13,
  "12359aac1cb7a5b5ceee4cb9e7ae5479cd8d20fc4590e27e14a8d8437a357c40.jpg": GenericFig14,
  "870525a73e7da1b18487fc3282fe1cd8b17a0c595f8269e83b21b688d6b8c545.jpg": CoordinateFig2,
  "1bb807cff93f3f60abe33acff0899b45d0a4e81a6ab4553c4af7bb416d355193.jpg": TriangleFig5,
  "5ceb8ac501488ad37a21f61470d986bd29d1e0f5338ed55de28b477c7a5a07ee.jpg": CircleFig1,
  "be4722c84eb0cf88a65662a475f3dc20a934f28c36cf34a884f18e983624a230.jpg": GenericFig15,
  "55ed3c3b3f6b181794ba0752e33c97e5e09b5753cbc4b00c018213405585f4ea.jpg": CoordinateFig3,
  "1da8cfb0713d2b4ddc5c8082f4dc156add2dc44fd904494d63e3913fcc6ebc89.jpg": EllipseFig1,
  "4e8847b7fd702faffe3d1576565b2c9a5aedf6689e232bef247b5578d621886c.jpg": EllipseFig2,
  "da1a042446331f0f1fcd49479becf6b04d5822176beabb2d87dc8afb4e1acb41.jpg": EllipseFig3,
  "bff9d04ce6b28eaa2d0f1384c6d45a7e005edb6a2abe84fcd3965491d8b378a2.jpg": TriangleFig6,
  "c7c2551c4d55ef1b97c509470572956e7ed25cf94b96c2c024e3d77ba9a33f40.jpg": TriangleFig7,
  "7fa9c7463ffa9c6fa96bec47da69258460d428968318ef70a497afb3319711ba.jpg": GenericFig16,
  "ac24e71b9bff5056cb8b29223f5e976ff3571d8f9dfd9611240054f927cf916a.jpg": TriangleFig8,
  "a1c9bf35f49aba866c1c14ab345e01576739146d9b1a59bde56338b973cb68af.jpg": EllipseFig4,
  "ddaa08f8ed25b0214305431c521d526ebe8e06e77b7773d4c13f24c987ab99fb.jpg": EllipseFig5,
  "4654d7529be45346ad9c645b98f5bdb45a7f916b305924922925d695ee601a63.jpg": ParabolaFig1,
  "afc762c32754b6d20a0d07fc23f8488c22b93ef8595105283375f540dd5dd4a2.jpg": ParabolaFig2,
  "e0ab54fcc21dc3a398ae1c4d91b32da8981868606da50607e250384d75440164.jpg": CoordinateFig4,
  "cd479af10e407f3e3e3c9de024324e14612eb020223f4d079e96519bb3cf13fe.jpg": ParabolaFig3,
  "89797938e5dbb859e97be1a60345f052cf9f125deff5dee58aef8c0c750555c4.jpg": CoordinateFig5,
  "ef2347b46092ea459fc1d8521ef00215deb6a14c71c763e0d435ce9261639c88.jpg": GenericFig17,
  "f2d7b206e7d84e3a1ee4d1d6076d7ce81ffbdc5ec20c84568edc997ddd4143dd.jpg": CoordinateFig6,
  "e6194d7e6058516cfc980028366241723f22ef0f2398f48efde7ce5a62856fe1.jpg": GenericFig18,
  "9b01883b2677f99b2b94882659fc0a73c0573cf3ea90d852c86ad04c00e14629.jpg": GenericFig19,
  "aee84084c416aab0ca9a44e43af27a4ea6dd8888153349241d4bfb3cab5380b7.jpg": CoordinateFig7,
  "1907caa941957bc0fe9770e48ec744f48fd8e583fab2a48c56314c8462a8238a.jpg": CircleFig2,
  "dbd89449e5027418f66147b0360194296afa2a82dac1c8e13aa1d028c568d0c6.jpg": CoordinateFig8,
  "209405f18cc497c8e4811cafd23ecf6edfcbc2578286496c96e12aea35ff893e.jpg": CoordinateFig9,
  "78595f5049604b4b848c86a572a15694cfb7b4ff5110fde5f510f9575c4fcdd2.jpg": CoordinateFig10,
  "f8b1715c0e9fcc2707f78f40552b43b0a78c8b95d87ef9cbd6b20d1544fffca4.jpg": GenericFig20,
  "8732657aff777964e88e8abd528de56efda6972e1dae704f35b6ff1599d71508.jpg": CoordinateFig11,
  "9c4cb66de71ccb49d0d1bca5500979d544e660f865bedc0e7a0f8418b03f9d9e.jpg": GenericFig21,
  "11c957c9ec47a7372587d0fbf1f8a5f3800518b6995f16bff18610ab167ba7f3.jpg": GenericFig22,
  "bdd596901bef440253d1f9de67a2bb97867a659acab081c0f3aa7d2dd8fb9a60.jpg": CircleFig3,
  "f7b83e15b6f53a68511721fec6189124f038327d0b762633bc5e144500cdb014.jpg": GenericFig23,
  "2e900e9fad7b02399c60679562c6bba621cab3960935d5e5636ee730e9f202d3.jpg": VectorFig1,
  "de6926ea38dd812a0a14b256493accabbaa43063a582eea30dbd0015f81e783f.jpg": GenericFig24,
  "30bbe7d1821df3857ae7da24fe77ebccfa24feef8ca3e5d5454142badfa32b9d.jpg": VectorFig2,
  "5c748daca3e7fedf3b6bb87b968944a3bb442694cd799b50385e4da4c649e0d7.jpg": EllipseFig6,
  "fbe5e110b4b71fd89c8481210770da5f23e0c5b5b0ea7e0a0d4175bbeaf90a76.jpg": CircleFig4,
  "9fd81675d0d70908f5c10950a98f18a27d9ed826418608edbf4fa4df0ba620ec.jpg": EllipseFig7,
  "d0bc4cb565effc34bb27a46b90c22fc00d4c8d5247b427be790661b33d23cfb9.jpg": EllipseFig8,
  "5e6465213622b5ee8ba5398c14a8b5cb02433b7bab4eda0278714046c9e97473.jpg": GenericFig25,
  "f764ff5b7ea8f63ae130e1ed71bad4e7267dc15f796514424f17e966ae12ab49.jpg": TriangleFig9,
  "e9c803dc793936e34e94a9c277b490df9a8c92ca291a4c01874fbc25d93a39b1.jpg": GenericFig26,
  "5cde19b613d16de7aeeb4d20285ef06615d48cbabbf68f41c7b91a4b0a97a2c7.jpg": TriangleFig10,
  "dd628c6023c3a8671aa32ca56a0bb4242fd6a5f2f3c952333424b80bb490925f.jpg": GenericFig27,
  "51a774918a5bacd0b8bb68bbcfc9c4549d6aee96e0c46beba1113cbc6bcb6d14.jpg": TriangleFig11,
  "0a2a386cea145852513495e6a739a9e6245eb53adb459b5f454a3ca870526dbd.jpg": GenericFig28,
  "347a2aa576d64222f8000827789b261b353fa58c1744e7630839517886101bdd.jpg": CoordinateFig12,
  "aacd6929d6ce7637b3ca8997d36a0a58c18e70cd7859607e299bc0ed94dc1c7f.jpg": TriangleFig12,
  "dc1ea60583bbd8b815f1d61707d3477c17f391c130d75cd27e9e5d3a4935a6e8.jpg": GenericFig29,
  "e573ac633b0b8d23087157a7eef94acdf2cdbf7930d84940ba48dc75013e7f35.jpg": CoordinateFig13,
  "50cee6b41f74cb39348d1d6e60356c8e7d0832c30cb9357c7b68cfdd383c0fbd.jpg": CoordinateFig14,
  "76eccb0c3333188a0e272e18431100d5d91666a8d0965f38aca907587223bfc4.jpg": CoordinateFig15,
  "81db13d9d165fc2b7b84285f67af9c04ac92732c1d5e9ea2b79c34a8e554869a.jpg": TriangleFig13,
  "2554e31c1f78889b6e300c7e8c1ca6025a735df3d7d6c5a0b071789d20d747d8.jpg": CoordinateFig16,
  "df765c0940f3b447c8ef63ec2c2e01f1574fa96b31dfe66ef0c4c3a6cfa8474e.jpg": ParabolaFig4,
  "128085bde2644dc0c607a7aaa6b66d7af387c6d226190acc6ba2ccb8c711b335.jpg": CoordinateFig17,
  "da49e4176b20d4c3057c6a2c98f6d06fa64bc5887194b126fc0366749cbf5012.jpg": TriangleFig14,
  "48c0dd7dcb0b02999c3f0c1b1c2806b9d7bc1d873910a86b959b7f37092556dc.jpg": GenericFig30,
  "d7ac7d5aaaa95476823a97c8c3bd108b656715686bf2f49c6574c1b912c11c1f.jpg": GenericFig31,
  "faee27d0d1b1155d34a81368033566a25c432d454e80a4d08adbe10635d7723f.jpg": EllipseFig9,
  "346ba67d705ff9d0f7c48ff62e5e3ff28092a92197be4add23ef6c3e4fc17acf.jpg": QuadrilateralFig1,
  "2d71cc31df58d2d97dcb3f597c48f1cebfb6337563f6170a525cb7a72863bb58.jpg": GenericFig32,
  "184641c2507549ca13f382a6f0a804393f40ebbb8e24edb5cf58a60513adb00d.jpg": CircleFig5,
  "1b983c00070bdb91756c5081c0f8416d9d8a615acb3fa2d0bef2be21d726d2c4.jpg": GenericFig33,
  "55c8529c20e7534512e7298a7eeef029db7bf9889b06b4c4355c26299f8697e8.jpg": GenericFig34,
  "76ace95ca1ac6d7ae7e1332fc10feabc32ecc1fd9dec9f9192efff1e39fca52a.jpg": TriangleFig15,
  "16bfe75c5503c619cb2e9f0918c9870169de90765cf509e62c34a4310ce46eec.jpg": CoordinateFig18,
  "c9c4a575f2fee4d1bf2e72ab1531f1621d763b2184d4098e6b63790582b0b5fd.jpg": GenericFig35,
  "fefe72604de2a0acd871c09b57eb53cf2e31350c7b5ac26172751d1f30f2bfd2.jpg": TriangleFig16,
  "e8ff178814422c06f682325f14b30ba07b6883ba1e4e291aac4122c30f3e0fc5.jpg": TriangleFig17,
  "7559900b80ebf7433e93f06a67457b2ffb89cddd568a8a7d92a50566e0401b87.jpg": GenericFig36,
  "5519d55c0c0e57fe7cfdd34b1596e3ee1366a2ed8d67e479d7e90cd4d0a29cc3.jpg": CoordinateFig19,
  "be6948bf7a66a6303d17b88d4dbe2d10348565625ef5c55b7fe6bad1419a93ac.jpg": GenericFig37,
  "2112dd5b51750953392cb101e4f03d015f3005f223d9aef6203d82c44d26f9a4.jpg": CoordinateFig20,
  "b2849d6d4ffb284a1efdfaaea2a5c91754d91b07587262e6d9a063a385fa4ee0.jpg": CoordinateFig21,
  "1f73f1d54dea5cc5da656f82cee5d27ce2e3ed9cc212a6c610d6d865ad384f13.jpg": CoordinateFig22,
  "205f5cd17132577092cf6f02c61d1ad29e41bd08f17c92aa7926bc381ce45280.jpg": CoordinateFig23,
  "b712b1c3005b529ab626199d911102dedd325c1533edebb577cd9099444dec09.jpg": GenericFig38,
  "824200f63fa7014d568e665fc58e38d7da7045bf9a582dd52c4883a68ffce094.jpg": ParabolaFig5,
  "79acf9ad372da1f39f16761e650581487f70c4ebcc4891a0171374b40bcfe67d.jpg": GenericFig39,
  "360687f74662d427f849e54b3edc03e612fffd12e08f6808e620eccc992a2dc1.jpg": GenericFig40,
  "80e16cb34c732b80e2cf83db627b5f2403daecce70590f129ae16fa96053e1f9.jpg": ParabolaFig6,
  "08975100df1f6429a7ba111ef6e9f36590aa265234f2cc10f0ffe8c0f0e820cc.jpg": CircleFig6,
  "458fd74c96a324ad76def881da7b18de82e89cdccd30e134758065d914df10d2.jpg": GenericFig41,
  "e023cf2c3c6130abcee565967faa046bbb450ff705c09f174a6d2b49f79b38da.jpg": VectorFig3,
  "fcff834bd7ecb0f5d6916419603de2e4d5064f4bbd9aaaf93952cf4966467fab.jpg": EllipseFig10,
  "8b4a534b9bcec0f0a8ec46a316f28eba2f0fd158f1537944d4c11cc612658e06.jpg": GenericFig42,
  "d19e035fd6fa16aaaf403effafb8503cb4c8afc29254de62d017ab14436b671d.jpg": ParabolaFig7,
  "f9a25b2389c1ab9155bba9720882146ae6216243592c8c7dba877b52f56ef4b1.jpg": GenericFig43,
  "d25ac42b4b86c094759cde182e53afe5072c7d8a069552e188c32bf61cb22e64.jpg": CircleFig7,
  "0bff0a61fbfc3ddad7b8764e84d0d518fbf041ca29f69d6a952eb3e0cce3caf9.jpg": EllipseFig11,
  "96a85d9b7519c0b2ccdb8cdc915cfd625dde8bbb8ed042eab6519a68f2fede60.jpg": CoordinateFig24,
  "618c7f6009ceeb686f5426c168b4f815f7a31102755f21b38dbe80aa19e7f1f9.jpg": EllipseFig12,
  "94b64e10053a331790cd9679b9c3712414cec708416a786991d5f9f1ba88f8ee.jpg": EllipseFig13,
  "2397da334b8d437cee7dafe68a5253cc51a26773eb2c4c3e11a11c63b5eec56a.jpg": GenericFig44,
  "d70865f657d7e640f8dda3891018f2dbfd3fb5f6a60d71ec81ce45d8cba00ddb.jpg": CircleFig8,
  "c602fd016c4330752392eaf84d8cd7f92efda71b43ac6a8e6fcf3eb32890f56b.jpg": ParabolaFig8,
  "64c0f5287368845d746be8af9238cb6d3c432131cef46e1b9e33128fed72e232.jpg": CoordinateFig25,
  "4679fe86aaa70c2b35558156f9477f1fe95b60039aa4ba776f669f66d4b903c9.jpg": CoordinateFig26,
  "d832ed7a32bb37c6b589b32506c1f2cbcf38e354a27a90fa4c372d0ff5f46130.jpg": GenericFig45,
  "703888e937b3af023da932f098173ba5530494f88cb7545b105097ca502d53f7.jpg": GenericFig46,
  "2025e04b128b2627a569567463f571e21790189a7d12680437c14cbbe702a1e1.jpg": CircleFig9,
  "91234b80a2730fb1e99f67d71a1721ab8cb5aed849d6cc07e142597520a6c0cc.jpg": EllipseFig14,
  "cfeefdc0a4d4264de031f931d1a5bb6f58c73463890a7ad2611de599af586857.jpg": CircleFig10,
  "64b780f4ada5ffd4b8fa75ff43e013b162411672c3353f074e06d8f2e95524b1.jpg": ParabolaFig9,
  "31ee91d883dde56d51e63f42a1bbc3732c5fd470ed1cc8f070ccb6e9dbc6f3e6.jpg": ParabolaFig10,
  "4071f9936fbc446f770c8d4d7678a6d7b4e5a30f266b566778c27fe477a68a29.jpg": TriangleFig18,
  "69033515cb8bd40832d2e13f62da9dece5814ffaeeee6f630e6d6254a3e84db5.jpg": EllipseFig15,
  "0f4bab2fe51fd6c42a0faba4152ab5d71b87838a48c2bfc488200e03dc650b1a.jpg": GenericFig47,
  "9a6f7dc2e6791576951be24a02a2a0405c17ce77314fa7db0c6d7503e96912a3.jpg": TriangleFig19,
  "5afc62e8f1db176f9f0f7e0f0f108f91c3453f82de541ac61a30599d1c48655d.jpg": GenericFig48,
  "beb2100b8d70b269dcf02bde0f9281c841191d501ffb461c131c6d7cfa7c69e8.jpg": VectorFig4,
  "b5a86d1459c1fbcca8bc43d87bae8704efe375d7c6fcc6309478385f7d0cb25c.jpg": GenericFig49,
  "35a24bae4d72b2bfc9e357b3c1ad1b004727876cc4c8e35e90a62bc28fd7ae13.jpg": GenericFig50,
  "90a83f28e8b37c1e60b55b3e1131d1f55d7da53d038fc91860eb726b58d605d8.jpg": CircleFig11,
  "64cf2dfae56b70cf06de4eefc34c1a30479fea1deee2d21d595180cae05420a9.jpg": CoordinateFig27,
  "77164344ae6c2160254c73d647028eb20024caefe85e98bc04a35571f5d82d67.jpg": VectorFig5,
  "e1ae261d09a359c9279575a05faec2591ac2cbee3655cf8e9c933ea664a730cf.jpg": CoordinateFig28,
  "79438e55279cc7d77eb12ecbffa721a1af6e0023fc0013ab3b451b9660ae0f2c.jpg": CircleFig12,
  "ba22be3c40da0f3a02a5d50a530e7965531d95603b91f880d10be5150526e5cd.jpg": GenericFig51,
  "00bca055593d3d09850e7b8c1c66816eaab1f198e1239f66a5ce490d3e6c3637.jpg": TriangleFig20,
  "d15454b9080ebd3f4331f007a3eba33d611bb695f87b15ed61a246c44b10221b.jpg": GenericFig52,
  "a1663749f7869d2658893f014d59f64125b8eeaa6c0b6a7e21cbfac781b9aca1.jpg": TriangleFig21,
  "67f40d04565278e11da7a599ce5ff3d458be1c33bb7c7b74354d9ab27260e4d8.jpg": CircleFig13,
  "7de5e3a37cfac4c53bab671dd318c50556fd8cbf3c2c78690c8e9e5fd72a0f66.jpg": GenericFig53,
  "e1eaff4c5097957b65b0aceba15d31db65500ad62f614a561ea554204e3eee8f.jpg": CoordinateFig29,
  "d95a2f1980508623560d580286a2bbc4074da917fd769d7f7b6b21f098149856.jpg": GenericFig54,
  "2eff8d72a7045a0220449d77d950acbc5a849e8e96237d96baa5d918f2ba9e88.jpg": GenericFig55,
  "b9dfd07268122d8ce4157673a919de2e66e3805ddd46cf1a2fcafeef6cb569ab.jpg": TriangleFig22,
  "6f0177fd4e3c2b927052e50c675e8285f32827d1a8c5dee2db27be560d6e269a.jpg": GenericFig56,
  "b68b35192d2f54346082dac5d0484c344bca9af70066c16619112380f60e5905.jpg": VectorFig6,
  "4fb72fc1b0fb206867070e584a7568e02bbc3da862055834346d805ccbb7ac50.jpg": TriangleFig23,
  "4735fff88612e5a2011bf9be34a020f54d23c376821c4b9af6ce1af56ec864d9.jpg": CoordinateFig30,
  "44202c8878a4ecb7fd7ab9346c4cf20d29d782e55d386a7a4661a19460185003.jpg": CoordinateFig31,
  "3ffb1ad86d8bf62341bf15d140583b21dd830a1f8cd53c9dcef74d28d5bbebb7.jpg": GenericFig57,
  "a4c3882fa0b7882f8ed7ccbdcba103f246d54a972bf3ec820e2754a461e0a88a.jpg": GenericFig58,
  "f210ee7e15c107dedd4b6a49d1adcc3aac9158f5f0ce8c865cc1e2a142baf90d.jpg": VectorFig7,
  "efeb94ae94aec29c341beb73e72ac794907a835648481e7808d4ba8c8fcee782.jpg": TriangleFig24,
  "4f3fe7c448038aee96aa420fa68e0ea4b6e875c4368f9c42a64e150d50fac60f.jpg": TriangleFig25,
  "0d5366d6b17635e67d783c2ffb99fc86a64d871fd2656df6e501c0d58759e6d7.jpg": CoordinateFig32,
  "f08ea35fbe78488123d03517f34f5993d012724021047034572d18376121f6c0.jpg": CoordinateFig33,
  "1a9bbd4c62558a951963262a38530af1bf87d0b884bb41959113a8f521c4646a.jpg": TriangleFig26,
  "4110dea6b8be6f48d7e1520e00a213ee5f8483b73d568340cf212bc254868b50.jpg": CoordinateFig34,
  "140ea2c6bb942f45d437af662391d8e7c20dc50ee21e23f965563ca2e033b5a1.jpg": CoordinateFig35,
  "df64687beee1eed9d177de61132d9ede0f274882adfebb3f6b5f1e1943f15f5f.jpg": CoordinateFig36,
  "6924670d4dedaf3d44c902cbb0267f321b804dbb16c60402182c8915e22fe19e.jpg": GenericFig59,
  "5f57f611b2a0cc3271f87bbe4fc0f0c126f54878fab3ea8f1f66f336b2135af7.jpg": EllipseFig16,
  "a8d3aee9c1f2bf0ba23c34000f46ecea9df271c8785628f3bab36de3fcfdf2ae.jpg": GenericFig60,
  "734ec4f5826016668e7cd394d17c9ed64f113ef172afdde3377b31a9029832af.jpg": EllipseFig17,
  "150c12e18dabab1c45aad83012d1a8691c59ee4b4b2b380a842b9b9ec6e9f06e.jpg": GenericFig61,
  "497f6667eb58f64a23ceb21e831012eb037bd7d66fd37d178fb7ceeaaff5690e.jpg": EllipseFig18,
  "df1ac7ea75a8eae7738127c8186b57f0b815a9d0383d7d00c38bd02832724a6a.jpg": GenericFig62,
  "d771d12d87b263de63991a74a251b8aad3edb435da9f4fb13ea40d0cf981c60e.jpg": EllipseFig19,
  "5b7482b71beac07c1057a8e2daaddc75557e39de2c18429e1d20efd4015a691b.jpg": GenericFig63,
  "7524cb1bae6fd063fc0d55de78c53144a25fee244904ae739eee04637957789b.jpg": CoordinateFig37,
  "3e4fe2ab23594141468e57fbd1e05d2280065f903bdea3e3e7386aa8a5605c65.jpg": GenericFig64,
  "c51506acbd94ab3f7f4848a7b5a36d857aad2c34abc730e7b34e8cc35856d2fe.jpg": CoordinateFig38,
  "5f8d091257c13b5e27b6fbe5f017daaf0f55ce4a8d090c792fc72b2a09590d00.jpg": GenericFig65,
  "599aa63e71ab543bb671d0791450ee588dd5b698df00f89370831709fb7937ad.jpg": GenericFig66,
  "9a5c4ef8148cb82fd5c548b2ce15423a47eb667802ff3a874d19c52ce2e4b378.jpg": GenericFig67,
  "62133097e362e72acd0be5ffa075a8539777672a72a695e1f57d7b1b35eac19e.jpg": GenericFig68,
  "c5f2ed81c912080a756e3b261ac449c37b438a77f32bb52cbcc2608d9d884dc8.jpg": GenericFig69,
  "6c6d7010d3802036c9b913639dc59f394436f9fe266c0db3838f773551631399.jpg": CoordinateFig39,
  "43e751078c2550fa514bc8d1a853dcbf746a7b55ad337995be7c974929d26314.jpg": GenericFig70,
  "9bb33c7715bab21dc7bb262daea81f7a1b9fa360f8416b309e580a7174b0b6d9.jpg": GenericFig71,
  "8c5abfd46c6da4bfc3fbf8c4756a65d2fa2c4dff50acf3b51c68237e2b946834.jpg": GenericFig72,
  "f07d4af5412796b58f91b9c102316c711d6e8e29f0ec077fefb81214b731d065.jpg": CoordinateFig40,
  "772fe1d3aa980aaef25b960808a578c2cb5264d98e48eae338610ece628dbf50.jpg": GenericFig73,
  "c3e0d952d43c783398498ecd4c1f77c35bba6432fe39c9d01229c0800c7f10f1.jpg": CoordinateFig41,
  "cc5e3a1d68223d9266a663760f22028901d5d793be606001dbe70f1be05df873.jpg": GenericFig74,
  "f6707be18d1d8046f9c46f5fb1456d04f3e98c03f7953b7d0f08882f237bfdea.jpg": GenericFig75,
  "d4f5e7d25c587bf69c555107c453bc3ed9512cb5ed49cde1497f20b70bab9b31.jpg": CoordinateFig42,
  "1591eca8b99e12acf4aec71d292e9151d43d5ad906aea920f2cc8733d38f5573.jpg": QuadrilateralFig2,
  "a668c823a4cc496328040554ac28753ac8b09951a1209e828a7758fba55398d6.jpg": CoordinateFig43,
  "5d4fce9476f888c7f31611be808473dc0ec6a604160873def00df0403beb5568.jpg": GenericFig76,
  "961349ad3367972272c7ce79e176c0c6214170d4b5a3d012bf3eb6ce1b9eefdb.jpg": CoordinateFig44,
  "97024ecfdbfde7ad33767de773574130719eb61f4b7bccef401b062e9c40aaa7.jpg": CoordinateFig45,
  "f35e45496da465968bf0bbf261a459e6a537794d273c75eca294e9df7fae5772.jpg": CircleFig14,
  "7ebb48fec897d6d0bbdaae4bb4215e899c165253969ff8602ccfbe685f2ca126.jpg": GenericFig77,
  "3ed65af4f54e257948f2d6cde6ce5c5d1fbc7ed2c8b3028b88db8c58a3f1039a.jpg": GenericFig78,
  "d75c55ced5dfc3012369ed665a08b6edfdd5af712513b5280b66231902a94216.jpg": EllipseFig20,
  "4e0e56086a334391417aa52e470fb632e0c00b8b65bc6690830a55bc2de2658a.jpg": EllipseFig21,
  "3036daaa4b661d93f020e8b7fe38c54c01e552319d36666c08dc83950081aa06.jpg": CoordinateFig46,
  "717dca3457b6e5b963bdbff4693e98fd624cb59c207d1107584bb590cb5665b2.jpg": EllipseFig22,
  "34cb71a297f267b29a5ce99f9335c93b4f5f48ffdfe5df1104549a438faa220b.jpg": ParabolaFig11,
  "ab8529ba1a55806ef8750e7707f44d35445be5482cb0afa45be57fb74dd4dde6.jpg": GenericFig79,
  "3c921540d1d76a2cba1f3fb256ac512c8cc21a0cfb109ba8558b4fa66f28a577.jpg": GenericFig80,
  "4246ddb99763dd9e9c3c0796a4d46949f3699ec6a3e110366da866f2aae8c846.jpg": CoordinateFig47,
  "62c25cc9908b51e381ac1d772745077d57d6a5247029cc585ae62aedf85a5f08.jpg": EllipseFig23,
  "5e42f452944fb1528e5de9ed54b0305115b04fb252f0f528595c443503371323.jpg": GenericFig81,
  "3113f2640cd1ce27d35fe7ef56449c8d03385924ed2ea63d3ae94fa298bde920.jpg": ParabolaFig12,
  "8ed50b159dab301d4d2b6d7ab994d4918f02cd478dc6ecfdd90fc741655ac668.jpg": GenericFig82,
  "efb38d7386db57238ad57ee57874ddc9aa90b510529f10c4e1dbfb5edbcdca28.jpg": EllipseFig24,
  "85a390d6f856ccdc03b147bc047f52554a35933ac4e5388309124fb1b0c28953.jpg": TriangleFig27,
  "8ca4d72acfbe7eae7ca8b6273ff16d916af494619fc017f110954e5e2864cec1.jpg": HyperbolaFig2,
  "ba3cf6a32a8bf468c8c91de585f353c4084a1860fe93cb15d2b08d26a00cf5f2.jpg": TriangleFig28,
  "5992da8dc9702e57ce6cb07a4c98e94ddf6b5df3cafb5f5a78324a3eff19cbda.jpg": TriangleFig29,
  "2325d0e846e9aeb87217bb3a5b696a8ac07a144b9beac2efda2caeab158bc7e5.jpg": ParabolaFig13,
  "1257b5cb6449a59457724eea4a2a137d767515f92766af47b7df71205479997a.jpg": EllipseFig25,
  "5296a08bc96574feb0ccc715655b3cc056b7d1054eb9f17edaa0830f461bdd2d.jpg": CoordinateFig48,
  "c639f2ec4a9fc3fab9d7ed0faab43a7f36cfd07f0cc6c5699414d0a976a66187.jpg": ParabolaFig14,
  "454cad83d7709d871896803cf7b73a39324814c421c4d10bb2e3f13b54d54500.jpg": TriangleFig30,
  "fed740e162d3537e2522321b069ba9ee360a71831d029aa3e0b45c231b13043c.jpg": GenericFig83,
  "163f0c01b41b50ed98fcbe3fb90f8045e07ad206da3e62727ca560c2ae632eb8.jpg": GenericFig84,
  "90215cf6c11c2fb632129502682cf2874756bf82e4ed3bdd69948a7f21dec6d4.jpg": GenericFig85,
  "9e5ba78dd08d6e5f826a0490c2aecb9c779ded100e6dbd44e4b1b45bbe605d7e.jpg": GenericFig86,
  "88bb5a8a9f3c5d69d9216c66a2b0202f1464eb950fd7ffa45caf294acf739d2b.jpg": GenericFig87,
  "cb123e70f79db348f0dc6251f9504c54289b2963ed677152724c87b254b387f3.jpg": GenericFig88,
  "924f2f601a2d3480ba7a98beee9b4fd8e9867b525c28472ea3bd9782a521aae5.jpg": CoordinateFig49,
  "418792a6990484531de2ef5813c652b97a9971df07c6811a585ed10c871dcaff.jpg": CircleFig15,
  "9ae24387740864879a3ac0ce5a4b8d0be164b0c2de6cae73bfe1dbd40c13bd66.jpg": CoordinateFig50,
  "fcff0f5b5d2a209ea737461a75f83257402832497b837642cd44c3146c122b70.jpg": CoordinateFig51,
  "a2930f4a1de92a49c1c9695442c74004464ec387c1411ce266875b3d6d540cd0.jpg": GenericFig89,
  "0c35610945a3a317d542cb1181ccb0889cdfd5b5e4acfb3e932adda1c7f8503c.jpg": CircleFig16,
  "69d2882e0771dd2859161d76f583ac370cac58819faa8e37467ccb40d3d662e4.jpg": GenericFig90,
  "6c0d4614db4a5ab38a696e443dc01dbccbc015f41e8358afd70575427791e3e2.jpg": CircleFig17,
  "6cf15880f22caebe9ba4d68c3ee09cb28909d248e01b8c4e1b103eb2319dda60.jpg": GenericFig91,
  "f68cf9d9f3ba007796a320fe07fe0d49783069a92b8e75ebbfa564a36340b04a.jpg": TriangleFig31,
  "fb8753caceb87c3c4e0f76c539f19e3d2eff483ed65809395663afdca1a0a4ef.jpg": GenericFig92,
  "c38bf73497b92c62d664cc6a1aa17ba2a9ccca2ce49dbc6fefed165946ff7f13.jpg": CoordinateFig52,
  "c4176e606093bc6da9dd4867ff373f682304591ea327aa183d1987acf6e49e9b.jpg": HyperbolaFig3,
  "ae4de0bd4952376f82509acf7b954b28dea6b34db3aab487262d52a03dd9be7b.jpg": CoordinateFig53,
  "064907ab9efce407779c45ab9e5a34fb722d3df29c20f2786f7def83d86dcb94.jpg": TriangleFig32,
  "8e570fa6f663de6a043627e0aaf1ae1c4823b807794be15b9b9525a4a243bcdb.jpg": TriangleFig33,
  "fa14871498e45a40183dcba0fd49e898dad576fa9d6c0e352229a2aac715fbbf.jpg": CircleFig18,
  "1dc74ac0773b922ef5210c3a44965cf073222c22b079ce996058ceebc90db911.jpg": CircleFig19,
  "aa14b880e0ddfb75ec279cae9f2edfa4046d2450f4dbc7441268b8d4cca11a29.jpg": TriangleFig34,
  "c577777eab9863d51e4ac3a1b6dfad4c7d658611169d7b9baa0e6aec3180f558.jpg": GenericFig93,
  "720c3f32960c27e6cb4d073c737a442a445d10baf9aea8b068e5a3726e106ef7.jpg": GenericFig94,
  "1ddb2163799a8cfe2ffa7f7d6bc497bad0fc61dc8d94390edcd29e0628290326.jpg": GenericFig95,
  "a14d149a01f76bf846ddd558e537673fde31d6a1587ae4a764c587aab4dab9bd.jpg": EllipseFig26,
  "3491895aec2d6cfda0dc2dcd54fadcd21daf4ef19fd8ee2abd61426cfed2d319.jpg": VectorFig8,
  "052675e5f3cf9f8c9d220d39473f55a23be2823340ef5621e4750267e98755d8.jpg": TriangleFig35,
  "0b21c6898b3161970f600b8ea8651114623633c7e079935576900078dc958b7b.jpg": GenericFig96,
  "cab50ad9aeb637d5147d5dd69caf7a0730b873c5498e86c2a4f4673a8989d167.jpg": GenericFig97,
  "734aca0725e9376b58e633838103e1503b6255552a6180b21a084a3536ca2619.jpg": CoordinateFig54,
  "a57898de538db4879621164b7998bc90c93a6d01c7d6fba5fc873d2b5ce8ba0b.jpg": GenericFig98,
  "fb48c7d5bf86e387f73113fb924160f1bb91ad06a32e076ea3b08423b67f5dde.jpg": ParabolaFig15,
  "6dd64b161d1808c1e0e442045b489f769954d876e8b412614cd7a68a3c5b6578.jpg": CoordinateFig55,
  "ee8df3ba92a5707c4603bf8864e829cd1135db689b2a430bb860ecce885d650e.jpg": CoordinateFig56,
  "86b447f7e374c11cc826e3993d61f1a9c7e061a85a7ae1d07d34156257f38b24.jpg": GenericFig99,
  "13a479fe8210581ea0396ea4e3d75b4a9577c316d8742b9d921105adc7109f9f.jpg": GenericFig100,
  "db497ea6e8dd09c092000ad14a11b50431908d247b68d204a39a06346f7af5f1.jpg": GenericFig101,
  "c1bc7131164a66d4724115ff5a9a6aa3858f4406055864eca2f1ceeb6d29e87a.jpg": GenericFig102,
  "c0d8b4b2ace4df5a514a239992abe5052931792edcd07f6cf30f10c59f6081c1.jpg": TriangleFig36,
  "7ec844f0f6ec717ff430181b3abbe14b5506161458558b320d04e902338d7469.jpg": GenericFig103,
  "afc1cc90fec2ebd80d6fdbeaa6a439df40dd025c19eca184d6cbb75fa3dc6130.jpg": GenericFig104,
  "b1670c63c83b6e4f892e5fa004c5256b1859e43cfbaf32808cb286e7383dd1aa.jpg": TriangleFig37,
  "45a22bbcdf977a0859d69f00d71dafb443ee1a826acf35ea9f61cc9522f3fb06.jpg": GenericFig105,
  "b6b83427b8f5ce423ffbfb3f844ae82d2f68f1b6ec6622cc2a9d374f38b504db.jpg": TriangleFig38,
  "45c6a828fee0b6e35e56420465b0ca15f25c4029c019de98273c95e9aeaccf10.jpg": GenericFig106,
  "3a07126d76a77cc33feabead477f108b85c2abe1094b46f2138ce5570607036c.jpg": TriangleFig39,
  "970d19c77f80ff658f199eabb38df03ff85eb4b74eebf578f27bcdaee9060cf9.jpg": GenericFig107,
  "55294752903d993104cd8930615a368fa6bece876ef4b8da26ecee19c6c25500.jpg": HyperbolaFig4,
  "37e3463bc1d9122edf58c59c3881693f6cba8cfaa7d991ee5be785ba0ab7907e.jpg": GenericFig108,
  "d97b179fc59829d4c5b69c0d03eb1b2986fcd078b3bf9676281d091d61ee8512.jpg": GenericFig109,
  "d4e9d33c6363f487cf9bd8e9c661a09117be1994dff021beb306816d556e7fd6.jpg": VectorFig9,
  "3ba507148f3919e3737c65faba574e1a50fa68284193006a17e315f5ba7472dd.jpg": CircleFig20,
  "171b06fe0eefb30de6fa565164ef7cad0f2f9efe4fa40dfc332ddb1a887362dd.jpg": CoordinateFig57,
  "2149e383c94382cafae2608909ef55c2361520f5855d27b1697c1c10ef4b4fee.jpg": GenericFig110,
  "ffe52c50365a54a0eb3294459736a1543b1482ffd33b3fc4c5fefe1c0f310a89.jpg": GenericFig111,
  "bcfa00b5f1ce2ce0d9cc116ffe7c10ed62b107de6fd6d476ca7101781614c270.jpg": GenericFig112,
  "0f30591f1e12ec6eef575f2fdc6849e46df3e49dcfaf453113bd00aeb8cc8e42.jpg": GenericFig113,
  "fa7aec1903c3b5bc4712896577b0e94a739cdb8f98eafca0282ed9e43dcff808.jpg": GenericFig114,
  "0797ea932a7ec63e4fcd1e9dd339b32136fc35c899b5e802f9c3d87593ef060d.jpg": GenericFig115,
  "519b9d09f90fbedcec98355d5b9196ab4a740cdd6b9f38836951447f6ee952ff.jpg": GenericFig116,
  "de6fd59528864268f9f44d852e05e81209a53a99dc6080286ec3755152230ced.jpg": GenericFig117,
  "20274308f75b85c4eee618647896870f9586efe06bb295ee803e2f17f4e27f02.jpg": GenericFig118,
  "e6cb12bc2470ce34b728cba79bdcd9c31eb94846bf39a38f28a41fa37a395e6b.jpg": GenericFig119,
  "b6de17ec6982be1e2bf9577ec775997087137197d816ff2e6d54bbfdf2529788.jpg": GenericFig120,
  "f3769a53daf20a9422daff3106860aae6c792c12d669c8fd10d7e5313749ed6c.jpg": GenericFig121,
  "3c3e8085b5182bc56b8f088cd9f7eca4726e9552cab89ca48229731f9123b31f.jpg": GenericFig122,
  "5a1b790de5f2b351df7302446f214db840ecb48f01cf6c46055fdb741c398417.jpg": GenericFig123,
}

export function getFigureForHash(hash: string): React.ComponentType | null {
  return figureByHash[hash] ?? null
}

export function hasFigureForHash(hash: string): boolean {
  return hash in figureByHash
}

export default function ProblemFigure({ type, className }: ProblemFigureProps) {
  const Figure = figureByHash[type]
  if (!Figure) return null
  return <figure className={`my-4 ${className ?? ""}`}><Figure /></figure>
}
