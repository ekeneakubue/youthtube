import React from 'react'
import './video.css'
import { PlayVideo } from '../../components/play_video/PlayVideo'
import { Recommended } from '../../components/recommended/Recommended'
import { useParams } from 'react-router-dom'

export const Video = () => {
  const {videoId, categoryId} = useParams();
  return (
    <div className='play-container'>
        <PlayVideo videoId={videoId} />
        <Recommended />
    </div>
  )
}
