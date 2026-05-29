"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ProblemProgress {
  viewedAt?: string
  completedAt?: string
}

interface MathLabState {
  progress: Record<string, ProblemProgress>
  bookmarks: string[]
  markViewed: (problemId: string) => void
  markCompleted: (problemId: string) => void
  toggleBookmark: (problemId: string) => void
  isBookmarked: (problemId: string) => boolean
  isCompleted: (problemId: string) => boolean
}

export const useMathLabStore = create<MathLabState>()(
  persist(
    (set, get) => ({
      progress: {},
      bookmarks: [],
      markViewed: (problemId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [problemId]: {
              ...state.progress[problemId],
              viewedAt: state.progress[problemId]?.viewedAt ?? new Date().toISOString(),
            },
          },
        })),
      markCompleted: (problemId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [problemId]: {
              ...state.progress[problemId],
              viewedAt: state.progress[problemId]?.viewedAt ?? new Date().toISOString(),
              completedAt: new Date().toISOString(),
            },
          },
        })),
      toggleBookmark: (problemId) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(problemId)
            ? state.bookmarks.filter((id) => id !== problemId)
            : [...state.bookmarks, problemId],
        })),
      isBookmarked: (problemId) => get().bookmarks.includes(problemId),
      isCompleted: (problemId) => Boolean(get().progress[problemId]?.completedAt),
    }),
    { name: "mathlab-progress" }
  )
)
