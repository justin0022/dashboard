import emojiFeedback from '@justin0022/emoji-feedback'
import withPopover from '../higherOrderComponents/withPopover'
import React, { useEffect, memo } from 'react'

const EmojiFeedback = memo(props => {
  const {
    endpoints,
    id,
    options,
    style
  } = props

  useEffect(() => {
    const feedback = emojiFeedback()
    feedback.init(id, endpoints, options)
  })

  return (
    <div id={id} className={style} />
  )
})

export default withPopover(EmojiFeedback)
