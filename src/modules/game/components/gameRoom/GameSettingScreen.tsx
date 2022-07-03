import React from "react";
import { keyWordType } from "../../types";
import { GameSettingContainer } from "../../styles";
type Props = {
	nextStep: () => void;
	keywordInputRef: any;
	keywordList: keyWordType[];
	onChange: ({
		target: { value }
	}: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	removeKeywordItem: (index: string) => void;
};

export const GameSettingScreen: React.FunctionComponent<Props> = ({
	keywordList,
	keywordInputRef,
	nextStep,
	onSubmit,
	onChange,
	removeKeywordItem
}) => (
	<GameSettingContainer>
		<div className="input-container">
			<h2>키워드 입력</h2>
			<span>그림으로 설명할 키워드를 정하세요</span>
			<form onSubmit={onSubmit}>
				<input ref={keywordInputRef} onChange={onChange} />
			</form>
			<button onClick={() => nextStep()}>시작</button>
		</div>
		<div className="keyword-container">
			<ul>
				{keywordList.map((keywords: keyWordType) => (
					<li key={`keyword-${keywords.index}`}>
						{keywords.keyword}
						<button
							onClick={() => removeKeywordItem(keywords.index)}
						>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	</GameSettingContainer>
);
