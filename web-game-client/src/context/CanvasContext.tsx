import * as React from "react";

const CanvasContext = React.createContext<any>(null);

const CanvasProvider = ({ children }: any) => {
	const [isDrawing, setIsDrawing] = React.useState(false);
	const canvasRef = React.useRef<HTMLCanvasElement>(null);
	const contextRef = React.useRef<CanvasRenderingContext2D>();

	const prepareCanvas = () => {
		const canvas = canvasRef.current;
		if (canvas) {
			const context = canvas.getContext("2d");

			canvas.width = window.innerWidth * 2;
			canvas.height = window.innerHeight * 2;
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;

			if (context && contextRef) {
				context.scale(2, 2);
				context.lineCap = "round";
				context.strokeStyle = "black";
				context.lineWidth = 5;
				contextRef.current = context;
			}
		}
	};

	const startDrawing = ({ nativeEvent }: any) => {
		const { offsetX, offsetY } = nativeEvent;
		if (contextRef.current) {
			contextRef.current.beginPath();
			contextRef.current.moveTo(offsetX, offsetY);
			setIsDrawing(true);
		}
	};

	const finishDrawing = () => {
		if (contextRef.current) {
			contextRef.current.closePath();
			setIsDrawing(false);
		}
	};

	const draw = ({ nativeEvent }: any) => {
		if (!isDrawing) {
			return;
		}
		const { offsetX, offsetY } = nativeEvent;
		if (contextRef.current) {
			contextRef.current.lineTo(offsetX, offsetY);
			contextRef.current.stroke();
		}
	};

	const clearCanvas = () => {
		const canvas = canvasRef.current;
		if (canvas) {
			const context = canvas.getContext("2d");
			if (context) {
				context.fillStyle = "white";
				context.fillRect(0, 0, canvas.width, canvas.height);
			}
		}
	};

	return (
		<CanvasContext.Provider
			value={{
				canvasRef,
				contextRef,
				prepareCanvas,
				startDrawing,
				finishDrawing,
				clearCanvas,
				draw
			}}
		>
			{children}
		</CanvasContext.Provider>
	);
};

const useCanvas = () => React.useContext(CanvasContext);

export { CanvasContext, CanvasProvider, useCanvas };
