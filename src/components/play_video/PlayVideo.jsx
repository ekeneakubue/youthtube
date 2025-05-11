import React, { useEffect, useState } from 'react';
import './playvideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import { BiDislike } from "react-icons/bi";
import user_icon from '../../assets/user.png';
import { AiTwotoneLike, AiTwotoneDislike} from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { data, useParams } from 'react-router-dom';


export const PlayVideo = () => {

    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () =>{
        //fetching video data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]))
    }

    const fetchOtherData = async () =>{
        // fething channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

        // fething comment data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=30&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }

    useEffect(()=>{
        fetchVideoData();
    },[videoId])

    useEffect(()=>{
        fetchOtherData();
    },[apiData])


  return (
    <div className='play-video'>
        {/* <video src={sab1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1 `} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encripted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} Views &bull; {moment(apiData?.snippet?.publishedAt).fromNow()} </p>
            <div className='you-like'>
                <span><AiTwotoneLike /> {apiData?value_converter(apiData.statistics.likeCount):155}</span>
                <span><AiTwotoneDislike /> </span>
                <span><FaShare /> Share</span>
                <span><MdSaveAlt /> Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle: ""}</p>
                <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
            </div>
            <button>Subscribe</button>            
        </div>
        <div className="vid-description">
            <p>{apiData?apiData.snippet.description.slice(0, 250):"Description Here"}</p>
            <p>Subscribe to see more of our videos</p>
            <hr />
            <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comments</h4>
            
            {commentData.map((item, index)=>{
                return(
                    <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                            <p>
                                {item.snippet.topLevelComment.snippet.textDisplay}
                            </p>
                            <div className="comment-action">
                                <AiTwotoneLike />
                                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <BiDislike />
                            </div>
                        </div>
                    </div> 
                )
            })}
                       
        </div> 
    </div>
  )
}
