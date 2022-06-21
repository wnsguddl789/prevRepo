# Mobx + Functional Programming

> ## 왜 만들었는가?

Mobx에서 OOP를 권장하고 있지만, <br>
Mobx에서 FP를 추구하면 어떻게 해야할까를 생각해보며 
공부해보기 위하여 만들게되었다.

> ## 어떻게 설계하였는지?

기존 프로젝트는 MonoRepo를 선택하여 각 레포마다 모듈의 역할을 하고있으며,<br>
pages 디렉토리의 하위 파일들은 Provider로 감싸주어 Store를 주입시키고
moduels/pages의 파일에서 스토어를 인젝션시키고있었으며,
moduels/ViewController 혹은 View에서 observer를 걸어 상태를 추적하고있었다.

개선사항은 개선방향 두가지 버전으로 나누었으며, 목차를 클릭하여 설명을 확인하면 된다.

> ## 버전은 두가지다

#### 아래 목차를 클릭하면 리드미가 나옵니다.

-   [with RootStore](https://github.com/wnsguddl789/mobx-functional/tree/withRoot)
-   [without RootStore]()
