export const capitalize = (text) => {
    if (!text) {
        return ''
    }
    const [first, ...restPart] = text
    return `${first.toUpperCase()}${restPart.join('')}`
}