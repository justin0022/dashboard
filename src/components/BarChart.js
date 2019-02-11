import createBarChart from './viz/createBarChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'

export default withResponsiveness(createChartComponent(createBarChart))
