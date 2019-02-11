import createHistogram from './viz/createHistogram'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'

export default withResponsiveness(createChartComponent(createHistogram))
