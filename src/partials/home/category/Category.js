import React from "react";
import Image from "next/image";
import { StyledCategory } from "./Styled";
import data from "./_data";

function Category() {
	return (
		<StyledCategory className="container">
			<div className="category">
				<h2 className="ttl">
					<span className="ttl-modi">Browse by</span> Category
				</h2>
				<p className="txt">
					Set a secondary sales fee and add social links, a
					description, profile and banner images, and a description.
				</p>
				<ul className="categorys-list">
					{data.map((item, idx) => (
						<li className="item" key={idx}>
							<Image
								className={item.class}
								src={item.src_img}
								alt="wallet image"
								fill
								priority
							/>
						</li>
					))}
				</ul>
				<button className="btn-explore">Explore NFTs Category</button>
			</div>
		</StyledCategory>
	);
}

export default Category;
