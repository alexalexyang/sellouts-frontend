import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { ContentfulClient } from './ContentfulClient'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function GetOneProduct(itemID, setProduct) {
    const language = useSelector(state => state.language)

    useEffect(() => {
        ContentfulClient.getEntries({
            content_type: 'products',
            'fields.sku[in]': itemID,
            'fields.language[in]': language
        })
            .then((response) => {
                let item = response.items[0].fields;

                let options = {
                    renderNode: {
                        'embedded-asset-block': (node) =>
                            `<img class="AppImage img-fluid" src="${node.data.target.fields.file.url}"/>`
                    }
                }

                const rawRichTextField = response.items[0].fields.description
                const renderedHtml = documentToHtmlString(rawRichTextField, options)

                let pics = [];
                item.pictures ?
                    item.pictures.map(pic => {
                        let onePic = {
                            id: pic.sys.id,
                            title: pic.fields.title,
                            description: pic.fields.description,
                            url: pic.fields.file.url
                        }
                        pics.push(onePic)
                        return onePic
                    })
                    :
                    pics.push()

                let product = {
                    name: item.name,
                    price: item.price,
                    discount: item.discount,
                    stock: item.quantity,
                    category: item.category,
                    subcategory: item.subcategory,
                    description: renderedHtml,
                    pics: pics
                }

                setProduct(product)
            })
            .catch(console.error)
    }, [language])
}
