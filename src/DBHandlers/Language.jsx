import { useEffect } from 'react'
import { ContentfulClient } from './ContentfulClient'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage as saveLanguage, setLanguages } from '../StateHandlers/actions'
require('dotenv').config()

export function useLanguage() {
    const dispatch = useDispatch()
    const language = useSelector(state => state.language)
    if (language) {
        return language
    }
    const defaultLanguage = process.env.REACT_APP_DEFAULT_LANGUAGE
    dispatch(saveLanguage(defaultLanguage))
    return defaultLanguage
}

export const useGetLanguages = () => {
    const dispatch = useDispatch()
    const languages = useSelector(state => state.languages)

    useEffect(() => {
        if (languages.length > 0) {
            return languages
        }
        ContentfulClient.getEntries({
            content_type: 'languages',
            select: 'fields.language'
        })
            .then((response) => {
                let langsObj = []
                response.items.map(item => {
                    langsObj.push(item.fields.language)
                })
                dispatch(setLanguages(langsObj))
            })
            .catch(console.error)
    }, [])
}

export const useSetLanguage = (language) => {
    const dispatch = useDispatch()
    dispatch(saveLanguage(language))
}