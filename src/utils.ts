export enum Languages {
    Ru = 'ru',
    En = 'en',
    He = 'he'
}

export const setLanguageToLocalStorage = (value: Languages) => {
    localStorage.setItem('language', value)
}

export const getLanguageFromLocalStorage = () => {
    const languageFromLS = localStorage.getItem('language')
    if (languageFromLS) return languageFromLS as Languages
    setLanguageToLocalStorage(Languages.En)
    return Languages.En
}