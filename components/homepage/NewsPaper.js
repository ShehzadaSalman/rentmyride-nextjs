import React from 'react'
import Image from 'next/image'

 const NewsPaper = () => {
    return (
		<div className="newspaprs">
			<div className="container">
				<div className="row">
					<div className="col-6 col-sm-3 col-md-3">
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
					<div className="col-6 col-sm-3 col-md-3">
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
					<div className="col-6 col-sm-3 col-md-3">
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
					<div className="col-6 col-sm-3 col-md-3">
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
					</div>
				</div>
			</div>
		</div>

    )
}


export default NewsPaper