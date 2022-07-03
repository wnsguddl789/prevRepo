import * as React from "react";
import { Container, RoomList, RoomCard } from "../styles";
import { Canvas, TextInput } from "../../../components";
import styled from "@emotion/styled";
type chatType = {
	message: string;
	name: string;
};
interface GameRoomViewProps {
	data: any;
	isMaster: boolean;
}

export const GameRoomView: React.FunctionComponent<GameRoomViewProps> = ({
	data,
	isMaster
}) => {
	return (
		<Container>
			<DrawingSection>
				<Canvas />
			</DrawingSection>
			<ChattingSection>
				<TextInput />
			</ChattingSection>
		</Container>
	);
};
const DrawingSection = styled.section`
	display: flex;
	flex: 2;
`;
const ChattingSection = styled.section`
	display: flex;
	flex: 2;
`;
