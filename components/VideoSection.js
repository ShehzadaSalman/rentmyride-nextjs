import React from 'react'
import Image from 'next/image'
import {useRef} from 'react'
const VideoSection = () => {
    const videoEl = useRef(null);

 // play the video   
const playVideo = () => {

   console.log(videoEl)
   videoEl.current.play();
   alert("play the video")

}



    return (
        <div className="vedioWrap">
              <video  ref={videoEl} id="home-video-id" autoPlay="" muted="" loop="">
                  <source src="/Assets/video/bannerforweb.mov" type="video/mp4"/></video>
        <div className="vimeo-wrapper">
          
        </div>
        <div className="loaders">
            {/* <img src="images/loader.gif" /> */}
            <Image
            src="/images/loader.gif"
            alt="loader"
            width={48}
            height={48}
            />
        </div>
        <a className="videobtn" onClick={playVideo} >
            {/* <img src="" /> */}
            <Image src ="/images/videoicon.png" height="144" width="144" alt = "video player" />
        </a>
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 col-md-8">
                    <div className="applySec">
                        <div className="numbr">
                            <img src="images/phone.png" />
                            <p>Got any questions? <span>(+971) 5555 05281</span></p>
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