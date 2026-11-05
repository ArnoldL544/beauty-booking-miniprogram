// 价格来源：合作美容院纸质价目表（2026-10-13 录入）。
// "进口"/"国产"沿用价目表原文。价目表上没有的价格一律不填，页面显示"价格待确认"。
const styleLists = {
  brows: [
    { id: 'standard-line', name: '普通线条眉', imported: 1880, domestic: 1680 },
    { id: 'crescent', name: '新月眉', imported: 1880, domestic: 1680 },
    { id: 'silk-mist', name: '丝雾眉', imported: 2480, domestic: 2280 },
    { id: 'powder', name: '粉黛眉', imported: 2480, domestic: 2280 },
    { id: 'natural-line', name: '野生线条眉', imported: 2880, domestic: 2680 },
    { id: 'premium-perspective', name: '高端透视眉', imported: 3880, domestic: 3680 },
    { id: 'fortune', name: '男女士开运眉', imported: 6880, domestic: 6680 }
  ],
  lips: [
    { id: 'standard-lip', name: '普通唇', imported: 2880, domestic: 2680 },
    { id: 'rouge', name: '胭脂唇', imported: 2880, domestic: 2680 },
    { id: 'glazed', name: '轻奢琉璃唇', imported: 3280, domestic: 3080 },
    { id: 'cherry', name: '樱桃唇', imported: 3380, domestic: 3280 },
    { id: 'gradient', name: '渐变唇', imported: 5800, domestic: 5600 },
    { id: 'fortune-ingot', name: '开运元宝唇', imported: 6680, domestic: 6280 }
  ],
  eyeliner: [
    { id: 'regular', name: '普通美瞳线', price: 980 },
    { id: 'lash-line', name: '美睫线', price: 1280 },
    { id: 'bright-black', name: '亮眸黑', price: 1580 },
    { id: 'starry', name: '星空雾线', price: 1880 }
  ]
}

