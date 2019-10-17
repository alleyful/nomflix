
# Day10 ~ 11
> 오늘의 강의: #1.0 ~ #2.9 (리액트 훅스 강의 관련 입니다)   
  오늘의 과제: 위의 강의들을 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.  
  이번 챌린지는 2일간 진행되는 챌린지 입니다.


<br/>

[[노마드 코더] 실전형 리액트 Hooks 10개](https://academy.nomadcoders.co/p/introduction-to-react-hooks)   
`1 useState`
- 1.0 Introduction to useState
- 1.1 useInput
- 1.2 useInput part Two
- 1.3 useTabs

`2 useEffect`
- 2.0 Introduction to useEffect
- 2.1 useTitle
- 2.2 useClick
- 2.3 useConfirm & usePreventLeave
- 2.4 useBeforeLeave
- 2.5 useFadeIn & useNetwork
- 2.6 useScroll & useFullscreen
- 2.7 useNotification
- 2.8 useAxios
- 2.9 Conclusions
 
<br/>

---

<br/>

## Lecture Summery

<br/>


## React Hooks

<br/>

### Hook 소개
Hooks 는 리액트 v16.8 에 새로 도입된 기능으로서, 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 그리고 렌더링 직후 작업을 설정하는 useEffect 등의 기능등을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줍니다.

#### `소개영상`  
React Conf 2018에서 Sophie Alpert와 Dan Abramov는 Hook를 소개했었습니다. 이어서 Ryan Florence가 Hook를 사용하여 어떻게 애플리케이션을 리팩토링 할 것인지 보여주었습니다. 아래 영상에서 확인해보세요.
[![Video Label](http://img.youtube.com/vi/xsSnOQynTHs/0.jpg)](https://youtu.be/xsSnOQynTHs)
<br/>

#### `동기`
1. 상태와 관련된 로직을 재사용하기 어렵습니다.
2. 로직과 관련이 없는 생명주기 메서드 등의 사용으로 컴포넌트가 복잡해 집니다.
3. class의 this 사용이 의도치 않은 문제를 일으킵니다.

<br/>

<br/>

### useState
useState 는 가장 기본적인 Hook 으로서, 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해줍니다. 만약에 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생한다면 이 Hook 을 사용하시면 됩니다.

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};
```

<br/>

### useEffect
useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다. 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태로 보아도 무방합니다.

```javascript
import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
  });

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    (...)
  );
};

export default Info;
```

<br/>

#### 마운트 될 때만 실행하고 싶을 때
만약 useEffect 에서 설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 됩니다.
```javascript
useEffect(() => {
    console.log('마운트 될 때만 실행됩니다.');
  }, []);
```

<br/>

#### 특정 값이 업데이트 될 때만 실행하고 싶을 때
useEffect 를 사용 할 때 특정 값이 변경이 될 때만 호출하게 하고 싶을 경우도 있을 것입니다.
```javascript
//class 형
componentDidUpdate(prevProps, prevState) {
  if (prevProps.value !== this.props.value) {
    doSomething();  
  }
}

//useEffect 사용시
useEffect(() => {
    console.log(name);
  }, [name]);
```

<br/>

#### cleanup
useEffect 는 기본적으로 렌더링 되고난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라집니다.

만약 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect 에서 뒷정리(cleanup) 함수를 반환해주어야 합니다.

```javascript
useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });
```

만약에, 오직 언마운트 될 때만 뒷정리 함수를 호출하고 싶으시다면 useEffect 함수의 두번째 파라미터에 비어있는 배열을 넣으시면 됩니다.

```javascript
useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, []);
```

<br/>

<br/>

### useContext
이 Hook 을 사용하면 함수형 컴포넌트에서 Context 를 보다 더 쉽게 사용 할 수 있습니다.
```javascript
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('black');
const ContextSample = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: '24px',
    height: '24px',
    background: theme
  };
  return <div style={style} />;
};

