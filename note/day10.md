
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

### React Hooks

<br/>

#### Hook 소개
React 버전 16.8에 Hook이 새로 추가되었습니다. Class를 작성할 필요 없이 함수 내에서 상태 값과 여러 React의 기능을 사용할 수 있게 되었습니다.

##### `소개영상`  
React Conf 2018에서 Sophie Alpert와 Dan Abramov는 Hook를 소개했었습니다. 이어서 Ryan Florence가 Hook를 사용하여 어떻게 애플리케이션을 리팩토링 할 것인지 보여주었습니다. 아래 영상에서 확인해보세요.
[![Video Label](http://img.youtube.com/vi/xsSnOQynTHs/0.jpg)](https://youtu.be/xsSnOQynTHs)
<br/>

##### `동기`
1. 상태와 관련된 로직을 재사용하기 어렵습니다.
2. 로직과 관련이 없는 생명주기 메서드 등의 사용으로 컴포넌트가 복잡해 집니다.
3. class의 this 사용이 의도치 않은 문제를 일으킵니다.

#### Hook 개요

<br/>

#### State Hook 사용하기

<br/>

#### Effect Hook 사용하기

<br/>

#### Hook 규칙

<br/>

#### 자신만의 Hook 만들기

<br/>

#### Hook API 참고서

<br/>

####

<br/>


### Reference
- [REACT HOOK](https://ko.reactjs.org/docs/hooks-intro.html)

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
