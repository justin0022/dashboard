import * as d3 from 'd3'
import { adjustViewport } from '../../util/chart'
import { margin } from '../../constants/chartConstants'
import * as topojson from 'topojson'

const createMapChart = ({ data, width, height, el }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const svg = d3.select(el).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  // const features = data.mapChartData.states.features

  const featureCollection = topojson.feature(data, data.mapChartData)
  const heatmapStates = data.heatmapData.states
  const heatmapPopulation = {}
  for (let i = 0; i < heatmapStates.length; i++) {
    heatmapPopulation[heatmapStates[i].name] = heatmapStates[i].population
  }

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

  /*
    d3.json(data.heatmapData, (json) => {
      const heatmap = d3.scale.linear()
        .domain([0, d3.max(json.features, (d) => { return Math.log(heatmapPopulation[d.properties.abbr] || 1) })])
        .interpolate(d3.interpolateRgb)
        .range(['#ffffff', '#073f07'])
      const states = g.selectAll('path')
        .data(json.features)
        .enter().append('path')
          .attr('d', path)
          .attr('id', function (d) { return d.properties.abbr; })
          .style('fill', function (d) { return heatmap(Math.log(heatmapPopulation[d.properties.abbr] || 1)) })
    })
  */
}

export default createMapChart
