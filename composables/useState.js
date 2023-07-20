export const isSuccess = () => {
    return useState('success', () => undefined)
}
export const isDeleted = () => {
    return useState('deleted', () => undefined)
}