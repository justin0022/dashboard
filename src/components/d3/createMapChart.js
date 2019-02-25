import * as d3 from 'd3'
import { adjustViewport } from '../../util/chart'
import { margin } from '../../constants/chartConstants'
import * as topojson from 'topojson'

const createMapChart = ({ data, width, height, el }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const svg = d3.select(el).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const featureCollection = topojson.feature(data.mapChartData, data.mapChartData.objects.counties)
  const heatmapStates = data.heatmapData.states
  const heatmapPopulation = {}
  for (let i = 0; i < heatmapStates.length; i++) {
    heatmapPopulation[heatmapStates[i].name] = heatmapStates[i].population
  }
  console.log(heatmapPopulation)

  const projection = d3
    .geoIdentity()
    .fitExtent([[0, 0], [aWidth, aHeight]], featureCollection)

  const path = d3.geoPath()
    .projection(projection)

  svg.append('g')
    .selectAll('path')
    .data(featureCollection.features)
    .enter().append('path')
    .attr('d', path)

  svg.append('path')
    .datum(topojson.mesh(data.mapChartData, data.mapChartData.objects.states, (a, b) => a !== b))
    .attr('fill', 'none')
    .attr('stroke', 'white')
    .attr('stroke-linejoin', 'round')
    .attr('d', path)
}

export default createMapChart
