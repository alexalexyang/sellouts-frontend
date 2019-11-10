# About

JAMstack e-commerce platform with React, Contentful, EmailJS, and PayPal.

Target demographic: people who have very little money but who still want to sell stuff online.

# Status

3/4 of the way to becoming minimally viable.

# Upcoming support

- Multiple languages
- Holiday seasons and other special occasions
- International shipping
- Vouchers
- Pages

# Important dependencies at a glance

- Bootstrap 4
- Redux
- Contentful
- PayPal
- EmailJS

Check package.json for details on all the React ones.

# .env

Requires the following environmental variables:

```
REACT_APP_BOOTSTRAP
REACT_APP_SPACE_ID
REACT_APP_CDA_TOKEN
REACT_APP_PAYPAL_CLIENT_ID
```

# Known limits and costs

These are all free tiers.

Contentful:
- Essentially, [78 requests/second/client](https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/common-resource-attributes), I think.
- [10 requests/second to write](https://www.contentful.com/developers/docs/references/content-management-api/#/introduction/api-rate-limits)
- 5000 records (basically database rows) in total for free tier space

EmailJS
- 200 emails/month :(
- [USD $4/month for next tier at 1000 requests/month](https://www.emailjs.com/pricing/)

Paypal
- [Merchant fees](https://www.paypal.com/us/webapps/mpp/merchant-fees)

# Required links

These links are required in the Contentful space:
- /
- /products
- /product/:id, 
- /cart
- /cart/shipping
- /cart/payment
- /cart/success

# Learning resources

https://fireship.io/lessons/paypal-checkout-frontend/