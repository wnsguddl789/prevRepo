/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { GameRoomView } from "../views";
import { socket } from "../../../utils";
import {
	useRouter,
	useCanvas,
	useSession,
	setSocketServer
} from "../../../hooks";
type chatType = {
	input: string;
	name: string;
};

export const GameRoomController: React.FunctionComponent = () => {
	const [isMaster, setIsMaster] = React.useState<boolean>(false);
	const [currentUser, setCurrentUser] = React.useState<any[]>([]);
	const { prepareCanvas, contextRef } = useCanvas();
	const [canvas, setCanvas] = React.useState();

	const [chatList, setChatList] = React.useState<chatType[]>([]);
	const [input, setInput] = React.useState<string>("");
	const inputRef = React.useRef<HTMLInputElement>(null);
	const scrollRef = React.useRef<HTMLDivElement>(null);

	const [step, setStep] = React.useState<number>(0);
	const [keywordList, setKeyWordList] = React.useState<string[]>([]);

	const {
		query: { roomId }
	} = useRouter();
	const session = useSession();

	React.useEffect(() => {
		prepareCanvas();
		socket.on("drawing", contextRef);
	}, [contextRef]);

	// React.useEffect(() => {
	// 	socket.on("enterGameRoom", ({ name: string }) => {
	// 		if (name !== "") {
	// 			setCurrentUser([
	// 				...currentUser,
	// 				{
	// 					name
	// 				}
	// 			]);
	// 		}
	// 	});
	// }, [currentUser]);

	// React.useEffect(() => {
	// 	if (session?.user.id === roomId) {
	// 		const name = String(session?.user.name);
	// 		if (name !== "") {
	// 			socket.emit("enterGameRoom", {
	// 				name
	// 			});
	// 		}
	// 		// socket.emit("enterGameRoom", {
	// 		// 	name
	// 		// });

	// 		setCurrentUser((old) => [...old, { name }]);
	// 		setIsMaster(true);
	// 	} else {
	// 		setIsMaster(false);
	// 	}
	// }, [roomId, session]);

	React.useEffect(() => {
		socket.on("addChat", ({ name, input }: chatType) => {
			setChatList([...chatList, { name, input }]);
		});
	}, [chatList]);

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value }
		} = event;
		if (value.trim() !== "") {
			setInput(value);
		}
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (inputRef.current) {
			inputRef.current.value = "";
			inputRef.current.focus();
			setInput("");
			const name = session?.user?.name && session?.user?.name;
			setSocketServer("addChat", { name, input });
		}
	};

	const nextStep = () => {
		setStep(step + 1);
	};

	return (
		<GameRoomView
			step={step}
			nextStep={nextStep}
			isMaster={isMaster}
			inputRef={inputRef}
			scrollRef={scrollRef}
			chatList={chatList}
			onChangeInput={onChangeInput}
			handleFormSubmit={handleFormSubmit}
		/>
	);
};