export default ContextSample;
```

<br/>

<br/>

### UseReducer
useReducer 는 useState 보다 컴포넌트에서 더 다양한 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 Hook 입니다.

리듀서는 현재 상태와, 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달 받아 새로운 상태를 반환하는 함수입니다. 리듀서 함수에서 새로운 상태를 만들 때는 꼭 불변성을 지켜주어야 합니다.

```javascript
function reducer(state, action) {
  return { ... }; // 불변성을 지키면서 업데이트한 새로운 상태를 반환합니다
}
```

액션값은 주로 다음과 같은 형태로 이루어져있습니다.

```javascript
{
type: 'INCREMENT',
// 다른 값들이 필요하다면, 추가적으로 들어감
}
```

Redux 에서는 액션 객체에는 어떤 액션인지 알려주는 type 필드가 꼭 있어야 하지만, useReducer 에서 사용하는 액션 객체는 꼭 type 를 지니고 있을 필요가 없습니다. 심지어, 객체가 아니라 문자열이나, 숫자여도 상관이 없습니다.

<br/>

#### 카운터 구현하기
```javascript
import React, { useReducer } from 'react';

function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
```

useReducer 의 첫번째 파라미터는 리듀서 함수, 그리고 두번째 파라미터는 해당 리듀서의 기본 값을 넣어줍니다. 이 Hook 을 사용 했을 때에는 state 값과 dispatch 함수를 받아오게 되는데요, 여기서 state 는 현재 가르키고 있는 상태고, dispatch 는 액션을 발생시키는 함수입니다. dispatch(action) 와 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출되는 구조입니다.

useReducer 을 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 점 입니다.

<br/>

#### 인풋 상태 관리하기
기존에는 인풋이 여러 개여서 useState 를 여러번 사용했는데요, useReducer 를 사용한다면 우리가 기존에 클래스형 컴포넌트에서 input 태그에 name 값을 할당하고 e.target.name 을 참조하여 setState 를 해준 것과 유사한 방식으로 작업을 처리 할 수 있습니다.
```javascript
import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```
useReducer 에서의 액션은 그 어떤 값이 되어도 됩니다. 그래서 이번에 우리는 이벤트 객체가 지니고있는 e.target 값 자체를 액션 값으로 사용하였습니다.

이런 식으로 인풋을 관리하면, 아무리 인풋의 개수가 많아져도 코드를 짧고 깔끔하기 유지 할 수 있습니다.

<br/>

<br/>

### useMemo
useMemo 를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있습니다. 먼저 리스트에 숫자들을 추가하면 해당 숫자들의 평균을 나타내는 함수형 컴포넌트를 작성해봅시다.

```javascript
import React, { useState } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
```

평균 값은 잘 보여지고 있는데, 숫자를 등록할 때뿐만 아니라 인풋 내용이 수정 될 때도 우리가 만든 getAverage 함수가 호출되고 있는것을 확인 할 수 있습니다. 인풋 내용이 바뀔 땐 평균 값을 다시 계산 할 필요가 없는데, 이렇게 렌더링 할 때마다 계산을 하는 것은 낭비지요?

useMemo Hook 을 사용하면 이러한 작업을 최적화 할 수 있습니다. 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 만약에 원하는 값이 바뀐 것이 아니라면 이전에 연산했던 결과를 다시 사용하는 방식입니다.

```javascript
import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```

<br/>

<br/>

### useCallback
useCallback 은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용하는데요, 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성 할 수 있습니다.
```javascript
import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
    },
    [number, list]
  ); // number 혹은 list 가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange}  />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```
useCallback 의 첫번째 파라미터에는 우리가 생성해주고 싶은 함수를 넣어주고, 두번째 파라미터에는 배열을 넣어주면 되는데 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해주어야 하는지 명시해주어야 합니다.

