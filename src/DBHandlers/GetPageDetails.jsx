import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContentfulClient } from './ContentfulClient';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const useGetPageDetails = (path, setPageDetails) => {
    const language = useSelector(state => state.language)

    useEffect(() => {
        ContentfulClient.getEntries({
            content_type: 'pages',
            'fields.language[in]': language,
            'fields.url[in]': path
        })
            .then((response) => {
                let options = {
                    renderNode: {
                        'embedded-asset-block': (node) =>
                            `<img class="AppImage img-fluid" src="${node.data.target.fields.file.url}"/>`
                    }
                }

                const rawRichTextField = response.items[0].fields.body
                const renderedHtml = documentToHtmlString(rawRichTextField, options)
                response.items[0].fields.body = renderedHtml

                setPageDetails(response.items[0].fields)
            })
            .catch(console.error)

    }, [language])
}
