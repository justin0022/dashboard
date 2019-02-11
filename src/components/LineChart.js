import createLineChart from './viz/createLineChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'

export default withResponsiveness(createChartComponent(createLineChart))
