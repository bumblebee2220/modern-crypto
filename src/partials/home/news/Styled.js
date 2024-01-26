import styled from "styled-components";

export const StyledNews = styled.div`
	.news {
		padding: 130px 0 130px 80px;
		display: flex;
		gap: 72px;

		.news-left {
			width: 34%;

			.ttl {
				width: 100%;
				color: #fff;
				font-size: 40px;
				font-style: normal;
				font-weight: 900;
				line-height: 130%; /* 52px */
				margin: 32px 0 24px;

				.ttl-modi {
					color: #1ee0e1;
					font-weight: 300;
					font-style: italic;
				}
			}

			.txt {
				font-size: 20px;
				font-style: normal;
				font-weight: 400;
				line-height: 150%; /* 30px */
				margin-bottom: 64px;
			}

			.btn-explore {
				padding: 12px 40px;
				border-radius: 8px;
				background: linear-gradient(
					104deg,
					#df1cff -25.59%,
					#ea0070 138%
				);
				box-shadow: 0px 9px 100px 0px rgba(208, 17, 204, 0.35);
				color: #fff;
				font-size: 20px;
				font-style: normal;
				font-weight: 700;
				line-height: 150%; /* 30px */

				&:hover {
					opacity: 0.8;
				}
			}
		}

		.news-right {
			display: flex;
			gap: 32px;

			.news-card {
				.img-card {
					border-radius: 24px;
					background: var(--Unnamed-Color, #fff);
				}

				.card-date {
					opacity: 0.8;
					font-size: 20px;
					font-style: normal;
					font-weight: 400;
					line-height: 150%; /* 30px */
					margin: 24px 0 17px;
				}

				.card-title {
					font-size: 28px;
					font-style: normal;
					font-weight: 600;
					line-height: 140%; /* 39.2px */
				}
			}
		}
	}
`;
