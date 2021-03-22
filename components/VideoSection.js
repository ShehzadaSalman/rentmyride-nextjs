import React from 'react'
import Image from 'next/image'
import {useRef} from 'react'
// import VideoClip from '../public/bannerforweb.webm'


const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);

const VideoSection = () => {
    const videoEl = useRef(null);
    const videowrapper = useRef(null);
    const videoplaybutton = useRef(null);

 // play the video   
const playVideo = (e) => {
  e.stopPropagation();
   videowrapper.current.style.display = "block";
   videoplaybutton.current.style.visibility = "hidden"
   videoEl.current.play();
}

// stop the video 
const stopVideo = (e) => {
if(isVideoPlaying(videoEl.current) === true){
    console.log("play the video")
    videoEl.current.pause();
    videoplaybutton.current.style.visibility = "visible"
    videowrapper.current.style.display = "none";
}
else{
    playVideo(e)
} 

}



    return (
        <div onClick={e => stopVideo(e)} className="vedioWrap">     
        <div  ref ={videowrapper} className="vimeo-wrapper" style={{display: 'none'}}>
        <video  ref={videoEl} id="home-video-id" autoPlay="" loop="">
         <source src="https://srv-store5.gofile.io/download/ptPLoe/ee07dbbafc579bfa7c79c18b75af5278/bannerforweb.mov" type="video/mp4"/>
         </video>
        </div>
        {/* <div className="loaders">
            <Image
            src="/images/loader.gif"
            alt="loader"
            width={48}
            height={48}
            />
        </div> */}
        <span ref = {videoplaybutton} className="videobtn" onClick={e => playVideo(e)}>
            <Image src ="/images/videoicon.png" height="144" width="144" alt = "video player" />
        </span>
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 col-md-8">
                    <div className="applySec">
                        <div className="numbr">
                           <Image src ="/images/phone.png" width="34" height="35" alt="phone " /> 
                            <p className="ml-3">Got any questions? <span>(+971) 5555 05281</span></p>
                        </div>
                        <div className="btns">
                            <a href="#">Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default React.memo(VideoSection)