import * as d3 from 'd3'
import { adjustViewport } from '../../util/chart'
import { margin } from '../../constants/chartConstants'

function createScatterplotWithRegressionLine ({ data, width, height, el, tip, xAxisLabel, yAxisLabel }) {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const x = d3.scaleLinear()
    .domain([0, 100])
    .range([margin.left, aWidth - margin.right])

  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([aHeight - margin.bottom, margin.top])

  const svg = d3.select(el).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const regressionLine = calcLinear(data)

  svg.append('line')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5)
    .attr('stroke-dasharray', 2, 1)
    .attr('x1', x(regressionLine.ptA.x))
    .attr('y1', y(regressionLine.ptA.y))
    .attr('x2', x(regressionLine.ptB.x))
    .attr('y2', y(regressionLine.ptB.y))

  const circle = svg.selectAll('.dot')
    .data(data).enter()
    .append('circle')
    .attr('cx', d => x(d.x))
    .attr('cy', d => y(d.y))
    .attr('r', d => 3)

  const xAxis = g => g
    .attr(`transform`, `translate(0, ${aHeight - margin.bottom})`)
    .call(d3
      .axisBottom(x)
      .tickSizeOuter(0)
      .tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      .tickFormat(d => `${d}%`)
    )
    .call(g => g.append('text')
      .attr('x', aWidth - margin.right)
      .attr('y', -4)
      .attr('fill', '#000')
      .attr('text-anchor', 'end')
      .text(xAxisLabel)
    )

  const yAxis = g => g
    .attr('transform', `translate(${margin.left},0)`)
    .attr('class', 'axis')
    .call(d3.axisLeft(y).tickSizeInner(-aWidth).ticks(6))
    .call(g => g.select('.domain').remove())
    .call(g => g.select('.tick:last-of-type text').clone()
      .attr('x', 5)
      .attr('fill', '#000')
      .attr('text-anchor', 'start')
      .text(yAxisLabel).attr('dy', -4)
    )

  svg.append('g')
    .call(xAxis)

  svg.append('g')
    .call(yAxis)

  if (tip) {
    svg.call(tip)
    circle
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  }

  function calcLinear (data) {
    let n = data.length
    let dataPoints = []
    data.forEach((d) => {
      let obj = {}
      obj.x = d['x']
      obj.y = d['y']
      obj.mult = obj.x * obj.y
      dataPoints.push(obj)
    })

    // Let a = n times the summation of all x-values multiplied by their corresponding y-values
    // Let b = sum of all x-values times the sum of all y-values
    // Let c = n times the sum of all squared x-values
    // Let d = squared sum of all x-values
    let sum = 0
    let xSum = 0
    let ySum = 0
    let sumSq = 0
    dataPoints.forEach((pt) => {
      sum = sum + pt.mult
      xSum = xSum + pt.x
      ySum = ySum + pt.y
      sumSq = sumSq + (pt.x * pt.x)
    })
    let a = sum * n
    let b = xSum * ySum
    let c = sumSq * n
    let d = xSum * xSum
    let m = (a - b) / (c - d)
    let yIntercept = (ySum - m * xSum) / n
    return {
      ptA: {
        x: 0,
        y: yIntercept
      },
      ptB: {
        y: 100,
        x: (100 - yIntercept) / m
      }
    }
  }
}

export default createScatterplotWithRegressionLine
