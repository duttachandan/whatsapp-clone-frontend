import { create } from "zustand";
import type { ThemeStore } from '../../@types/store'
import { getSystemTheme } from '../../api/theme'

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: "light",
    loading: true,
    error: null,
    setTheme: () => {
        set({ loading: true });
        try {
            const response = getSystemTheme();
            set({ loading: false, theme: response, error: null });
        } catch (error) {
            set({ loading: false, error: (error as Error)?.message, theme: 'light' })
        }
    }
}));

