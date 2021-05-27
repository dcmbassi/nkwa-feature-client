const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const toReadableDate = (isoDate) => {
    const date = new Date(isoDate)
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
