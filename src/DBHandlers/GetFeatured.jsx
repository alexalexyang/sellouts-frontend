import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { ContentfulClient } from './ContentfulClient'


export default function GetFeatured(setProducts) {
    const language = useSelector(state => state.language)

    useEffect(() => {
        ContentfulClient.getEntries({
            content_type: 'products',
            'fields.language[in]': language,
            'fields.feature[in]': true
        })
            .then((response) => {
                let products = {}
                response.items.map(item => {
                    let pics = []

                    item.fields.pictures ?
                        item.fields.pictures.map(pic => {
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
                        sku: item.fields.sku,
                        name: item.fields.name,
                        price: item.fields.price,
                        discount: item.fields.discount,
                        stock: item.fields.quantity,
                        category: item.fields.category,
                        subcategory: item.fields.subcategory,
                        description: item.fields.description.content[0].content[0].value,
                        pics: pics
                    }
                    products[item.sys.id] = product
                    return products
                })
                console.log("GF", products)
                setProducts(products)
            })
            .catch(console.error)
    }, [language])
}
