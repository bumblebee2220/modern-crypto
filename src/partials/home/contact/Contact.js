import React from "react";
import { StyledContact } from "./Styled";

function Contact() {
	return (
		<StyledContact className="container">
			<div className="contact">
				<div className="ttl-wrap">
					<h2 className="ttl-1">Get in Touch</h2>
					<h2 className="ttl-2">Get in Touch</h2>
				</div>
				<p className="txt">
					Set a secondary sales fee and add social links, a
					description, profile and banner images, and a description.
				</p>
				<div className="input-email">
					<input type="text" placeholder="Enter your email address" />
				</div>
				<button className="btn-explore">Contact Us</button>
			</div>
		</StyledContact>
	);
}

export default Contact;
