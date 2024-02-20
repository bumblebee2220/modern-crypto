import React from "react";
import Image from "next/image";
import { StyledNft } from "./Styled";
import data from "./_data";
import NFTCard from "./nft-card";

function Nft() {
	return (
		<StyledNft className="container">
			<div className="nft">
				<h2 className="ttl">
					<span className="ttl-modi">Most Popular</span> NFTs
				</h2>
				<div className="nft-header">
					<div className="header-tab active">
						<p>All</p>
						<Image
							className="img-tab-active"
							src="/media/home/tab-active.svg"
							alt="tab-active image"
							width={162}
							height={49}
						/>
					</div>
					<div className="header-tab">
						<p>Hape prime</p>
						<Image
							className="img-tab-active"
							src="/media/home/tab-active.svg"
							alt="tab-active image"
							width={162}
							height={49}
						/>
					</div>
					<div className="header-tab">
						<p>Lazy Lions</p>
						<Image
							className="img-tab-active"
							src="/media/home/tab-active.svg"
							alt="tab-active image"
							width={162}
							height={49}
						/>
					</div>
					<div className="header-tab">
						<p>Peaceful ape</p>
						<Image
							className="img-tab-active"
							src="/media/home/tab-active.svg"
							alt="tab-active image"
							width={162}
							height={49}
						/>
					</div>
				</div>
				<ul className="list">
					{data.map((item, idx) => (
						<li key={idx}>
							<NFTCard item={item}  />
						</li>
					))}
				</ul>
				<button className="btn-explore">Explore All NFTs</button>
			</div>
		</StyledNft>
	);
}

export default Nft;
