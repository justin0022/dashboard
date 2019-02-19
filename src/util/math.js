const average = arr =>
  Math.round((arr.reduce((acc, cur) => acc + cur, 0) / arr.length) * 10) / 10

export {
  average
}
