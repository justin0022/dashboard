import * as d3 from 'd3'

const createHistogram = ({ x, y, data }) => svg => {
  const bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(40))(data)

  const bar = svg.selectAll('rect')
    .data(bins).enter()
    .append('rect')
    .attr('x', d => x(d.x0) + 1)
    .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 1))
    .attr('y', d => y(d.length))
    .attr('height', d => y(0) - y(d.length))
    .attr('fill', 'steelblue')

  bar.append('text')
    .attr('y', 10)
    .attr('x', (x(bins[0].x1) - x(bins[0].x0)) / 2)
    .attr('height', d => height - y(d.length) - 50)
    .attr('text-anchor', 'middle')
    .attr('color', 'white')
    .text(d => d === 0 ? d.length : '')

  svg.append('g')
    .call(xAxis)

  svg.append('g')
    .call(yAxis)

  if (tip) {
    svg.call(tip)
    bar
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  }
}

export default createHistogram
