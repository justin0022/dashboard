import createSankeyDiagram from './viz/createSankeyDiagram'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'
import compose from '../util/compose'

export default compose(
  withResponsiveness,
  createChartComponent
)(createSankeyDiagram)
