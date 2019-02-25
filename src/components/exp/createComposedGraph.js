import createSVG from './createSVG'
import createXAxis from '../exp/createXAxis'
import compose from '../../util/compose'
import d3 from 'd3'

const createComposedGraph = ({ charts, width, height, x, y }) => data => {
  charts.reduce((graph, chart, i) => {
    const svg = createSVG({ graph, width, height })
    graph = chart({ svg, data: data[i], x, y })
  }, document.createElement('div'))
}

export default createComposedGraph
