import createSankeyDiagram from './d3/createSankeyDiagram'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const Sankey = compose(
  withResponsiveness,
  createChartComponent
)(createSankeyDiagram)

export default Sankey
