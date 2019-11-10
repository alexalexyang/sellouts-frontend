import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContentfulClient } from './ContentfulClient';
import { getPages } from '../StateHandlers/actions'

export const useGetPageDetails = (path, setPageDetails) => {
    const language = useSelector(state => state.language)

    useEffect(() => {
        ContentfulClient.getEntries({
            content_type: 'pages',
            'fields.language[in]': language,
            'fields.url[in]': path
        })
            .then((response) => {
                setPageDetails(response.items[0].fields)
            })
            .catch(console.error)

    }, [language])
}
