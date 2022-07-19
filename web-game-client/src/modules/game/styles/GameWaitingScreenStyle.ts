import styled from "@emotion/styled";

export const GameWaitingContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	padding: 4%;

	.setting-section {
		width: 100%;
		// padding: 10px;
		margin-bottom: 2%;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #f3f3f3;

		& > * {
			margin: 10px 0;
		}
		button.game-start_button {
			width: 50%;
			height: 20%;
			border: none;
			border-radius: 12px;
			padding: 10px 0;
			background: #272530;
			color: #fff;
			cursor: pointer;
			font-size: 1.1rem;
			margin-bottom: 3%;
		}
		section.number-input-shake-button-section {
			// background: green;
			width: 100%;
			display: flex;
			// justify-content: space-between;
			justify-content: center;
			align-items: center;

			div.game-times-div {
				display: flex;
				// font-size: 20px;
				font-size: 1.1rem;
				margin-right: 10px;
			}

			form.set-max-game_form {
				width: 20%;
				margin-right: 8%;
				input::-webkit-outer-spin-button,
				input::-webkit-inner-spin-button {
					-webkit-appearance: none;
				}
				& > input {
					-webkit-appearance: none;
					width: 100%;
					height: 2em;
					display: flex;
					flex: 9;
					padding: 0.8rem;
					border: 2px solid #2f2c45;
					border-radius: 5px;
					font-size: 18px;
					outline: none;
					text-align: center;
				}
				& > label {
					flex: 1;
					display: flex;
				}
			}

			button.shake-button {
				background: #fff;
				color: #272530;
				cursor: pointer;
				border: 2px solid #2f2c45;

				border-radius: 12px;
				width: 15%;
				height: 100%;
				box-shadow: 5px 5px 5px #bdbdbd;
				font-size: 14px;
				font-weight: bold;
			}
		}
	}
	.user-section {
		display: flex;
		flex-direction: column;
		flex: 2;
		justify-content: center;
		align-items: center;
		padding: 10px;
		background: #f3f3f3;
		width: 100%;
		& > ul {
			display: flex;
			flex-direction: column;
			list-style: none;
			flex: 1;
			width: 110%;
			padding: 0px;
			margin: 0px;

			justify-content: center;
			align-items: center;
			li {
				display: flex;
				flex-direction: column;
				list-style: none;

				font-size: 16px;
				background: #272530;
				padding: 10px 10px 10px 10px;
				margin: 10px 0;
				border-radius: 5px;
				width: 80%;
				list-style: none;
				color: white;
				justify-content: center;
				align-items: center;
				font-size: 20px;
				font-weight: 700;
			}
		}
	}
`;
