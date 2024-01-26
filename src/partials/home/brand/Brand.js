import React from "react";
import Image from "next/image";
import { StyledBrand } from "./Styled";
import data from "./_data";

function Brand() {
	return (
		<StyledBrand className="container">
			<div className="brand">
				<ul className="brands-list">
					{data.map((item, idx) => (
						<li className="item" key={idx}>
							<Image
								className="img-brand"
								src={item.src_img}
								alt="wallet image"
								width={item.width}
								height={item.height}
							/>
						</li>
					))}
				</ul>
			</div>
		</StyledBrand>
	);
}

export default Brand;
