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
import { nanoid } from "nanoid";
import { chatType, keyWordType, userType } from "../types";

export const GameRoomController: React.FunctionComponent = () => {
	const [isMaster, setIsMaster] = React.useState<boolean>(false);
	const [currentUser, setCurrentUser] = React.useState<any[]>([]);
	const { prepareCanvas, contextRef } = useCanvas();
	const [canvas, setCanvas] = React.useState();
	const [maxGame, setMaxGame] = React.useState<number>(0);

	const [message, setMessage] = React.useState<string>("");
	const [chatList, setChatList] = React.useState<chatType[]>([]);

	const [keyword, setKeyword] = React.useState<string>("");
	const [keywordList, setKeyWordList] = React.useState<keyWordType[]>([]);

	const inputRef = React.useRef<HTMLInputElement>(null);
	const keywordInputRef = React.useRef<HTMLInputElement>(null);
	const scrollRef = React.useRef<HTMLDivElement>(null);

	const [step, setStep] = React.useState<number>(0);

	const {
		query: { roomId }
	} = useRouter();
	const session = useSession();

	React.useEffect(() => {
		prepareCanvas();
		socket.on("drawing", contextRef);
	}, [contextRef]);

	React.useEffect(() => {
		socket.on("addChat", ({ name, message }: chatType) => {
			setChatList([...chatList, { name, message }]);
		});
	}, [chatList]);

	React.useEffect(() => {
		socket.on("nextStep", (ServerStep: number) => {
			setStep(ServerStep + 1);
		});
	}, [step]);

	React.useEffect(() => {
		if (session && session.user) {
			const {
				user: { id: userId, name }
			} = session;
			setSocketServer("enterGameRoom", {
				userId,
				name
			});
			socket.on("enterGameRoom", (user: userType) => {
				setCurrentUser([...currentUser, user]);
			});
		}
	}, [session]);

	const onChangeChatInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value }
		} = event;
		if (value.trim() !== "") {
			setMessage(value);
		}
	};
	const onChangeKeywordInput = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const {
			target: { value }
		} = event;
		if (value.trim() !== "") {
			setKeyword(value);
		}
	};

	const handleChatFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (inputRef.current) {
			inputRef.current.value = "";
			inputRef.current.focus();
			setMessage("");
			const name = session?.user?.name && session?.user?.name;
			setSocketServer("addChat", { name, message });
		}
	};

	const handleKeywordFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (keywordInputRef.current) {
			if (maxGame > keywordList.length) {
				keywordInputRef.current.value = "";
				keywordInputRef.current.focus();
				setKeyWordList([...keywordList, { index: nanoid(), keyword }]);
			} else {
				alert("설정하신 키워드 개수를 초과했습니다.");
			}
		}
	};
	const removeKeywordItem = (idx: string) => {
		setKeyWordList(
			keywordList.filter(({ index }: keyWordType) => index !== idx)
		);
	};

	const nextStep = () => {
		setSocketServer("nextStep", step);
	};

	return (
		<GameRoomView
			step={step}
			nextStep={nextStep}
			setMaxGame={setMaxGame}
			isMaster={isMaster}
			inputRef={inputRef}
			scrollRef={scrollRef}
			keywordInputRef={keywordInputRef}
			chatList={chatList}
			keywordList={keywordList}
			currentUser={currentUser}
			onChangeChatInput={onChangeChatInput}
			onChangeKeywordInput={onChangeKeywordInput}
			handleChatFormSubmit={handleChatFormSubmit}
			handleKeywordFormSubmit={handleKeywordFormSubmit}
			removeKeywordItem={removeKeywordItem}
		/>
	);
};