// 美甲价目表（2026-10-13 录入），为商家标价，实际成交价以到店确认为准。
// 加项按"/指""/只"计价，含价格区间，因此不自动计算订单总价。
styleLists.manicure = [
  { id: 'solid-color', name: '纯色美甲', price: 68 },
  { id: 'solid-glitter', name: '纯色闪粉', price: 68 },
  { id: 'gradient', name: '渐变美甲', price: 100 },
  { id: 'cat-eye', name: '特色猫眼', price: 160 },
  { id: 'full-tip', name: '全贴甲片', price: 120 },
  { id: 'half-tip', name: '半贴甲片', price: 160 },
  { id: 'crystal-extension', name: '水晶延长', price: 520 },
  { id: 'french-edge', name: '法式边', price: 80 },
  { id: 'flower-sticker', name: '贴花', price: 88 },
  { id: 'transfer-print', name: '转印', price: 88 },
  { id: 'removal', name: '卸甲', priceMin: 20, priceMax: 50, priceText: '¥20–50' }
]
const nailExtras = [
  { id: 'luxury-rhinestone', name: '豪华钻', priceText: '¥20–40' },
  { id: 'medium-small-rhinestone', name: '中钻/小钻', price: 10, unit: '指', priceText: '¥10/指' },
  { id: 'pearl', name: '珍珠（大小）', price: 10, unit: '指', priceText: '¥10/指' },
  { id: 'lines-art', name: '线条/彩绘', price: 15, unit: '指', priceText: '¥15/指' },
  { id: 'mirror-water', name: '镜面/水波纹', price: 15, unit: '指', priceText: '¥15/指' },
  { id: 'metal-shell', name: '金属丝/贝壳', price: 15, unit: '指', priceText: '¥15/指' },
  { id: 'colored-foil', name: '彩线/金银箔', price: 8, unit: '指', priceText: '¥8/指' },
  { id: 'dried-flower', name: '干花', price: 10, unit: '指', priceText: '¥10/指' },
  { id: 'butterfly', name: '蝴蝶', price: 10, unit: '只', priceText: '¥10/只' }
]
// 医美：仅供咨询及面诊参考，不提供在线预约，也不收定金。
// 眼部 19 项（2026-10-14 复核），项目名保留价目表印刷原文。
styleLists['medical-eyes'] = [
  { id: 'me-double', name: 'ME双眼皮', price: 3880 },
  { id: 'nano-double', name: '纳米无痕双眼皮', price: 4400 },
  { id: 'tunnel-incision', name: '隧道小切口', price: 6000 },
  { id: 'two-thirds', name: '微创三分之二', price: 7200 },
  { id: 'full-excision', name: '全切去皮去脂', price: 11600 },
  { id: 'levator', name: '提上睑肌重组', price: 5000 },
  { id: 'repair', name: '全切修复', price: 6000 },
  { id: 'muscle-weakness', name: '种度肌无力', price: 12000 },
  { id: 'septum-release', name: '框格释放', price: 5000 },
  { id: 'septum-fill', name: '框格脂肪块填充', price: 9000 },
  { id: 'inner-canthus', name: '内眼角', price: 5000 },
  { id: 'outer-canthus', name: '外眼角', price: 6000 },
  { id: 'outer-repair', name: '外眼角修复', price: 3600 },
  { id: 'lower-lid', name: '眼睑下至', price: 5600 },
  { id: 'lower-lid-skin', name: '下至去皮', price: 3600 },
  { id: 'aegyo-sal', name: '卧蚕再造', price: 11600 },
  { id: 'scarless-eye-bags', name: '无疤无痕眼袋', price: 7600 },
  { id: 'external-eye-bags', name: '外切去皮去脂', price: 5800 },
  { id: 'eyebrow-lift', name: '无痕切眉', price: 6000 }
]
styleLists['medical-lips'] = [
  { id: 'upper-lip', name: '上唇', price: 9600 },
  { id: 'lower-lip', name: '下唇', price: 9600 },
  { id: 'lip-comprehensive', name: '唇综合', price: 16000 },
  { id: 'philtrum-shortening', name: '人中缩短', price: 11600 },
  { id: 'philtrum-depth', name: '人中窝加深', price: 6800 }
]
// 无痕水玻璃拉皮 4 项（2026-10-14 复核），项目名保留价目表印刷原文。
styleLists['medical-lift'] = [
  { id: 'neck-lift', name: '小切口颈部拉皮', price: 12800 },
  { id: 'under-ear-lift', name: '小切口耳下拉皮', price: 15800 },
  { id: 'before-ear-lift', name: '无痕水痕离耳前拉皮', price: 26800 },
  { id: 'behind-ear-lift', name: '无痕水痕离耳后拉皮', price: 35800 }
]
styleLists.rhinoplasty = [
  { id: 'prosthesis', name: '单纯假体隆鼻', priceFrom: 12000, priceText: '¥12,000 起' },
  { id: 'ear-cartilage', name: '耳软骨隆鼻', priceFrom: 17600, priceText: '¥17,600 起' },
  { id: 'scaffold', name: '支架鼻综合', priceFrom: 25600, priceText: '¥25,600 起' },
  { id: 'donor-rib', name: '异体肋骨鼻综合', priceFrom: 59600, priceText: '¥59,600 起' },
  { id: 'own-rib', name: '自体肋骨鼻综合', priceFrom: 59600, priceText: '¥59,600 起' },
  { id: 'implant-repair', name: '假体修复', price: 7000 },
  { id: 'implant-removal', name: '假体取出', price: 7000 },
  { id: 'thread-removal', name: '取线雕鼻', price: 7000 },
  { id: 'alar-rim', name: '鼻翼缘下放', price: 7000 },
  { id: 'tip', name: '鼻头缩小', price: 5000 },
  { id: 'fascia', name: '筋膜修复', price: 5000 },
  { id: 'alar', name: '缩鼻翼', price: 9000 },
  { id: 'chin-implant', name: '假体下巴', priceFrom: 12000, priceText: '¥12,000 起' },
  { id: 'nasal-base-implant', name: '假体鼻基底再造', price: 15000 },
  { id: 'nasal-base-eptfe', name: '膨体鼻基底再造', price: 25000 }
]
styleLists['medical-other'] = [
  { id: 'back-lipo', name: '背部吸脂', price: 15800 },
  { id: 'hip-line', name: '臀线再造', price: 15600 },
  { id: 'double-chin', name: '双下巴吸脂', price: 9960 },
  { id: 'face-lipo', name: '面部吸脂', price: 12000 },
  { id: 'single-lipo', name: '单部位吸脂', price: 5600 },
  { id: 'waist-sculpt', name: '维密脂雕腰腹环吸', price: 36800 },
  { id: 'thigh-sculpt', name: '维密脂雕大腿环吸', price: 32800 },
  { id: 'arm-sculpt', name: '维密脂雕蝴蝶袖', price: 16800 },
  { id: 'hip-sculpt', name: '维密脂雕臀线再造', price: 19800 },
  { id: 'chin-sculpt', name: '维密脂雕双下巴吸脂', price: 13500 },
  { id: 'face-sculpt', name: '维密脂雕面部吸脂', price: 23800 },
  { id: 'single-sculpt', name: '维密脂雕单部位吸脂', price: 6800 },
  { id: 'abdominal-wall', name: '腹壁整形', priceFrom: 50000, priceText: '¥50,000 起' },
  // 隆胸：价目表照片上该项价格看不清，暂显示"面诊确认价格"。
  { id: 'breast-consult', name: '隆胸（价格待确认）', priceText: '面诊确认价格' }
]
const priceNotes = {
  manicure: '美甲可另选装饰加项；按指/按只的费用要结合实际数量计算。款式颜色及完整搭配收藏待确认。',
  'medical-eyes':
    '以上名称及价格已按商家纸质价目表近照核对，供咨询参考。原表中“种度肌无力”“框格释放”等名称仍需商家确认正式项目名；最终方案及收费以具备资质的医疗机构面诊为准。',
  'medical-lips':
    '以上医美价格来自纸质价目表，仅供咨询参考；最终方案和收费以医疗机构面诊确认为准。',
  'medical-lift':
    '以上4项价格已按商家纸质价目表近照核对。“无痕水痕离耳前/后拉皮”为原表印刷文字，正式项目名仍需商家核实；方案和最终价格以具备资质的医疗机构面诊为准。',
  rhinoplasty: '标有“起”的项目是起价；图片价格为参考，最终以医疗机构面诊确认为准。',
  'medical-other':
    '第三张照片左侧还有无法辨认项目名的价格，未录入。此处只列入清晰可读的项目；最终价格以医疗机构面诊为准。',
  brows: '以上眉部款式为手工线条眉；机器线条眉价格面谈。修眉设计眉形另列 ¥10–30。',
  lips: '乌唇、白唇或唇色不均如需转色，另加 ¥200。',
  eyeliner: '原价目表注明：以上项目使用纯植物色料（商家宣传，待核实）。',
  'small-tattoo': '小纹身按尺寸等因素确定最终价格，价目表标注 ¥1,280 起。',
  hairline: '发际线按尺寸等因素确定最终价格，价目表标注 ¥2,280 起。',
  'brow-design': '修眉设计眉形费用为 ¥10–30，具体金额需商家确认。'
}
function formatPrice(amount) {
  return '¥' + amount.toLocaleString('en-US')
}
function getTierName(tier) {
  return tier === 'imported' ? '进口' : tier === 'domestic' ? '国产' : ''
}
function getStyles(id) {
  return styleLists[id] || []
}
function getStyle(serviceId, styleId) {
  return getStyles(serviceId).find((item) => item.id === styleId)
}
function getPriceText(style) {
  if (!style) return '价格待确认'
  if (style.priceText) return style.priceText
  if (style.imported !== undefined)
    return '进口 ' + formatPrice(style.imported) + ' · 国产 ' + formatPrice(style.domestic)
  if (style.price !== undefined)
    return formatPrice(style.price) + (style.unit ? '/' + style.unit : '')
  return '价格待确认'
}
function getPrice(serviceId, styleId, tier) {
  const item = getStyle(serviceId, styleId)
  if (!item) return null
  if (item.price !== undefined) return item.price
  if (tier === 'imported') return item.imported
  if (tier === 'domestic') return item.domestic
  return null
}
// 按已登记的美甲装饰加项 id 解析数量；价格区间与计量单位均保留原表。
// 这里只记录顾客意向，不依据范围价格计算最终金额。
function parseNailExtraSelection(input) {
  if (!input) return []
  let entries
  try {
    entries = JSON.parse(decodeURIComponent(input))
  } catch (_) {
    return []
  }
  if (!Array.isArray(entries)) return []
  return nailExtras.reduce((chosen, extra) => {
    const matching = entries.find((entry) => entry && entry.id === extra.id)
    const qty = matching && Number(matching.quantity)
    if (Number.isInteger(qty) && qty > 0 && qty <= 99) {
      chosen.push({
        id: extra.id,
        name: extra.name,
        priceText: extra.priceText,
        unit: extra.unit || '',
        quantity: qty
      })
    }
    return chosen
  }, [])
}
module.exports = {
  styleLists,
  priceNotes,
  getStyles,
  getStyle,
  getPrice,
  getPriceText,
  formatPrice,
  getTierName,
  nailExtras,
  parseNailExtraSelection
}
