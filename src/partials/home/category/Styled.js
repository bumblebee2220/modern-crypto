import styled from "styled-components";

export const StyledCategory = styled.div`
	.category {
		padding-bottom: 130px;
		text-align: center;

		.ttl {
			width: 100%;
			color: #fff;
			text-align: center;
			font-size: 40px;
			font-style: normal;
			font-weight: 900;
			line-height: 130%; /* 52px */
			margin-bottom: 24px;

			.ttl-modi {
				color: #1ee0e1;
				font-weight: 300;
				font-style: italic;
			}
		}

		.txt {
			width: 46%;
			margin: 0 auto;
			text-align: center;
			font-size: 20px;
			font-style: normal;
			font-weight: 400;
			line-height: 150%; /* 30px */
		}

		.categorys-list {
			max-width: 1280px;
			margin: 64px auto;
			display: grid;
			grid-template-columns: 33% 66%;
			gap: 28px;

			.item {
				.img-category-large,
				.img-category-small {
					height: auto !important;
					position: initial !important;
				}
			}

			/* .item:nth-child(3) {
				grid-column: 1 / 2;
			} */
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
				opacity: 0.8;
			}
		}
	}
`;
