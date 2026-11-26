/** Resolves public assets using Vite's configured base path. */
export const assetUrl = (path: string | undefined): string => {
    if (!path) return "";
    if (/^(?:https?:|data:|blob:)/i.test(path)) return path;

    const base = import.meta.env.BASE_URL;
    return `${base}${path.replace(/^\/+/, "")}`;
};
