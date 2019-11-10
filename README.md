# About

JAMstack e-commerce platform with React, Contentful, EmailJS, and PayPal.

Target demographic: people who have very little money but who still want to sell stuff online.

# Status

3/4 of the way to becoming minimally viable.

# Demo

[bean-dev](https://bean-dev.notathoughtexperiment.me)

# Upcoming support

- International shipping
- Holiday seasons and other special occasions
- Vouchers

# Important dependencies at a glance

- Bootstrap 4
- Redux
- Contentful
- PayPal
- EmailJS

Check package.json for details on all the React ones.

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

# Required things

## Environmental variables

```
REACT_APP_BOOTSTRAP
REACT_APP_SPACE_ID
REACT_APP_CDA_TOKEN
REACT_APP_PAYPAL_CLIENT_ID
REACT_APP_DEFAULT_LANGUAGE
```

## Contentful

### Language

### Pages

- /
- /products
- /product/:id, 
- /cart
- /cart/shipping
- /cart/payment
- /cart/success

### Products

- sku
- component

# Learning resources

https://fireship.io/lessons/paypal-checkout-frontend/