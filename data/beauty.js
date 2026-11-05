// 服务分类与项目。价格见 price-list.js（来源：合作美容院纸质价目表）。
// 部分封面为临时图片，并非真实顾客案例，正式使用前需换成已授权图片。
// action: 'booking' 可在线预约；'contact' 为医美项目，只做咨询转介，不在线预约。
const categories = [
  {
    id: 'nails-lashes',
    name: '美甲美睫',
    cover: '/assets/services/manicure.jpg',
    items: ['manicure', 'lashes']
  },
  {
    id: 'tattoo',
    name: '纹绣',
    cover: '/assets/services/brows.jpg',
    items: ['lips', 'brows', 'eyeliner', 'small-tattoo', 'hairline', 'brow-design']
  },
  {
    id: 'medical',
    name: '医美',
    cover: '/assets/services/rhinoplasty.jpg',
    items: ['medical-eyes', 'medical-lips', 'medical-lift', 'rhinoplasty', 'medical-other']
  },
  {
    id: 'skin',
    name: '皮肤护理',
    cover: '/assets/services/hydrafacial.jpg',
    items: ['hydrafacial']
  }
]
const services = {
  manicure: {
    id: 'manicure',
    name: '美甲',
    categoryId: 'nails-lashes',
    cover: '/assets/services/manicure.jpg',
    needsStyle: true,
    action: 'booking',
    durationMinutes: 120,
    priceText: '¥68 起'
  },
  lashes: {
    id: 'lashes',
    name: '美睫',
    categoryId: 'nails-lashes',
    cover: '/assets/services/lashes.jpg',
    action: 'booking',
    durationMinutes: 120
  },
  lips: {
    id: 'lips',
    name: '纹唇',
    categoryId: 'tattoo',
    cover: '/assets/services/lips.jpg',
    needsStyle: true,
    action: 'booking',
    durationMinutes: 120,
    priceText: '¥2,680 起'
  },
  brows: {
    id: 'brows',
    name: '纹眉',
    categoryId: 'tattoo',
    cover: '/assets/services/brows.jpg',
    needsStyle: true,
    action: 'booking',
    durationMinutes: 90,
    priceText: '¥1,680 起'
  },
  eyeliner: {
    id: 'eyeliner',
    name: '美瞳线',
    categoryId: 'tattoo',
    cover: '/assets/services/eyeliner-placeholder.png',
    needsStyle: true,
    action: 'booking',
    durationMinutes: 90,
    priceText: '¥980 起'
  },
  'small-tattoo': {
    id: 'small-tattoo',
    name: '小纹身',
    categoryId: 'tattoo',
    cover: '/assets/services/small-tattoo-placeholder.png',
    action: 'booking',
    priceText: '¥1,280 起',
    startingPrice: 1280
  },
  hairline: {
    id: 'hairline',
    name: '发际线',
    categoryId: 'tattoo',
    cover: '/assets/services/hairline-placeholder.png',
    action: 'booking',
    priceText: '¥2,280 起',
    startingPrice: 2280
  },
  'brow-design': {
    id: 'brow-design',
    name: '修眉设计眉形',
    categoryId: 'tattoo',
    cover: '/assets/services/brow-design-placeholder.png',
    action: 'booking',
    priceText: '¥10–30',
    priceRange: [10, 30]
  },
  'medical-eyes': {
    id: 'medical-eyes',
    name: '眼部',
    categoryId: 'medical',
    cover: '',
    needsStyle: true,
    action: 'contact',
    priceText: '查看项目价格'
  },
  'medical-lips': {
    id: 'medical-lips',
    name: '唇综合',
    categoryId: 'medical',
    cover: '',
    needsStyle: true,
    action: 'contact',
    priceText: '查看项目价格'
  },
  'medical-lift': {
    id: 'medical-lift',
    name: '无痕水玻璃拉皮',
    categoryId: 'medical',
    cover: '',
    needsStyle: true,
    action: 'contact',
    priceText: '查看项目价格'
  },
  rhinoplasty: {
    id: 'rhinoplasty',
    name: '隆鼻',
    categoryId: 'medical',
    cover: '',
    needsStyle: true,
    action: 'contact',
    priceText: '查看项目价格'
  },
  'medical-other': {
    id: 'medical-other',
    name: '其它',
    categoryId: 'medical',
    cover: '',
    needsStyle: true,
    action: 'contact',
    priceText: '查看项目价格'
  },
  breast: {
    id: 'breast',
    name: '隆胸',
    categoryId: 'medical',
    cover: '/assets/services/breast.jpg',
    action: 'contact'
  },
  liposuction: {
    id: 'liposuction',
    name: '抽脂',
    categoryId: 'medical',
    cover: '/assets/services/liposuction.jpg',
    action: 'contact'
  },
  'double-eyelid': {
    id: 'double-eyelid',
    name: '双眼皮',
    categoryId: 'medical',
    cover: '/assets/services/double-eyelid.jpg',
    action: 'contact'
  },
  hydrafacial: {
    id: 'hydrafacial',
    name: '小气泡',
    categoryId: 'skin',
    cover: '/assets/services/hydrafacial.jpg',
    action: 'booking'
  }
}
function getCategory(id) {
  return categories.find((item) => item.id === id)
}
function getService(id) {
  return services[id]
}
module.exports = { categories, services, getCategory, getService }
