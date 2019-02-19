import createHistogram from './d3/createHistogram'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const Histogram = compose(
  withResponsiveness,
  createChartComponent
)(createHistogram)

export default Histogram
