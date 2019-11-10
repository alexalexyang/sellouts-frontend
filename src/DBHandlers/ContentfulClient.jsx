import { createClient } from 'contentful'
require('dotenv').config()


const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const CDA_TOKEN = process.env.REACT_APP_CDA_TOKEN;

export const ContentfulClient = createClient({
    space: SPACE_ID,
    accessToken: CDA_TOKEN,
})