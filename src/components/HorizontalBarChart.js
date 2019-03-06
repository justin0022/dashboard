import createHorizontalBarChart from './d3/createHorizontalBarChart'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const HorizontalBarChart = compose(
  withResponsiveness,
  createChartComponent
)(createHorizontalBarChart)

export default HorizontalBarChart
