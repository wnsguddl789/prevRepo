# Mobx + Functional Programming

> ## 왜 만들었는가?

기존 프로젝트의 라이브러리 및 구조가 레거시해졌다는 판단이 들게되어,<br> 재설계
및 Class Component -> Function Component로 전환하며

각 모듈의 Store들도 Function 형으로 변환하는 작업을 하기 위한 연습용 레포지토리
다.

> ## 어떻게 설계하였는지?

기존 프로젝트는 MonoRepo를 선택하여 각 레포마다 모듈의 역할을 하고있으며,<br>
pages 디렉토리의 하위 파일들은 Provider로 감싸주어 Store를 주입시키고
moduels/pages의 파일에서 스토어를 인젝션시키고있었으며,
moduels/ViewController 혹은 View에서 observer를 걸어 상태를 추적하고있었다.

개선사항은 개선방향 두가지 버전으로 나누었으며, 목차를 클릭하여 설명을 확인하면 된다.

> ## 버전은 두가지다

#### 아래 목차를 클릭하면 리드미가 나옵니다.

-   [with RootStore](https://github.com/wnsguddl789/mobx-functional/tree/feat/withRoot)
-   [without RootStore]()
