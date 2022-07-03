import styled from "@emotion/styled";

const GameSettingContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	& > div.input-container {
		& > * {
			margin: 10px 0;
		}
		span {
			font-size: 12px;
		}
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		form {
			width: 80%;
			input {
				width: 100%;
				padding: 0.8rem;
				border: 2px solid #2f2c45;
				background: #272530;
				border-radius: 5px;
				font-size: 18px;
				outline: none;
				transition: all 0.3s;
				color: #fff;
			}
			& > .input-box > {
				display: flex;
			}
		}
		button {
			width: 80%;
			border: none;
			border-radius: 5px;
			padding: 10px 0;
			background: #272530;
			color: #fff;
			cursor: pointer;
		}
	}
	& > div.keyword-container {
		display: flex;
		flex: 1;
		ul {
			display: flex;
			flex: 1;
			flex-direction: column;
			li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 5px 0;
				font-size: 16px;
				background: #272530;
				padding: 5px 5px 5px 15px;
				border-radius: 5px;
				width: 80%;
				list-style: none;
				color: white;

				button {
					cursor: pointer;
					border: none;
					background: #272530;
					color: white;
				}
			}
		}
	}
`;

export { GameSettingContainer };
