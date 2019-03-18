/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import LineChart from '../../components/LineChart'

const lineChartData = Object.freeze(
  [
    { 'label': 0, 'data': 0 },
    { 'label': 1, 'data': 1 },
    { 'label': 2, 'data': 2 },
    { 'label': 3, 'data': 2 },
    { 'label': 4, 'data': 3 }
  ]
)

describe('LineChart', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <LineChart data={lineChartData} feedbackId={'lineChartId'} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
