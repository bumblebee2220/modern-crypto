import Image from "next/image";
import React from "react";
import { StyledMainFooter } from "./Styled";
import PropTypes from "prop-types";
import Link from "next/link";
import data from "./_data";

function Footer() {
	return (
		<StyledMainFooter className="container">
			<div className="footer">
				<div className="footer-info">
					{data.info.map((item, idx) => (
						<div className="info-detail" key={idx}>
							<div className="circle">
								<div className="center" />
							</div>
							<p className="infor-txt">{item.info_1}</p>
							<p className="infor-txt">{item.info_2}</p>
						</div>
					))}
				</div>
				<div className="footer-social">
					{data.socials.map((item, idx) => (
						<Image
							key={idx}
							className="img-file"
							src={item}
							alt="footer image"
							width={48}
							height={48}
						/>
					))}
				</div>
				<div className="footer-bot">
					<p className="copyright">
						Copyright © 2022 Nazmul Shanto. All Rights Reserved
					</p>
					<div className="list-link">
						{data.links.map((item, idx) => (
							<Link href="#" className="link" key={idx}>
								{item}
							</Link>
						))}
					</div>
				</div>
			</div>
		</StyledMainFooter>
	);
}

export default Footer;
