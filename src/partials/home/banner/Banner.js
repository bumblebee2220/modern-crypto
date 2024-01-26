import React from "react";
import Image from "next/image";
import { StyledBanner } from "./Styled";
import Link from "next/link";

function Banner() {
	return (
		<StyledBanner className="container">
			<div className="bg"></div>
			<div className="hero">
				<div className="left">
					<h1 className="hero-ttl">
						Buy, Create & Sell{" "}
						<span className="ttl-modi">Unique NFTs </span> File.
					</h1>
					<p className="hero-txt">
						NFTs are used for digital art and collectibles, GameFi
						projects, metaverses, and more.
					</p>
					<Link className="hero-btn" href="">
						Explore NFTs
					</Link>
					<Image
						className="img-spring"
						src="/media/home/spring.svg"
						alt="spring image"
						width={84}
						height={84}
					/>
				</div>
				<div className="right">
					<div className="image-wrapper">
						<Image
							className="img-man"
							priority
							src="/media/home/man.svg"
							alt="hero image"
							width={503}
							height={504}
						/>
						{/* <Image
							className="img-union"
							priority
							src="/media/home/union.png"
							alt="hero image"
							width={600}
							height={857}
						/> */}
						<p className="img-name">Cyber Samurai #177</p>
					</div>
				</div>
			</div>
		</StyledBanner>
	);
}

export default Banner;
