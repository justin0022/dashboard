const set = (chartConfig, propertyName, value) => ({ ...chartConfig, [propertyName]: value })

export function setWidth (chartConfig, width) {
  return set(chartConfig, 'width', width)
}

export function setHeight (chartConfig, height) {
  return set(chartConfig, 'height', height)
}

export function setData (chartConfig, data) {
  return set(chartConfig, 'data', data)
}

export function adjustViewport (width, height, margin) {
  const aWidth = width - margin.left - margin.right
  const aHeight = height - margin.top - margin.bottom
  return [aWidth, aHeight]
}

export function destroyChart (id) {
  const element = document.getElementById(id)
  element.removeChild(element.childNodes[0])
}
