import emojiFeedback from '@justin0022/emoji-feedback'
import React, { useEffect, memo } from 'react'

const EmojiFeedback = memo(props => {
  const { endpoints, id, options } = props
  useEffect(() => {
    const feedback = emojiFeedback()
    feedback.init(id, endpoints, options)
  })
  return (
    <div id={id} />
  )
})

export default EmojiFeedback
