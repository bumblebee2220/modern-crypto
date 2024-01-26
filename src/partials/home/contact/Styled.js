import styled from "styled-components";

export const StyledContact = styled.div`
	.contact {
		padding-bottom: 130px;
		text-align: center;

		.ttl-wrap {
			position: relative;

			.ttl-1,
			.ttl-2 {
				text-align: center;
				font-size: 72px;
				font-style: normal;
				font-weight: 800;
				line-height: 130%; /* 93.6px */
			}

			.ttl-2 {
				position: absolute;
				color: #000;
				z-index: -1;
				text-shadow: 4px 4px 16px #1ee0e1;
				-webkit-text-stroke-width: 1.5;
				-webkit-text-stroke-color: #1ee0e1;
				top: 5px;
				right: 50%;
				transform: translateX(51%);
			}
		}

		.txt {
			width: 54%;
			font-size: 20px;
			font-style: normal;
			font-weight: 400;
			line-height: 150%; /* 30px */
			margin: 24px auto 48px;
		}

		.btn-explore {
			padding: 12px 40px;
			border-radius: 8px;
			background: linear-gradient(104deg, #df1cff -25.59%, #ea0070 138%);
			box-shadow: 0px 9px 100px 0px rgba(208, 17, 204, 0.35);
			color: #fff;
			font-size: 20px;
			font-style: normal;
			font-weight: 700;
			line-height: 150%; /* 30px */
			margin-top: 48px;

			&:hover {
				opacity: 0.8;
			}
		}

		.input-email {
			input {
				width: 716px;
				padding: 24px;
				border-radius: 16px;
				border: 1px solid #0d0d2d;
				background: #0d0d2d;
				color: rgba(255, 255, 255, 0.56);
				font-size: 22px;
				font-style: normal;
				font-weight: 400;
				line-height: 118.5%; /* 26.07px */
			}
		}
	}
`;
