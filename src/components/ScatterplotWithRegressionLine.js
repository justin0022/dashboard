import createScatterplotWithRegressionLine from './d3/createScatterplotWithRegressionLine'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const ScatterplotWithRegressionLine = compose(
  withResponsiveness,
  createChartComponent
)(createScatterplotWithRegressionLine)

export default ScatterplotWithRegressionLine
