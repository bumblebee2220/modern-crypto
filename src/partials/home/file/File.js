import React from "react";
import Image from "next/image";
import { StyledFile } from "./Styled";
import data from "./_data";

function File() {
	return (
		<StyledFile className="container">
			<div className="file">
				<p className="file-headline">UNIQUE FILES</p>
				<h2 className="ttl">
					How to
					<span className="ttl-modi">Create & Sell</span> Your NFT
					Files.
				</h2>
				<ul className="files-list">
					{data.map((item, idx) => (
						<li className="item" key={idx}>
							<Image
								className="img-file"
								src={item.src_img}
								alt="wallet image"
								width={72}
								height={72}
							/>
							<p className="item-ttl">{item.title}</p>
							<p className="item-txt">{item.desc}</p>
						</li>
					))}
				</ul>
			</div>
		</StyledFile>
	);
}

export default File;
