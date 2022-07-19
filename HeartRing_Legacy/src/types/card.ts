// 초기 상태 셋팅. 아래는 예시
export interface Card {
  name: string;
  born: string;
  died: string;
  bio: {
    text: string;
    url: string;
  };
  id: number;
}
