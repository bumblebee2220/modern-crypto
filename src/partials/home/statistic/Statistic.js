import React from "react";
import Image from "next/image";
import { StyledStatistic } from "./Styled";
import data from "./_data";

function Statistic() {
	return (
		<StyledStatistic className="container">
			<div className="statistic">
				<div className="statistic-top">
					<Image
						className="img-eye"
						src="/media/home/eye.svg"
						alt="eye image"
						width={48}
						height={48}
					/>
					<h2 className="ttl">Nico NFT Marketplace Overview</h2>
				</div>
				<div className="statistic-bot">
					<ul className="list">
						{data.map((item, idx) => (
							<li className="item" key={idx}>
								<p className="sub">{item.sub}</p>
								<p className="quantity">{item.quantity}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</StyledStatistic>
	);
}

export default Statistic;
