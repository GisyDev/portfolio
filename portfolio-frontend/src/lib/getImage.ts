export const getImage = (imageName: string) => {
    return new URL(`/src/assets/images/language_icons/${imageName}`, import.meta.url).href
}