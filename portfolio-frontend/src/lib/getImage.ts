export const getImage = (folder: string, imageName: string) => {
    return new URL(`/src/assets/images/${folder}/${imageName}`, import.meta.url).href
}