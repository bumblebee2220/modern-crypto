import styled from "styled-components";

export const StyledStatistic = styled.div`
	.statistic {
		padding-top: 64px;

		&-top {
			display: flex;
			gap: 16px;
			margin-bottom: 32px;

			.ttl {
				font-size: 32px;
				font-style: normal;
				font-weight: 700;
				line-height: 118.5%; /* 37.92px */
			}
		}

		&-bot {
			.list {
				display: flex;
				gap: 64px;

				.item {
					.sub {
						font-size: 20px;
						font-style: normal;
						font-weight: 400;
						line-height: 150%; /* 30px */
						margin-bottom: 16px;
					}

					.quantity {
						font-size: 32px;
						font-style: normal;
						font-weight: 700;
						line-height: 118.5%; /* 37.92px */
					}
				}
			}
		}
	}
`;
