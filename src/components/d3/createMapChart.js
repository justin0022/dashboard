import * as d3 from 'd3'
import { adjustViewport } from '../../util/chart'
import { margin } from '../../constants/chartConstants'

const createMapChart = ({ data, width, height, el, tip }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const svg = d3.select(el).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const mapData = data.mapChartData
  const heatmapStates = data.heatmapData.states
  // for (let i = 0; i < mapData.features.length; i++) {
  //   mapData.features[i].properties.population = heatmapStates[i].population
  // }

  const projection = d3
    .geoMercator()
    // .translate(aWidth / 2, aHeight / 2)
    .fitExtent([[0, 0], [aWidth, aHeight+100]], mapData)

  const path = d3.geoPath()
    .projection(projection)

  const domain = [0.125, Math.max(...mapData.features.map(states => states.properties.population))]

  const color = d3.scaleLog()
    .base(2)
    .domain(domain)
    .interpolate(() => d3.interpolateMagma)

  const map = svg.selectAll('path')
    .data(mapData.features).enter()
    .append('path')
    // .attr('fill', d => color(d.properties.population))
    .attr('d', path)

  if (tip) {
    svg.call(tip)
    map
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  }
}

export default createMapChart
