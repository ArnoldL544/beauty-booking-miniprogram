// 收藏夹：保存在本地缓存中，美容项目和护肤品共用一个列表。
// 每条记录：{ key, type: 'service' | 'product', title, subtitle, image, url }
const STORAGE_KEY = 'beauty_favorites_v1'

function getFavorites() {
  const saved = wx.getStorageSync(STORAGE_KEY)
  return Array.isArray(saved) ? saved : []
}

function saveFavorites(list) {
  wx.setStorageSync(STORAGE_KEY, list)
}

function isFavorite(key) {
  return getFavorites().some((item) => item.key === key)
}

// 已收藏则移除，未收藏则加入；返回操作后是否处于收藏状态。
function toggleFavorite(entry) {
  const list = getFavorites()
  const exists = list.some((item) => item.key === entry.key)
  saveFavorites(exists ? list.filter((item) => item.key !== entry.key) : [...list, entry])
  return !exists
}

function removeFavorite(key) {
  const next = getFavorites().filter((item) => item.key !== key)
  saveFavorites(next)
  return next
}

module.exports = { getFavorites, isFavorite, toggleFavorite, removeFavorite }
