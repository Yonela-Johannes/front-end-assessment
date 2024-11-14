import React from 'react'

type Props = {}

export default function VideoPlayer ({ vidSrc }) {
  return (
    <video id="video" height="100%" loop playsInline autoPlay muted>
      <source src={vidSrc} type="video/mp4" />
    </video>
  )
}

