import { ContentfulClient } from './ContentfulClient'

export const getQuantitites = async (setProductStock) => {
    const response = await ContentfulClient.getEntries({
        content_type: 'products',
        select: 'sys.id,fields.quantity'
    })
        .then((response) => {
            let productsObj = {}
            response.items.map(item => {
                productsObj[item.sys.id] = item.fields.quantity
                return item
            })
            setProductStock(productsObj)
            return response.items
        })
        .catch(console.error)
    return response
}