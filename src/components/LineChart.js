import createLineChart from './d3/createLineChart'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const LineChart = compose(
  withResponsiveness,
  createChartComponent
)(createLineChart)

export default LineChart
