# About

JAMstack e-commerce platform with React, Contentful, and PayPal.

Target demographic: people who have very little money but who still want to sell stuff online.

# Status

3/4 of the way to minimally viable.

# Upcoming support

- Multiple languages
- Holiday seasons and other special occasions
- International shipping
- Vouchers
- Landing page carousel

# Important dependencies at a glance

- Bootstrap 4
- Redux
- Contentful
- PayPal

Check package.json for details on all the React ones.

# .env

Requires the following environmental variables:

```
REACT_APP_SPACE_ID
REACT_APP_CDA_TOKEN
REACT_APP_PAYPAL_CLIENT_ID
```

# Known limits

Contentful:
- 200 requests/min?
- 5000 records (basically database rows) in total for free tier space