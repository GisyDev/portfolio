export const getImage = (image: string) => {
    return new URL(`/src/assets/images/${image}`, import.meta.url).href
}