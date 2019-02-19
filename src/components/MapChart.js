import createMapChart from './d3/createMapChart'
import withResponsiveness from '../components/hoc/withResponsiveness'
import createChartComponent from '../components/hoc/createChartComponent'
import compose from '../util/compose'

export default compose(
  withResponsiveness,
  createChartComponent
)(createMapChart)
