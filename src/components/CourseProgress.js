import createProgressChart from './d3/createProgressChart'
import compose from '../util/compose'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'

// probably compose two lines here, one for current, another for max possible

const CourseProgress = compose(
  withResponsiveness,
  createChartComponent
)(createProgressChart)

export default CourseProgress
