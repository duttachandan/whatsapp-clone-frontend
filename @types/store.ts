

export type Theme = "dark" | "light";


export interface ThemeStore {
    theme: Theme;
    loading: boolean;
    error: null | string;
    setTheme: () => void;
}

