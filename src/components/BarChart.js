import createBarChart from './viz/createBarChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'
import compose from '../util/compose'

const BarChart = compose(
  withResponsiveness,
  createChartComponent
)(createBarChart)

export default BarChart