만약에 onChange 처럼 비어있는 배열을 넣게 되면 컴포넌트가 렌더링 될 때 단 한번만 함수가 생성되며, onInsert 처럼 배열 안에 number 와 list 를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가 될 때마다 함수가 생성됩니다.

함수 내부에서 기존의 상태 값을 의존해야 할 때는 꼭 두번째 파라미터 안에 포함을 시켜주어야 합니다. 예를 들어서 onChange 의 경우엔 기존의 값을 조회하는 일은 없고 바로 설정만 하기 때문에 배열이 비어있어도 상관이 없지만 onInsert 는 기존의 number 와 list 를 조회해서 nextList 를 생성하기 때문에 배열 안에 number 와 list 를 꼭 넣어주어야 합니다.

<br/>

참고로 다음 두 코드는 완벽히 똑같은 코드입니다.
```javascript
useCallback(() => {
  console.log('hello world!');
}, [])

useMemo(() => {
  const fn = () => {
    console.log('hello world!');
  };
  return fn;
}, [])
```
useCallback 은 결국 useMemo 에서 함수를 반환하는 상황에서 더 편하게 사용 할 수 있는 Hook 입니다. 숫자, 문자열, 객체 처럼 일반 값을 재사용하기 위해서는 useMemo 를, 그리고 함수를 재사용 하기 위해서는 useCallback 을 사용하세요

<br/>

<br/>

### useRef
useRef Hook 은 함수형 컴포넌트에서 ref 를 쉽게 사용 할 수 있게 해줍니다.
```javascript
import React, { useState, useMemo, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    },
    [number, list]
  ); // number 혹은 list 가 바뀌었을 때만 함수 생성


  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```
useRef 를 사용하여 ref 를 설정하면, useRef 를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가르키게 됩니다.

<br/>

#### 로컬 변수 사용하기
추가적으로, 컴포넌트 로컬 변수를 사용해야 할 때도 useRef 를 활용 할 수 있습니다. 여기서 로컬 변수라 함은, 렌더링이랑은 관계 없이 바뀔 수 있는 값을 의미합니다. 만약에 클래스 형태의 컴포넌트로 따지자면 다음과 같은 코드죠.

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  id = 1
  setId = (n) => {
    this.id = n;
  }
  printId = () => {
    console.log(this.id);
  }
  render() {
    return (
      <div>
        MyComponent
      </div>
    );
  }
}

export default MyComponent;
```

이러한 코드를 만약에 함수형 컴포넌트로 작성한다면 다음과 같이 할 수 있습니다.

```javascript
import React, { useRef } from 'react';

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  }
  const printId = () => {
    console.log(id.current);
  }
  return (
    <div>
      refsample
    </div>
  );
};

export default RefSample;
```
주의 하실 점은, 이렇게 넣는 ref 안의 값은 바뀌어도 컴포넌트가 렌더링 되지 않는다는 점 입니다. 렌더링과 관련 되지 않은 값을 관리 할 때만 이러한 방식으로 코드를 작성해주세요.

<br/>

<br/>

### Reference
- [REACT HOOK](https://ko.reactjs.org/docs/hooks-intro.html)
- [리액트의 Hooks 완벽 정복하기](https://velog.io/@velopert/react-hooks)

<br/>

---

<br/>

## Homework 
[Day10 템플릿](https://codesandbox.io/s/day-seven-blueprint-xrfub)

You will have to create the following hooks and use them all in one page:

- useDeviceOrientation
- useFavicon
- useGeolocation
- useKeyPress
- useLocalStorage
- useMousePosition
- useOnline
- useLockScroll

Here is the desired output:

[![Video Label](http://img.youtube.com/vi/o5z6rzzbsGA/0.jpg)](https://youtu.be/o5z6rzzbsGA)

<br/>

### useDeviceOrientation:

Takes no arguments, returns an object containing "alpha, beta, gamma".

```javascript
const { alpha, beta, gamma } = useDeviceOrientation();
```

<br/>

### useFavicon:

Takes the initial favicon URL as argument, returns 'setFavicon' that changes the favicon.
```javascript
const setFavicon = useFavicon(initialFaviconUrl);
srFavicon(newFaviconUrl)
```

<br/>

### useGeolocation:

Take no arguments, returns an object containing 'error, coords: {lat:long}'

```javascript
const {
  coords: { lat, long },
  error
} = useGeolocation();
```

<br/>

### useKeyPress

Takes one argument, a key, returns a boolean that becomes 'true' or 'false' if the key is pressed

```javascript
const kPressed = useKeyPress("k");
const iPressed = useKeyPress("i");
const mPressed = useKeyPress("m");
const cPressed = useKeyPress("c");
const hPressed = useKeyPress("h");

