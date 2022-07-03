import * as React from "react";
import styled from "@emotion/styled";
type InputType = {
	type?: string;
};
const TextInput: React.FunctionComponent<InputType> = ({ type }) => (
	<TextContainer>
		<input type={type} />
		<label />
	</TextContainer>
);

const TextContainer = styled.div``;

export { TextInput };
