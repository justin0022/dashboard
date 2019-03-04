import createDonutChart from './d3/createDonutChart'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const DonutChart = compose(
  withResponsiveness,
  createChartComponent
)(createDonutChart)

export default DonutChart
