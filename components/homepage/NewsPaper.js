import React from 'react'
import Image from 'next/image'

 const NewsPaper = () => {
    return (
		<div className="newspaprs">
			<div className="container d-flex" style={{
							justifyContent: 'space-between',
							flexWrap: 'wrap'
						}}>
        
                      <div className="news-image mb-2 p-2 d-flex flex-column justify-content-center">
					  <Image
						src="/images/gulf_news_png.png"
						alt="Picture of the author"
						width={200}
						height={100}
						layout="intrinsic"
						/>
					  </div>

					  <div className="news-image mb-2 p-2  d-flex flex-column justify-content-center">
					  <Image
						src="/images/the_national_png.png"
						alt="Picture of the author"
						width={200}
						height={90}
						layout="intrinsic"
						/>	
					  </div>
                     
					 <div className="news-image mb-2  p-2 d-flex flex-column justify-content-center">
					  <Image
					src="/images/time_out_png.png"
					alt="Picture of the author"
					width={200}
					height={90}
					layout="intrinsic"
					/>
					</div>


					  <div className="news-image mb-2 p-2  d-flex flex-column justify-content-center">
					<Image
					src="/images/ahlan.jpg"
					alt="Picture of the author"
					width={200}
					height={100}
					layout="intrinsic"
					/>
					  </div>

				<div className="d-flex">
					{/* <div className="">
						<div className="newss border">
							<a href="#">
							    <Image
								src="/images/gulf_news_png.png"
								alt="Picture of the author"
								width={260}
								height={120}
							    />	
							</a>
						</div>
					</div>
					<div className="">
						<div className="newss border">
							<a href="#">
							 <Image
								src="/images/the_national_png.png"
								alt="Picture of the author"
								width={270}
								height={120}
							    />	
							</a>
						</div>
					</div>
					<div className="">
						<div className="newss">
							<a href="#">
								<Image
								src="/images/time_out_png.png"
								alt="Picture of the author"
								width={270}
								height={120}
							    />
							
							</a>
						</div>
					</div>
					<div className="">
						<div className="newss">
							<a href="#">
								<Image
								src="/images/ahlan.jpg"
								alt="Picture of the author"
								width={270}
								height={120}
							    />
						
							</a>
						</div>
					</div> */}
				</div>
			</div>
			<style>
				{`
				 .news-image{
					 border: solid 1px red;
                     filter:grayscale(100%);
				  }
				  .news-image:hover{
					  filter: none;
				  }

				`}
			</style>
		</div>

    )
}


export default NewsPaper