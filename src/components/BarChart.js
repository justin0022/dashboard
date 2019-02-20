import createBarChart from './d3/createBarChart'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const BarChart = compose(
  withResponsiveness,
  createChartComponent
)(createBarChart)

export default BarChart
