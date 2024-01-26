import styled from "styled-components";

export const StyledBanner = styled.div`
	position: relative;
	.bg {
		z-index: -1;
		width: 952.459px;
		height: 855.857px;
		transform: rotate(-45deg);
		flex-shrink: 0;
		position: absolute;
		opacity: 0.15;
		background: conic-gradient(
			from 180deg at 50% 50%,
			#d9d9d9 0deg,
			#297fff 0.035999999090563506deg,
			#bf38ff 78.75deg,
			#cf68ff 187.49999284744263deg,
			#28cbff 268.1250071525574deg,
			#e1a1ff 360deg
		);
		filter: blur(250px);
	}
	.hero {
		padding-top: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left {
			position: relative;
			width: 49%;

			.hero-ttl {
				font-size: 55.737px;
				font-style: normal;
				font-weight: 900;
				line-height: 130%;

				.ttl-modi {
					color: #1ee0e1;
				}
			}

			.hero-txt {
				width: 78%;
				font-size: 20px;
				font-style: normal;
				font-weight: 400;
				line-height: 150%; /* 30px */
				margin: 32px 0 64px;
			}

			.hero-btn {
				color: #fff;
				padding: 12px 40px;
				border-radius: 8px;
				background: linear-gradient(
					104deg,
					#df1cff -25.59%,
					#ea0070 138%
				);
				box-shadow: 0px 9px 100px 0px rgba(208, 17, 204, 0.35);

				&:hover {
					opacity: 0.8;
				}
			}

			.img-spring {
				position: absolute;
				bottom: 73.5px;
				right: 18.5px;
			}
		}

		.right {
			position: relative;

			.img-man {
				/* position: absolute; */
				border-radius: 50%;
			}

			.img-union {
				position: absolute;
				right: 0;
				fill: linear-gradient(
					100deg,
					rgba(70, 47, 255, 0.08) 7.93%,
					rgba(71, 48, 255, 0) 107.6%
				);
				stroke-width: 3px;
				stroke: #4484ff;
			}

			.img-name {
				position: absolute;
				bottom: -62px;
				display: flex;
				width: 177px;
				height: 176px;
				padding: 32px;
				justify-content: center;
				align-items: center;
				color: #fff;
				text-align: center;
				font-size: 24px;
				font-style: normal;
				font-weight: 700;
				line-height: 118.5%; /* 28.44px */
				border-radius: 142px;
				border: 1px solid #df1cff;
				background: #07003e;
			}
		}
	}
`;
