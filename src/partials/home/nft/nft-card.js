import React, { useState } from "react";
import Image from "next/image";

function NFTCard({ item }) {
	const FIVE_STAR = [1, 2, 3, 4, 5];
	const [selectHeart, setSelectHeart] = useState(false);

	return (
		<div className="item">
			<div
				className="heart-wrap"
				onClick={() => {
					setSelectHeart(!selectHeart);
				}}
			>
				<Image
					className={`img-heart-unpick ${
						selectHeart ? "" : "active"
					}`}
					src="/media/home/heart-grey.svg"
					alt="heart image"
					width={24}
					height={24}
				/>
				<Image
					className={`img-heart-picked ${
						selectHeart ? "active" : ""
					}`}
					src="/media/home/heart-red.svg"
					alt="heart image"
					width={24}
					height={24}
				/>
			</div>
			<Image
				className="img-nft"
				src={item.src_img}
				alt="nft image"
				fill
				priority
			/>
			<div className="nft-info">
				<p className="nft-name">{item.name}</p>
				<div className="nft-price">
					<Image
						src="/media/home/eth.svg"
						alt="eth image"
						width={32}
						height={32}
					/>
					<span>{item.vote}</span>
				</div>
			</div>
			<div className="nft-star">
				{FIVE_STAR.map((_, index) => (
					<Image
						width={18}
						height={18}
						key={index}
						className="star"
						src="/media/home/star-picked.svg"
						alt="star"
					/>
				))}
			</div>
			<button className="btn-buy">Buy Product</button>
		</div>
	);
}

export default NFTCard;
