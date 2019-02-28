import createScatterplot from './d3/createScatterplot'
import withResponsiveness from './hoc/withResponsiveness'
import createChartComponent from './hoc/createChartComponent'
import compose from '../util/compose'

const Scatterplot = compose(
  withResponsiveness,
  createChartComponent
)(createScatterplot)

export default Scatterplot
