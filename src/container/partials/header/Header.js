import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledHeader } from "./Styled";
import data from "./_data";

function Header() {
	return (
		<StyledHeader>
			<div className="container">
				<div className="header">
					<div className="header__left">
						<Link className="logo" href="/">
							<Image
								src="/media/logo.png"
								width={80}
								height={33}
								alt="logo"
							/>
						</Link>
					</div>
					<div className="header__right">
						<ul className="list">
							{data.map((item) => (
								<li key={item.title} className="item">
									{item.title}
								</li>
							))}
						</ul>
					</div>
					<div className="btn-wrap">
						<button className="btn">Get in Touch</button>
					</div>
				</div>
			</div>
		</StyledHeader>
	);
}

Header.propTypes = {};

export default Header;
