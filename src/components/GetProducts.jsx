import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getProducts } from './actions';
import { ContentfulClient } from './ContentfulClient'

export default function GetProducts() {
    const dispatch = useDispatch();

    useEffect(() => {
        ContentfulClient.getEntries({
            content_type: 'products'
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
                        })
                        :
                        pics.push()

                    let product = {
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
                })
                dispatch(getProducts(products))
                return products
            })
            .catch(console.error)
    }, [])
}
