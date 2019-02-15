/* global fetch */

const get = url => {
  return fetch(url)
    .then(res => res.text())
    .then(data => JSON.parse(data))
}

export default get
