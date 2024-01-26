import styled from "styled-components";

export const StyledHeader = styled.div`
	z-index: 999;
	width: 100%;

	.header {
		padding: 37px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__right {
			.list {
				display: flex;
				gap: 45px;

				.item {
					color: rgba(255, 255, 255, 0.43);
					font-size: 20px;
					font-style: normal;
					font-weight: 400;
					line-height: 118.5%;

					&:hover {
						cursor: pointer;
						color: #fff;
					}
				}
			}
		}

		.btn-wrap {
			.btn {
				color: #fff;
				padding: 12px 40px;
				border-radius: 8px;
				border: 1.5px solid #e50aa7;
				background: rgba(255, 255, 255, 0.05);
				box-shadow: 0px 16px 80px 0px rgba(208, 17, 204, 0.15);
				font-size: 20px;
				font-style: normal;
				font-weight: 700;
				line-height: 150%;

				&:hover {
					opacity: 0.7;
					cursor: pointer;
				}
			}
		}
	}
`;
