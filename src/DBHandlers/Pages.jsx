import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentfulClient } from './ContentfulClient';
import { getPages } from '../StateHandlers/actions'

export const useGetPages = () => {
    const language = useSelector(state => state.language)
    const dispatch = useDispatch()
    useEffect(() => {
        ContentfulClient.getEntries({
            content_type: 'pages',
            'fields.language[in]': language,
            select: 'sys.id,fields.title,fields.url,fields.component,fields.order'
        })
            .then((response) => {
                let pages = []
                response.items.map(item => {
                    item.fields["id"] = item.sys.id
                    return pages.push(item.fields)
                })
                pages = pages.sort((a, b) => a.order - b.order)
                dispatch(getPages(pages))
            })
            .catch(console.error)

    }, [language])
}
