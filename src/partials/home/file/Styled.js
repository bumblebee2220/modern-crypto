import styled from "styled-components";

export const StyledFile = styled.div`
	.file {
		padding-bottom: 130px;

		.file-headline {
			width: fit-content;
			margin: 0 auto 24px;
			padding: 8px 16px;
			border-radius: 36px;
			background: linear-gradient(
				90deg,
				#fff -106.63%,
				#1ee0e1 -106.6%,
				rgba(24, 254, 255, 0) 84.92%
			);
			font-size: 20px;
			font-style: normal;
			font-weight: 700;
			line-height: 150%; /* 30px */
		}

		.ttl {
			width: 100%;
			color: #fff;
			text-align: center;
			font-size: 40px;
			font-style: normal;
			font-weight: 900;
			line-height: 130%; /* 52px */

			.ttl-modi {
				color: #1ee0e1;
				font-weight: 300;
				font-style: italic;
			}
		}

		.files-list {
			max-width: 1280px;
			margin: 64px auto 0;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 32px;

			.item {
				background-image: url("media/home/bg-item-file.svg");
				background-repeat: no-repeat;
				position: relative;
				padding: 55px 27px 50px 56px;

				.img-file {
					position: absolute;
					top: -18px;
					right: 25px;
				}

				.item-ttl {
					font-size: 22px;
					font-style: normal;
					font-weight: 600;
					line-height: 118.5%; /* 26.07px */
					margin-bottom: 24px;
				}

				.item-txt {
					font-size: 20px;
					font-style: normal;
					font-weight: 400;
					line-height: 150%; /* 30px */
				}
			}
		}
	}
`;
