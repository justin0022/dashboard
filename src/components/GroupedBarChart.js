import createGroupedBarChart from './d3/createGroupedBarChart'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const GroupedBarChart = compose(
  withResponsiveness,
  createChartComponent
)(createGroupedBarChart)

export default GroupedBarChart
