// Favorites: stored in local storage; beauty services and skincare products share one list.
// Each entry: { key, type: 'service' | 'product', title, subtitle, image, url }
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

// Removes the item if already saved, otherwise adds it; returns whether it is saved afterwards.
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
