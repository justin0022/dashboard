import createHistogram from './d3/createHistogram'
import withResponsiveness from '../components/hoc/withResponsiveness'
import createChartComponent from '../components/hoc/createChartComponent'
import compose from '../util/compose'

const Histogram = createChartComponent(createHistogram)
