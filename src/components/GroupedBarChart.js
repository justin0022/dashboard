import createGroupedBarChart from './d3/createGroupedBarChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'
import compose from '../util/compose'

export default compose(
  withResponsiveness,
  createChartComponent
)(createGroupedBarChart)
