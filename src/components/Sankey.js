import createSankeyDiagram from './viz/createSankeyDiagram'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'

export default withResponsiveness(createChartComponent(createSankeyDiagram))
