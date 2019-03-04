import * as d3 from 'd3'
import { adjustViewport } from '../../util/chart'
import { margin } from '../../constants/chartConstants'

function createBoxPlot ({ data, width, height, el, tip }) {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const bins = d3.histogram()
    .thresholds()

  const x = d3.scaleLinear()
    .domain([d3.min()])

  const y =

  const svg = d3.select(el).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const g = svg.append('g')
    .selectAll('g')
    .data(bins)
    .join('g')

  g.append('path')
    .attr('d', d => `
      M${x((d.x0 + d.x1) / 2)}, ${y(d.range[1])}
      V${y(d.range[0])}
    `)
}

export default createBoxPlot