<ul>
  <li>Pressed 'k' : {kPressed && "K"} </li>
  <li>Pressed 'i' : {kPressed && "I"} </li>
  <li>Pressed 'm' : {kPressed && "M"} </li>
  <li>Pressed 'c' : {kPressed && "C"} </li>
  <li>Pressed 'h' : {kPressed && "H"} </li>
  <li>Pressed 'i' : {kPressed && "I"} </li>
</ul>
```

<br/>

### useLocalStorage

Takes two arguments, the name of the localStorage key, and the initialValue to give to it.

Returns an array where the first item is the current element in localStorage and the second item is a function to update localStorage

```javascript
const {currentLS, setLS} = useLocalStorage(name, initialValue);

<ul>
  <li>Current Value: {currentLS}</li>
  <button onClick={() => setLS("123")}>Set Value: 12345</button>
  <button onClick={() => setLS(null)}>clear LS</button>
</ul>
```

<br/>

### useMousePosition:

Takes no arguments, returns the x,y coordinates of the mouse.

```javascript
const {x, y} = useMousePosition();
```

<br/>

### useOnline:

Takes no arguments, returns a boolean that changes when the user goes online or offline.

```javascript
const isOnLine = useOnline();
```

<br/>

### useLockScroll:

Takes no arguments, returns an array with two elements.

The first element notifies 'true' or 'false' if the scroll is locked, the second element is an object containing two functions, one to lock scroll, one to unlock it.

```javascript
const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();
```

<br/>

### Requirements:
- Don't you dare give up! 
- Make a page that uses all the hooks, like the one on the video.


<br/>

### Submit

`My Answer`
[Day10 Answer](https://codesandbox.io/s/day-seven-blueprint-sud5f)
```javascript
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState(null);
  const [beta, setBeta] = useState(null);
  const [gamma, setGamma] = useState(null);

  const handleOrientation = e => {
    setAlpha(e.alpha);
    setBeta(e.beta);
    setGamma(e.gamma);
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation, false);
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, false);
    };
  }, [alpha, beta, gamma]);
  return { alpha, beta, gamma };
};

const useFavicon = initialFaviconUrl => {
  const [favicon, setFavicon] = useState(initialFaviconUrl);
  const changeFavicon = () => {
    const htmlFavicon = document.querySelector("link[rel*='icon']");
    htmlFavicon.href = favicon;
  };
  useEffect(changeFavicon, [favicon]);
  return setFavicon;
};

const useGeolocation = () => {
  const [coords, setCoords] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCoords({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      error => {
        setError(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      }
    );
  }, []);
  return { coords, error };
};

const useKeyPress = targetKey => {
  const [keyPress, setKeyPress] = useState(false);
  const handleKeyDown = ({ key }) => {
    key === targetKey && setKeyPress(true);
  };
  const handleKeyUp = ({ key }) => {
    key === targetKey && setKeyPress(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });
  return keyPress;
};

