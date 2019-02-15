import * as d3 from 'd3'
import { adjustViewport } from '../../util/chartUtil'
import { margin } from '../../constants/chartConstants'
import createSVG from './createSVG'
import createLine from './createLine'

const anotherLine = [
  {
    'label': 0,
    'data': 4
  },
  {
    'label': 1,
    'data': 1
  },
  {
    'label': 2,
    'data': 3
  },
  {
    'label': 3,
    'data': 2
  },
  {
    'label': 4,
    'data': 4
  },
  {
    'label': 5,
    'data': 2.5
  },
  {
    'label': 6,
    'data': 1
  },
  {
    'label': 7,
    'data': 4
  }
]

const createLineChart = ({ data, width, height, el }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.label)]).nice()
    .range([margin.left, aWidth - margin.right])

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.data)]).nice()
    .range([aHeight - margin.bottom, margin.top])

  const xAxis = g => g
    .attr('transform', `translate(0,${aHeight - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(aWidth / 80).tickSizeOuter(0))

  const yAxis = g => g
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))

  const svg = createSVG({ el, width, height })

  createLine({ svg, x, y, data })
  createLine({ svg, x, y, data: anotherLine })

  svg.append('g')
    .call(xAxis)

  svg.append('g')
    .call(yAxis)
}

export default createLineChart
