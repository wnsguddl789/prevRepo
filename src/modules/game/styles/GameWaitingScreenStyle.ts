import styled from "@emotion/styled";

export const GameWaitingContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;

	.setting-section {
		width: 100%;
		padding: 10px;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		& > * {
			margin: 10px 0;
		}
		button.game-start_button {
			width: 100%;
			border: none;
			border-radius: 5px;
			padding: 10px 0;
			background: #272530;
			color: #fff;
			cursor: pointer;
		}
		form.set-max-game_form {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
			& > input {
				-webkit-appearance: none;
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
	}
	.user-section {
		display: flex;
		flex-direction: column;
		flex: 2;
		justify-content: center;
		align-items: center;
		padding: 10px;

		width: 100%;
		& > ul {
			display: flex;
			flex-direction: column;
			list-style: none;
			flex: 1;
			width: 100%;

			justify-content: center;
			align-items: center;
			li {
				display: flex;
				flex-direction: column;
				list-style: none;

				font-size: 16px;
				background: #272530;
				padding: 10px 10px 10px 10px;
				margin: 5px 0;
				border-radius: 5px;
				width: 80%;
				list-style: none;
				color: white;
				justify-content: center;
				align-items: center;
				font-size: 20px;
				font-weight: 800;
			}
		}
	}
`;
