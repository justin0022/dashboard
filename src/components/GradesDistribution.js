import createHistogram from './d3/createHistogram'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import createChartComponent from '../higherOrderComponents/createChartComponent'
import compose from '../util/compose'

const Histogram = createChartComponent(createHistogram)
