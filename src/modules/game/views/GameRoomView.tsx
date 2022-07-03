import * as React from "react";
import { Container, RoomList, RoomCard } from "../styles";
import { Canvas, TextInput } from "../../../components";
import styled from "@emotion/styled";
type chatType = {
	input: string;
	name: string;
};
interface GameRoomViewProps {
	isMaster: boolean;
	step: number;
	inputRef: any;
	scrollRef: any;
	chatList: any[];
	nextStep: () => void;
	onChangeInput: ({
		target: { value }
	}: React.ChangeEvent<HTMLInputElement>) => void;
	handleFormSubmit: (e: React.FormEvent) => void;
}

export const GameRoomView: React.FunctionComponent<GameRoomViewProps> = ({
	isMaster,
	step,
	inputRef,
	scrollRef,
	chatList,
	nextStep,
	onChangeInput,
	handleFormSubmit
}) => (
	<Container>
		{step === 0 && <GameWaitingScreen nextStep={nextStep} />}
		{step === 1 && <GameSettingScreen nextStep={nextStep} />}

		{step === 2 && (
			<React.Fragment>
				<DrawingSection></DrawingSection>
				<ChattingSection>
					<div className="chatting-section" ref={scrollRef}>
						{chatList.map(
							(chatData: chatType, chatIndex: number) => (
								<div
									key={`chat-${chatIndex}`}
									className="chatting-list"
								>
									<span className="chatting-name">
										{chatData.name}
									</span>
									<span className="chatting-message">
										{chatData.input}
									</span>
								</div>
							)
						)}
					</div>
					<form
						className="keyboard-section"
						onSubmit={handleFormSubmit}
					>
						<input ref={inputRef} onChange={onChangeInput} />
						<button className="chat-submit">전송</button>
					</form>
				</ChattingSection>
			</React.Fragment>
		)}
	</Container>
);

const GameWaitingScreen = ({ nextStep }: any) => (
	<React.Fragment>
		<button onClick={() => nextStep()}>게임시작</button>
	</React.Fragment>
);
const GameSettingScreen: React.FunctionComponent = ({ nextStep }: any) => (
	<React.Fragment>
		<h2>키워드 입력</h2>
		<h4>그림으로 설명할 키워드를 정하세요</h4>
		<input />
		<button onClick={() => nextStep()}>시작</button>
	</React.Fragment>
);
const DrawingSection = styled.section`
	display: flex;
	flex: 10;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;
const ChattingSection = styled.section`
	flex: 1;
	display: flex;
	width: 100%;
	flex-direction: column;

	& > .chatting-section {
		display: flex;
		flex-direction: column-reverse;
		height: 300px;
		overflow-y: auto;
		.chatting-list {
			display: flex;
			flex-direction: row;
			flex: 1;
			padding: 5px 0;
			span {
				font-size: 14px;
			}
			.chatting-name {
				display: flex;
				flex: 2;
				justify-content: center;
				align-items: center;
			}
			.chatting-message {
				display: flex;
				flex: 9;
				align-items: center;
			}
		}
	}

	& > .keyboard-section {
		display: flex;
		flex-direction: row;
		width: 100%;
		flex: 1;
		padding: 5px;
		position: sticky;
		bottom: 0;
		& > input {
			padding: 0.8rem;
			width: 100%;
			height: 100%;
			border: 2px solid #2f2c45;
			background: #272530;
			border-radius: 5px;
			font-size: 18px;
			outline: none;
			transition: all 0.3s;
			color: #fff;
			flex: 8;

			& {
				border: 2px solid #7e4ccb;
			}

			& + .label,
			.filled {
				top: -10px;
				color: #7e4ccb;
				font-size: 14px;
			}

			.text-input::placeholder {
				font-size: 16px;
				opacity: 0;
				transition: all 0.3s;
			}
			&::placeholder {
				opacity: 1;
			}
		}
		button.chat-submit {
			border: none;
			flex: 1;
			margin-left: 5px;
			border-radius: 8px;
		}
	}
`;
