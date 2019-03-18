import React from 'react'
import { renderToString } from 'react-dom/server'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import LineChart from '../components/LineChart'
import Paper from '@material-ui/core/Paper'
import MapChart from '../components/MapChart'
import createChartCard from '../components/hoc/createChartCard'
import BarChart from '../components/BarChart'
import HorizontalBarChart from '../components/HorizontalBarChart'
import GroupedBarChart from '../components/GroupedBarChart'
import createToolTip from '../util/createToolTip'
import EmojiFeedback from '../components/EmojiFeedback'
import { barChartURL, groupedBarChartURL, lineChartURL, mapURL, sankeyURL, histogramURL, heatmapURL, scatterplotURL, donutChartURL } from '../data/gistURLs'
import Sankey from '../components/Sankey'
import Histogram from '../components/Histogram'
import Scatterplot from '../components/Scatterplot'
import DonutChart from '../components/DonutChart'
import ScatterplotWithRegressionLine from '../components/ScatterplotWithRegressionLine'
import useFetch from '../hooks/useFetch'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 8
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  feedback: {
    width: '310px',
    height: '350px',
    padding: '12px'
  }
})

const LineChartCard = createChartCard(LineChart, EmojiFeedback)
const BarChartCard = createChartCard(BarChart, EmojiFeedback)
const HorizontalBarChartCard = createChartCard(HorizontalBarChart)
const GroupedBarChartCard = createChartCard(GroupedBarChart, EmojiFeedback)
const MapChartCard = createChartCard(MapChart)
const SankeyCard = createChartCard(Sankey)
const HistogramCard = createChartCard(Histogram)
const ScatterplotCard = createChartCard(Scatterplot)
const DonutChartCard = createChartCard(DonutChart)
const ScatterPlotWithRegressionLineCard = createChartCard(ScatterplotWithRegressionLine)

function Home (props) {
  const { classes } = props

  const [lineChartLoaded, lineChartData] = useFetch(lineChartURL)
  const [groupedBarChartLoaded, groupedBarChartData] = useFetch(groupedBarChartURL)
  const [barChartLoaded, barChartData] = useFetch(barChartURL)
  const [mapLoaded, mapChartData] = useFetch(mapURL)
  const [heatmapLoaded, heatmapData] = useFetch(heatmapURL)
  const [sankeyLoaded, sankeyData] = useFetch(sankeyURL)
  const [histogramLoaded, histogramData] = useFetch(histogramURL)
  const [scatterplotLoaded, scatterplotData] = useFetch(scatterplotURL)
  const [donutLoaded, donutData] = useFetch(donutChartURL)

  const mapData = { mapChartData, heatmapData }

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <ScatterPlotWithRegressionLineCard
          data={scatterplotData}
          classes={classes}
          title={'Scatterplot with Regression'}
          loaded={scatterplotLoaded} />
        <DonutChartCard
          data={donutData}
          classes={classes}
          loaded={donutLoaded}
          title={'Donut'} />
        <ScatterplotCard
          data={scatterplotData}
          classes={classes}
          xAxisLabel={'Grade %'}
          yAxisLabel={'Grade %'}
          loaded={scatterplotLoaded}
          title={'Scatterplot'} />
        <LineChartCard
          data={lineChartData}
          feedbackId={'lineChartId'}
          classes={classes}
          loaded={lineChartLoaded}
          title={'Line Chart'} />
        <BarChartCard
          data={barChartData}
          feedbackId={'barChart'}
          classes={classes}
          loaded={barChartLoaded}
          title={'Vertical Bar Chart'} />
        <HorizontalBarChartCard
          data={barChartData}
          classes={classes}
          loaded={barChartLoaded}
          title={'Horizontal Bar Chart'} />
        <GroupedBarChartCard
          data={groupedBarChartData}
          feedbackId={'groupedBarChart'}
          classes={classes}
          loaded={groupedBarChartLoaded}
          title={'Grouped Bar Chart'} />
        <MapChartCard
          data={mapData}
          classes={classes}
          tip={createToolTip(d => renderToString(
            <Paper className={classes.paper}>
              {d.properties.name}
            </Paper>
          ))}
          loaded={mapLoaded && heatmapLoaded}
          title={'Map'} />
        <SankeyCard
          data={sankeyData}
          classes={classes}
          loaded={sankeyLoaded}
          title={'Sankey'} />
        <HistogramCard
          data={histogramData}
          classes={classes}
          loaded={histogramLoaded}
          title={'Histogram'} />
      </Grid>
    </div >
  )
}

export default withStyles(styles)(Home)
