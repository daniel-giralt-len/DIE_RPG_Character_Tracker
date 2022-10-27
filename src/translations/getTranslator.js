import translations from './translations.json'

const getTranslator = (language = 'en') => {
    const translate = (strIn) => {
        const t = translations[language]
        const str = strIn.toLowerCase()
        const translatedStr = (
            (t && t[str]) 
            || (translations['*'] && translations['*'][str]) 
            || strIn
        )
        return translatedStr
    }
    return translate
}

export default getTranslator