import * as d3 from 'd3'
import { adjustViewport } from '../../util/chartUtil'
import { margin } from '../../constants/chartConstants'
import * as topojson from 'topojson'

const createMapChart = ({ data, width, height, el }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const svg = d3.select(el).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const featureCollection = topojson.feature(data, data.objects.counties)

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
    .datum(topojson.mesh(data, data.objects.states, (a, b) => a !== b))
    .attr('fill', 'none')
    .attr('stroke', 'white')
    .attr('stroke-linejoin', 'round')
    .attr('d', path)
}

export default createMapChart
