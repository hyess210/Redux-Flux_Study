# Redux-Flux_Study
> Flux와 Redux 공부한 것을 기록합니다.

> 참고 링크 : [Flux 공부 참고 블로그](https://taegon.kim/archives/5288)

### Flux란?
1. **MVC 아키텍처의 한계를 보완**
    + MVC는 컨트롤과 모델, 모델과 뷰 사이의 데이터 흐름이 프로젝트가 커질수록 복잡해지고 코드 예측이나 테스트가 어려워지는 문제점이 있다.
2. **Flux 소개**
    + Flux 애플리케이션은 크게 디스패처(Dispatcher), 스토어(Store), 뷰(View)로 구성되어 있다.
      + 단, 여기서 뷰는 ***MVC의 뷰와 달리*** 데이터를 가져오며 자식 뷰로 전달하기도 한다. 리액트 기반에서 작성된 컴포넌트가 하는 기능을 떠올리면 쉽다.
    + Flux 아키텍처의 가장 큰 특징은 ***단방향 데이터 흐름***이다.
      + 데이터는 언제나 디스패처에서 스토어로, 스토어에서 뷰로, 뷰에서 액션으로, 액션에서 디스패처로 흐른다.
      ![단반향으로 흐르는 Flux의 데이터 흐름](https://user-images.githubusercontent.com/55439512/103979913-228b6c80-51c2-11eb-8fe1-796ba1b278be.jpeg)
      
3. **Dispatcher**
    + 디스패처는 Flux 애플리케이션의 모든 데이터 흐름을 관리한다.
      ```
      액션 발생 👉 디스패처로 메세지(또는 액션 객체) 감지 👉 등록되어 있는 콜백 함수를 통해 메세지를 스토어에 전달
      ```
    + 디스패처는 전체 애플리케이션에서 한 개의 인스턴스만 사용
  
4. **Action**
    + *액션* : 디스패처의 특정 메소드 실행시 스토어에 변화를 일으킬 수 있다. 이 메소드 호출시 데이터 묶음으로 인수를 전달하는데, 이때 데이터 묶음을 액션이라고 한다.
    + 액션 객체는 대체로 액션 생성자(Action Creator)라는 함수 또는 메소드를 통해 만들어진다.
    + 액션은 대체로 액션 타입(또는 액션 아이디) 라고 부르는 고유한 키와 관련된 데이터를 포함한 객체로 만들어진다.

5. **Store**
    + 스토어는 애플리케이션의 상태와 상태를 변경하는 메소드를 가지고 있다.
        + 어떤 타입의 액션을 받았는가에 따라 메서드를 다르게 적용
    + Flux에서 스토어는 상태를 다루는 개념으로 접근해야 하므로 무엇이든 저장 할 수 있다.
      + 대체로 단순 자바스크립트 Object로 구성된다.
    + 스토어에서는 상태만을 다루므로 비동기 동작은 액션에서 처리해야 한다.
    
6. **View**
    + MVC에서 뷰와 달리 화면에 내보내는 것 외에 컨트롤러의 성격도 가지고 있다.(React에 해당)
    ```
    중첩된 뷰 레이어 최상위 뷰의 역할 : 스토어에서 데이터 가져옴 👉 자식 뷰에 배분
    (필요에 따라 하위 뷰에서도 직접 스토어에서 데이터를 가져오기도 한다.)
    ```
    + 데이터를 넘겨받은 뷰는 화면을 rerendering 한다.
    ```
    스토어의 변경 사항을 감지하는 이벤트 리스너를 스토어에 등록 👉 이벤트 발생시 뷰에 반영
    ```
