import styled from "styled-components";

export const StyledMainFooter = styled.div`
	.footer {
		padding-bottom: 66px;

		.footer-info {
			display: flex;
			gap: 192px;
			justify-content: center;

			.info-detail {
				width: 194px;

				.circle {
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0 auto 32px;
					width: 79px;
					height: 79px;
					border-radius: 50%;
					background: #1a124f;

					.center {
						width: 47px;
						height: 47px;
						border-radius: 50%;
						background: #100943;
					}
				}

				.infor-txt {
					text-align: center;
					font-size: 17px;
					font-style: normal;
					font-weight: 400;
					line-height: 118.5%; /* 23.7px */
				}
				.infor-txt + .infor-txt {
					margin-top: 12px;
				}
			}
		}

		.footer-social {
			margin: 65px auto;
			display: flex;
			gap: 16px;
			justify-content: center;
		}

		.footer-bot {
			display: flex;
			justify-content: space-between;
			border-top: solid 1px rgba(255, 255, 255, 0.17);
			padding-top: 65px;

			.copyright {
				font-size: 20px;
				font-style: normal;
				font-weight: 400;
				line-height: 150%; /* 30px */
				opacity: 0.8;
			}

			.list-link {
				display: flex;
				gap: 45px;

				.link {
					color: #fff;
					font-size: 20px;
					font-style: normal;
					font-weight: 400;
					line-height: 118.5%; /* 23.7px */
					opacity: 0.8;
				}
			}
		}
	}
`;
