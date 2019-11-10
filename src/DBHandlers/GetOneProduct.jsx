import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { ContentfulClient } from './ContentfulClient'


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
                    description: item.description.content[0].content[0].value,
                    pics: pics
                }
                setProduct(product)

            })
            .catch(console.error)
    }, [language])
}
