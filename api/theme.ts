import type { Theme } from "../@types/store";


export const getSystemTheme = (): Theme => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme as Theme;
    }
    const getTheme =
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    localStorage.setItem("theme", getTheme);
    return getTheme;
}