const useLocalStorage = (name, initialValue) => {
  const [currentLS, setLS] = useState(() => {
    try {
      const valueLS = window.localStorage.getItem(name);
      return valueLS ? JSON.parse(valueLS) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(name, currentLS);
    } catch {}
  }, [currentLS]);

  return [currentLS, setLS];
};

const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const updatePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    document.addEventListener("mousemove", updatePosition);
    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, [x, y]);
  return { x, y };
};

const useOnline = () => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, [status]);

  return status;
};

const useLockScroll = () => {
  const [isLocked, setIsLocked] = useState(false);
  const lockScroll = () => {
    setIsLocked(true);
  };
  const unLockScroll = () => {
    setIsLocked(false);
  };
  useEffect(() => {
    document.querySelector("html").style.overflow = isLocked
      ? "hidden"
      : "auto";
  }, [isLocked]);

  return [isLocked, { lockScroll, unLockScroll }];
};

function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();

  const setFavicon = useFavicon(
    "https://www.snaps.com/images/common/favicon.ico"
  );

  const {
    coords: { lat, long },
    error
  } = useGeolocation();

  const kPressed = useKeyPress("k");
  const iPressed = useKeyPress("i");
  const mPressed = useKeyPress("m");
  const cPressed = useKeyPress("c");
  const hPressed = useKeyPress("h");

  const [currentLS, setLS] = useLocalStorage("name", "12345");

  const { x, y } = useMousePosition();

  const isOnline = useOnline();

  const [isLocked, { lockScroll, unLockScroll }] = useLockScroll();

  return (
    <div className="App">
      <h1>Superhooks!</h1>

      <div>
        <h2>useDeviceOrientation</h2>
        <ul>
          <li>{`Alpha: ${alpha ? alpha : "null"}`}</li>
          <li>{`Beta: ${beta ? beta : "null"}`}</li>
          <li>{`Gamma: ${gamma ? gamma : "null"}`}</li>
        </ul>
      </div>

      <div>
        <h2>useFavicon</h2>
        <button
          onClick={() =>
            setFavicon("https://www.ohprint.me/images/common/favicon.ico")
          }
        >
          Change Favicon
        </button>
      </div>

      <div>
        <h2>useGeolocation</h2>
        <ul>
          <li>{`Latitude: ${lat ? lat : "null"}`}</li>
          <li>{`Longitude: ${long ? long : "null"}`}</li>
          <li>{`Geolocation Error: ${error ? error : "null"}`}</li>
        </ul>
      </div>

      <div>
        <h2>useKeyPress</h2>
        <ul>
          <li>Pressed 'k': {kPressed && "K"}</li>
          <li>Pressed 'i': {iPressed && "I"}</li>
          <li>Pressed 'm': {mPressed && "M"}</li>
          <li>Pressed 'c': {cPressed && "C"}</li>
          <li>Pressed 'h': {hPressed && "H"}</li>
          <li>Pressed 'i': {iPressed && "I"}</li>
        </ul>
      </div>

      <div>
        <h2>useLocalStorage</h2>
        <ul>
          <li>Current Value: {currentLS}</li>
          <button onClick={() => setLS("12345")}>Set value: 12345</button>
          <button onClick={() => setLS(null)}>Clear LS</button>
        </ul>
      </div>

      <div>
        <h2>useMousePosition</h2>
        <ul>
          <li>{`Mouse X: ${x}`}</li>
          <li>{`Mouse Y: ${y}`}</li>
        </ul>
      </div>

      <div>
        <h2>useOnline</h2>
        <p>Are you onlone? {isOnline ? "Yes" : "No"}</p>
      </div>

      <div>
        <h2>useLockScroll</h2>
        <h3>Is Locked? {isLocked ? "Yes" : "No"}</h3>
        <button onClick={() => lockScroll()}>Lock Scroll</button>
        <button onClick={() => unLockScroll()}>Unlock Scroll</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

<br/>

`correct`
[Day10 Currect](https://codesandbox.io/s/day-seven-solution-tvz5q)
