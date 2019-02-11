import createGroupedBarChart from './viz/createGroupedBarChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'

export default withResponsiveness(createChartComponent(createGroupedBarChart))
