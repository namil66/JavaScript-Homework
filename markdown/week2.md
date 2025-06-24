## 2주차? 회고

내가 지금까지 배웠던 내용들 중에서 모르는 것보다 아는 것을 이야기하는게 빠를 정도로 머리가 null 상태였다.
목요일에 결석도 하고 4일동안 못잔 잠을 몰아서 자고 푹 쉬다가 다시 공부하려니까 반작용이 온건지 집중도 안되고 너무 힘들었다.

최악인건 오프캔버스, 모달 다이로그, 아코디언을 하면서 내가 css도 잘 할 줄 모르고 마크업도 개판이다보니까 미래가 background-color: #121212; 였다. 배열부터 attr함수까지 진도를 어떻게 따라잡아야할지 막막하다. 내가 뭘 모르고 있는지를 모르니까 어디서부터 시작해야하는지 감을 못잡는 것이다. 그래도 일단 차근차근 배우면서 회고에 깨달은 내용도 적고 있다.

아코디언 실습을 하면서 인지부조화가 왔다.
버튼들을 지정하려고 querySelectorAll()를 사용했는데 이벤트 리스너는 함수가 아니라며 오류를 출력하길래 이게 뭐지? 싶어서 고민하다가 도저히 답을 모르겠어서 지피티 보조강사님께 여쭤보니 querySelectorAll()은 Nodelist를 반환한대서 노드리스트는 또 뭐지?라는 생각을 했다.

```js
// 조건 분기 하지만 실패했죠?
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  if (!button.classList.contains(".is-open")) {
    button.classList.add(".is-open");
  } else {
    button.classList.remove(".is-open");
  }
});
```

문제의 그 부분이다. 처음엔 조건 분기로 시작해서 반복문으로 끝내려 했으나 조건 분기가 애초에 안된다는 사실을 깨달았다.  
DOM으로 반환되는 querySelector()였다면 이벤트 리스너를 바로 추가해도 되지만  
querySelcetorAll()은 NodeList를 반환하기 때문에 forEach() 같은 메서드를 활용하여 이벤트를 부여해야한다.  
그래서 나는 버튼들을 돌면서 순회공연을 한다고 이해했다.

> "반갑습니다 버튼1님. 잘 지내시죠? 클릭좀 해주시겠습니까?", "반갑습니다 버튼2님. 요새 젊어지신 것 같네요? 클릭하나 드릴까요?"

```js
// forEach 문으로 수정.
const btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-open");
  });
});
```

nodelist는 언제 배우고 forEach문은 언제 배워서 언제 쓰고 막막했지만 forEach문은 생각보다 별거 없었다.

1.  (변수).forEach() 선?언??을 해준다

```js
btns.forEach();
```

2.  반복문 안에 화살표 함수 표기법으로 함수를 넣는다.

```js
btns.forEach(() => {});
```

3.  함수 안에 이벤트 리스너를 추가하고 필요한 동작을 넣는다.

```js
button.addEventListener("click", () => {
  button.classList.toggle("is-open");
  //혹은 console.log()
});
```

놀랍게도 for문보다 forEach문을 먼저 학습해버렸다. 다음은 for문과 for..of를 부숴볼 예정이다.  
아직도 갈길이 멀다. 남들보다 2일차는 뒤처져있다고 생각한다. 물론 업보라 내가 감당해야하는 일이지만  
바닐라 프로젝트가 무섭다. 내가 성장형 캐릭터가 될지, 그 유명한 조별과제 빌런이 될지.. 지금은 후자라고 생각한다. 그러니 천천히 빠르게.. 학습하도록 하자..

- 아코디언이 작동이 안돼서 css도 고치고 js도 고쳐봤는데 포기했다 가진 지식선에서는 더 방법을 찾을 수 없어 그냥 이런게 있구나 정도로 넘기기로 했다.
