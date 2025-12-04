export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const getItem = (key) => {
  let data = localStorage.getItem(key)
  try {
    data = JSON.parse(value)
  } catch (e) {
    return data
  }
}

export const removeItem = (key) => {
  localStorage.removeItem(key)
}

export const clearItem = () => {
  localStorage.clear()
}
