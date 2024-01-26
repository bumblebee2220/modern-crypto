import styled from "styled-components";

export const StyledNft = styled.div`
	.nft {
		padding: 130px 0;
		text-align: center;

		.ttl {
			font-size: 40px;
			font-style: normal;
			font-weight: 900;
			line-height: 130%;
			text-align: center;
			margin-bottom: 32px;

			.ttl-modi {
				color: #1ee0e1;
				font-weight: 300;
				font-style: italic;
			}
		}

		.nft-header {
			display: flex;
			gap: 81px;
			justify-content: center;

			.header-tab {
				position: relative;
				width: 162px;
				height: 49px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;

				p {
					font-size: 22px;
					font-style: normal;
					font-weight: 500;
					line-height: 118.5%; /* 26.07px */
				}

				.img-tab-active {
					display: none;
					position: absolute;
					top: 0;
					left: 0;
					z-index: -1;
				}

				&.active {
					.img-tab-active {
						display: block;
					}
				}
			}
		}

		.list {
			padding: 64px 0;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 3.2rem;
			max-width: 1280px;
			margin: 0 auto;

			.item {
				padding: 32px;
				position: relative;
				width: 405px;
				border-radius: 16px;
				background: rgba(255, 255, 255, 0.03);

				&:hover {
				}

				.heart-wrap {
					position: absolute;
					top: 48px;
					right: 48px;
					padding: 12px 12px 10px 12px;
					border-radius: 8px;
					background: rgba(255, 255, 255, 0.09);
					cursor: pointer;

					.img-heart-picked,
					.img-heart-unpick {
						display: none;

						&.active {
							display: block;
						}
					}
				}

				.img-nft {
					height: 425px !important;
					position: initial !important;
				}

				.nft-info {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 32px 0 8px;

					.nft-name {
						font-size: 22px;
						font-style: normal;
						font-weight: 600;
						line-height: 118.5%; /* 26.07px */
					}

					.nft-price {
						display: flex;
						align-items: center;

						span {
							font-size: 22px;
							font-style: normal;
							font-weight: 600;
							line-height: 118.5%; /* 26.07px */
							margin-left: 7px;
						}
					}
				}

				.nft-star {
					display: flex;
					gap: 8px;
				}

				.btn-buy {
					width: 100%;
					margin-top: 32px;
					/* display: flex; */
					display: none;
					padding: 12px 40px;
					color: #fff;
					justify-content: center;
					align-items: center;
					font-size: 20px;
					font-style: normal;
					font-weight: 700;
					line-height: 150%; /* 30px */
					border-radius: 8px;
					background: linear-gradient(
						104deg,
						#df1cff -25.59%,
						#ea0070 138%
					);
					box-shadow: 0px 9px 100px 0px rgba(208, 17, 204, 0.35);
				}
			}
		}

		.btn-explore {
			padding: 12px 40px;
			border-radius: 8px;
			border: 1.5px solid #e50aa7;
			background: rgba(255, 255, 255, 0.05);
			box-shadow: 0px 16px 80px 0px rgba(208, 17, 204, 0.15);
			color: #fff;
			font-size: 20px;
			font-style: normal;
			font-weight: 700;
			line-height: 150%; /* 30px */

			&:hover {
				opacity: 0.9;
			}
		}
	}
`;
