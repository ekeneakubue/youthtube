import React from 'react';
import './playvideo.css';
import sab1 from '../../assets/videos/sab1.mp4'
import { AiTwotoneLike, AiTwotoneDislike} from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";


export const PlayVideo = ({videoId}) => {
  return (
    <div className='play-video'>
        {/* <video src={sab1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}? autoplay = 1 `} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encripted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen></iframe>
        <h3>Investor Ends Up in The Barracks</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div className='you-like'>
                <span><AiTwotoneLike /> 125</span>
                <span><AiTwotoneDislike /> 2</span>
                <span><FaShare /> Share</span>
                <span><MdSaveAlt /> Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src="" alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Sabinus making the whole nation laugh</p>
                <p>Subscribe to see more of our videos</p>
                <hr />
                <h4>130 Comments</h4>
            </div>
        </div>
    </div>
  )
}
