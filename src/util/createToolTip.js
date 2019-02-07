import d3tip from 'd3-tip'

const createToolTip = html => d3tip()
  .attr('class', 'd3-tip')
  .html(html)

export default createToolTip
