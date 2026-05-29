export interface Point {
  x: number
  y: number
}

export interface Line {
  p1: Point
  p2: Point
}

export interface Circle {
  center: Point
  radius: number
}

export interface PlotRange {
  xMin: number
  xMax: number
  yMin: number
  yMax: number
}
