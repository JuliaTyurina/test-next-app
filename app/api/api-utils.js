export async function getData(url) {
    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error('Ошибка получения данных')
        }
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

export const isResponseOk = (response) => {
    return !(response instanceof Error)
}