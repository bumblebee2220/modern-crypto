import React from "react";
import Image from "next/image";
import { StyledNews } from "./Styled";

function News() {
	return (
		<StyledNews>
			<div className="news">
				<div className="news-left">
					<Image
						className="img-icon"
						src="/media/home/newspaper.svg"
						alt="icon"
						width={78}
						height={64}
					/>
					<h2 className="ttl">
						<span className="ttl-modi">Trending</span>
						{` `}
						Crypto Market News
					</h2>
					<p className="txt">
						Set a secondary sales fee and add social links, a
						description, profile and banner images, and a
						description.
					</p>
					<button className="btn-explore">Explore NFTs</button>
				</div>
				<div className="news-right">
					<div className="news-card">
						<Image
							className="img-card"
							src="/media/home/img-card1.svg"
							alt="icon"
							width={445}
							height={285}
						/>
						<p className="card-date">April 18, 2022</p>
						<p className="card-title">
							Few Reasons to Sell NFTs on Nico
						</p>
					</div>
					<div className="news-card">
						<Image
							className="img-card"
							src="/media/home/img-card1.svg"
							alt="icon"
							width={445}
							height={285}
						/>
						<p className="card-date">April 18, 2022</p>
						<p className="card-title">
							Few Reasons to Sell NFTs on Nico
						</p>
					</div>
				</div>
			</div>
		</StyledNews>
	);
}

export default News;
