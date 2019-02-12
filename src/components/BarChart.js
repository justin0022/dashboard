import createBarChart from './viz/createBarChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'
import compose from '../util/compose'

export default compose(
  withResponsiveness,
  createChartComponent
)(createBarChart)
