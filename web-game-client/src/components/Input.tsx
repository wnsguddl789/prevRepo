import * as React from "react";
import styled from "@emotion/styled";
type InputType = {
	type?: string;
	autoComplete?: boolean;
	placeholder?: string;
	label: string;
	id: string;
	inputRef: any;
	onChange: () => void;
};
const TextInput: React.FunctionComponent<InputType> = ({
	type,
	id,
	autoComplete,
	placeholder,
	inputRef,
	onChange
}) => (
	<TextContainer>
		<input
			type={type}
			id={id}
			className="text-input"
			autoComplete={autoComplete ? String(autoComplete) : "false"}
			placeholder={placeholder ? placeholder : "Fill the input"}
			ref={inputRef}
			required
			onChange={onChange}
		/>
	</TextContainer>
);

const TextContainer = styled.div`
	width: 100%;
	position: relative;

	.text-input {
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
	}

	.text-input:focus {
		border: 2px solid #7e4ccb;
	}

	.text-input:focus + .label,
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
	.text-input:focus::placeholder {
		opacity: 1;
	}
`;

export { TextInput };
