import React from 'react'
import Image from 'next/image'
export const VideoSection = () => {
    return (
        <div className="vedioWrap">
        <div className="vimeo-wrapper"></div>
        <div className="loaders">
            {/* <img src="images/loader.gif" /> */}
            <Image
                src="/images/loader.gif"
                alt="loader"
                width={48}
                height={48}
            />
        </div>
        <a href="#" className="videobtn"><img src="images/videoicon.png" /></a>
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
