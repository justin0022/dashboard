import createHistogram from './d3/createHistogram'
import createLine from './d3/createLine'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const GradeDistribution = compose(

)

export default compose(
  withResponsiveness,
  createChartComponent
)(createHistogram)
