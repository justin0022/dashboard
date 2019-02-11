import * as d3 from 'd3'
import { adjustViewport } from '../../util/chartUtil'
import { margin } from '../../constants/chartConstants'

const createLineChart = ({ data, width, height, el }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.label)]).nice()
    .range([margin.left, aWidth - margin.right])

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.data)]).nice()
    .range([aHeight - margin.bottom, margin.top])

  const line = d3.line()
    .defined(d => !isNaN(d.data))
    .x(d => x(d.label))
    .y(d => y(d.data))

  const xAxis = g => g
    .attr('transform', `translate(0,${aHeight - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(aWidth / 80).tickSizeOuter(0))

  const yAxis = g => g
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))

  const svg = d3.select(el).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  svg.append('g')
    .call(xAxis)

  svg.append('g')
    .call(yAxis)

  svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5)
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('d', line)
}

export default createLineChart
