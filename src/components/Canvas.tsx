import * as React from "react";
import { useCanvas } from "../hooks";
import styled from "@emotion/styled";
export const Canvas = () => {
	const { startDrawing, finishDrawing, draw, canvasRef } = useCanvas();
	return (
		<CanvasContainer
			onMouseDown={startDrawing}
			onMouseUp={finishDrawing}
			onMouseMove={draw}
			ref={canvasRef}
		/>
	);
};

const CanvasContainer = styled.canvas``;
