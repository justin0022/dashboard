import * as d3 from 'd3'
import { adjustViewport } from '../../util/chart'
import { margin } from '../../constants/chartConstants'

function createScatterplot ({ data, width, height, el, tip }) {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const x = d3.scaleLinear().rangeRound([0, aWidth]).domain([0, 100])
  const y = d3.scaleLinear().rangeRound([aHeight, 0]).domain([0, 100])

  const svg = d3.select(el).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const circle = svg.selectAll('.dot')
    .data(data).enter()
    .append('circle')
    .attr('cx', d => x(d.grade1))
    .attr('cy', d => y(d.grade2))
    .attr('r', d => 3)

  svg.append('g')
    .attr('transform', `translate(0, ${aHeight - margin.bottom})`)
    .call(d3.axisLeft(y).ticks(10))

  svg.append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))

  if (tip) {
    svg.call(tip)
    circle
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  }
}

export default createScatterplot
