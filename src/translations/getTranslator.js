import translations from './translations.json'

const getTranslator = (language = 'en') => {
    const translate = (strIn) => {
        const t = translations[language]
        const str = strIn.toLowerCase()
        if(!(t && t[str]) && !(translations['*'] && translations['*'][str])){console.warn('string',str,'not translated')}
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