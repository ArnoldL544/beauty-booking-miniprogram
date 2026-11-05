// Skincare products. Images and prices come from product-page screenshots and need the seller's confirmation before they become official prices.
// An empty description means the seller has not provided product details yet.
const products = [
  {
    id: 'aurora-set',
    name: '极光逆龄青春套',
    brand: '匠肌密',
    price: null,
    priceText: '价格待定',
    cover: '/assets/products/aurora-set-product.jpg',
    description: '',
    images: [
      '/assets/products/aurora-set-poster-2.jpg',
      '/assets/products/aurora-set-product.jpg'
    ],
    priceSource: ''
  },
  {
    id: 'soothing-gel',
    name: '赋活舒润凝胶',
    brand: '',
    price: 368,
    priceText: '¥368',
    cover: '/assets/products/soothing-gel.jpg',
    description: '',
    images: ['/assets/products/soothing-gel.jpg'],
    priceSource: '截图参考价',
    originalPrice: null
  },
  {
    id: 'amino-cleanser',
    name: '氨基酸洁面乳',
    brand: '',
    price: 198,
    priceText: '¥198',
    cover: '/assets/products/amino-cleanser.jpg',
    description: '',
    images: ['/assets/products/amino-cleanser.jpg'],
    priceSource: '截图参考价',
    originalPrice: null
  },
  {
    id: 'freeze-dried-set',
    name: '复合冻干精华套',
    brand: '',
    price: 568,
    priceText: '¥568',
    cover: '/assets/products/freeze-dried-set.jpg',
    description: '',
    images: ['/assets/products/freeze-dried-set.jpg'],
    priceSource: '截图参考价',
    originalPrice: null
  },
  {
    id: 'mask',
    name: '海茴香美肌面膜',
    brand: '',
    price: 158,
    priceText: '¥158',
    cover: '/assets/products/sea-fennel-mask.jpg',
    description: '',
    images: ['/assets/products/sea-fennel-mask.jpg'],
    priceSource: '截图参考价',
    originalPrice: 258
  },
  {
    id: 'white-spray',
    name: '大白喷雾',
    brand: '',
    price: 138,
    priceText: '¥138',
    cover: '/assets/products/white-spray.jpg',
    description: '',
    images: ['/assets/products/white-spray.jpg'],
    priceSource: '截图参考价',
    originalPrice: 168
  },
  {
    id: 'deep-cleansing-cream',
    name: '美肌深层净透乳霜',
    brand: '',
    price: 198,
    priceText: '¥198',
    cover: '/assets/products/deep-cleansing-cream.jpg',
    description: '',
    images: ['/assets/products/deep-cleansing-cream.jpg'],
    priceSource: '截图参考价',
    originalPrice: 268
  },
  {
    id: 'acne-care',
    name: '青春痘保健液',
    brand: '',
    price: 238,
    priceText: '¥238',
    cover: '/assets/products/acne-care.jpg',
    description: '',
    images: ['/assets/products/acne-care.jpg'],
    priceSource: '截图参考价',
    originalPrice: null
  },
  {
    id: 'herbal-firm',
    name: '草本植物系-固养',
    brand: '',
    price: 129,
    priceText: '¥129',
    cover: '/assets/products/herbal-firm.jpg',
    description: '',
    images: ['/assets/products/herbal-firm.jpg'],
    priceSource: '截图参考价',
    originalPrice: null
  },
  {
    id: 'herbal-clear',
    name: '草本植物系-净透',
    brand: '',
    price: 129,
    priceText: '¥129',
    cover: '/assets/products/herbal-clear.jpg',
    description: '',
    images: ['/assets/products/herbal-clear.jpg'],
    priceSource: '截图参考价',
    originalPrice: null
  },
  {
    id: 'herbal-nourish',
    name: '草本植物系-养护',
    brand: '',
    price: 129,
    priceText: '¥129',
    cover: '/assets/products/herbal-nourish.jpg',
    description: '',
    images: ['/assets/products/herbal-nourish.jpg'],
    priceSource: '截图参考价',
    originalPrice: null
  },
  {
    id: 'herbal-bath',
    name: '草本植物系-沐浴',
    brand: '',
    price: 129,
    priceText: '¥129',
    cover: '/assets/products/herbal-bath.jpg',
    description: '',
    images: ['/assets/products/herbal-bath.jpg'],
    priceSource: '截图参考价',
    originalPrice: null
  }
]

function getProduct(id) {
  return products.find((item) => item.id === id)
}
module.exports = { products, getProduct }
