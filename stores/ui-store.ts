import { create } from "zustand"

interface UIState {
  isSidebarOpen: boolean
  isThreadOpen: boolean
  activeThreadId: string | null
  isAIPanelOpen: boolean
  isSearchOpen: boolean
  toggleSidebar: () => void
  openThread: (threadId: string) => void
  closeThread: () => void
  toggleAIPanel: () => void
  openAIPanel: () => void
  closeAIPanel: () => void
  toggleSearch: () => void
  openSearch: () => void
  closeSearch: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  isThreadOpen: false,
  activeThreadId: null,
  isAIPanelOpen: false,
  isSearchOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openThread: (threadId) => set({ isThreadOpen: true, activeThreadId: threadId, isAIPanelOpen: false }),
  closeThread: () => set({ isThreadOpen: false, activeThreadId: null }),
  toggleAIPanel: () => set((state) => ({ isAIPanelOpen: !state.isAIPanelOpen, isThreadOpen: false })),
  openAIPanel: () => set({ isAIPanelOpen: true, isThreadOpen: false }),
  closeAIPanel: () => set({ isAIPanelOpen: false }),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
}))
