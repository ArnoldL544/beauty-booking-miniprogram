# Beauty Service Booking Mini Program

A WeChat Mini Program built for a family-run beauty side business. Customers can browse nail, lash, permanent makeup and skincare services and products, read the price list, pick a style, and send a booking or inquiry.

> Status: the frontend is complete and the backend (WeChat Cloud Development) is being planned. It currently runs as a development / trial build and has not been publicly released.

The app's interface and price data are in Chinese because its customers are in China.

## Background

The owner refers customers to licensed partner beauty salons, mostly through WeChat Moments. Quotes used to be photos of a printed price list. With many styles and tiered prices (imported vs. domestic products, per-finger pricing, "from" prices), customers often couldn't read the photos or understand the pricing.

This mini program turns the printed price list into structured pages that customers can browse and choose from. They pick the service and style themselves first, then contact the owner, which cuts down the back-and-forth.

Medical-aesthetic procedures only show the partner clinic's reference prices and direct customers to a consultation. **There is no online booking and no deposit for them.** The final plan and price are set at an in-person consultation with a licensed medical provider.

## Features

| Module | Description |
| --- | --- |
| Home | Results carousel and promotions |
| Beauty booking | Browse category → service → style → details, then book |
| Pricing | Imported / domestic price tiers, fixed prices, "from" prices, price ranges, per-finger / per-piece pricing |
| Nail add-ons | Decorations (rhinestones, pearls, hand-painting, etc.) chosen by quantity and carried into the booking |
| Skincare | Product list, product details, image preview |
| Favorites | One list for beauty services (down to the style and price tier) and skincare products, with category filters |
| Me | Orders, shipping addresses, after-sales, booking guide, contact the seller |
| Custom tab bar | Five tabs, with "Beauty booking" highlighted in the middle |

## Implementation

- Native WeChat Mini Program (WXML / WXSS / JavaScript) with no third-party dependencies
- **Data separated from pages**: service categories, price lists and products live in `data/`; pages only read and display them, so a price change is a data-file edit
- **Price model**: a style can have `price` (fixed), `imported` / `domestic` (two tiers), `priceFrom` ("from" price) or `priceText` (range / on request). `getPriceText()` turns all of them into display text
- **Passing state between pages**: the chosen style, tier and nail add-ons travel as URL parameters, and the receiving page validates them against an allowlist (only registered add-on ids, quantities limited to 1–99) so crafted parameters are rejected
- **Favorites**: wrapped in `utils/favorites.js` on top of local storage; beauty services get a unique key of `service:style:tier`
- Code is formatted with Prettier (see `.prettierrc.json`)

## Project structure

```
├── app.js / app.json / app.wxss   App entry, page routes, global styles
├── custom-tab-bar/                Custom bottom tab bar
├── data/
│   ├── beauty.js                  Service categories and items
│   ├── price-list.js              Price lists, price formatting, nail add-on parsing
│   └── products.js                Skincare products
├── utils/
│   └── favorites.js               Favorites storage
├── pages/
│   ├── index/                     Home
│   ├── category/ → services/ → styles/ → detail/ → booking/   Booking flow
│   ├── products/ → product-detail/                           Skincare
│   ├── records/                   Bookings (filter by status)
│   ├── mine/  orders/  favorites/  address/  aftersales/
│   └── guide/  about/  contact/  profile/
└── assets/                        Images
```

## Running it

1. Install [WeChat DevTools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. Import this folder. The project uses the test AppID (`touristappid`) by default; you can switch to your own AppID
3. Compile to preview in the simulator, or click "Preview" and scan the QR code to run it on a phone

## Roadmap

- [ ] Connect WeChat Cloud Development: sign in with `wx.login` and save bookings to the cloud database with an initial status of "pending review"
- [ ] Have the "Bookings" page load the current user's own records (pending / confirmed / completed / cancelled)
- [ ] Seller admin page, open only to the owner's account, for reviewing bookings and updating their status
- [ ] Automated tests for booking status transitions and permission checks
- [ ] Replace placeholder images and add product descriptions

## Notes

Price data comes from the partner salons' printed price lists and is for reference only; actual prices are confirmed in store or at consultation.

To protect customer privacy, the public version uses placeholder images on the home page, with no real customer photos, and the business name has been removed. Beauty service covers are AI-generated illustrations; skincare product images come from the brands' product pages, and their copyright belongs to those brands.
