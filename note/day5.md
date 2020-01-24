# Day5 ~ 6

> 오늘의 강의: #4.1 ~ #6.2
> 오늘의 과제: 위의 강의들을 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.
> 이번 챌린지는 2일간 진행되는 챌린지 입니다.

<br/>

[[멤버십] 초보를 위한 React JS](https://academy.nomadcoders.co/courses/436641/lectures/8467057)  
`4 Networking`

- 4.0 Introduction to The Movie DB API
- 4.1 Sexy Networking with Axios Instances
- 4.2 API Verbs part One
- 4.3 API Verbs part Two

`5 Containers`

- 5.0 Container Presenter Pattern part One
- 5.1 Container Presenter Pattern part Two
- 5.2 Home Container
- 5.3 TV Container
- 5.4 Search Container
- 5.5 Detail Container part One
- 5.6 Detail Container part Two
- 5.7 Destructuring assignment with let

`6 Presenters`

- 6.0 Presenter Structure
- 6.1 HomePresenter and Section Components
- 6.2 TVPresenter and Loader Components

<br/>

---

<br/>

## Lecture Summery

<br/>

### Networking

<br/>

#### Restful API

- REST(REpresentational State Transfer) '대표적인 상태 전달'
- REST란, "웹에 존재하는 모든 자원(이미지, 동영상, DB 자원)에 고유한 URI를 부여해 활용"하는 것으로, 자원을 정의하고 자원에 대한 주소를 지정하는 방법론을 의미한다고 한다.
- 따라서 Restful API는 REST 특징을 지키면서 API를 제공하는 것을 의미한다

**REST 구성**

- 자원 (Resouce) - URI
- 행위 (Verb) - HTTP Method
- 표현 (Representations)

**REST의 특징**

1.  Uniform (유니폼 인터페이스)  
    HTTP 표준에만 따른다면, 안드로이드/IOS 플랫폼이든, 특정 언어나 기술에 종속되지 않고 모든 플랫폼에 사용이 가능하며, URI로 지정한 리소스에 대한 조작이 가능한 아키텍처 스타일을 의미한다.

2.  Stateless (무상태성)  
    HTTP는 Stateless Protocol 이므로, REST 역시 무상태성을 갖는다. 즉, HttpSession과 같은 컨텍스트 저장소에 상태정보를 따로 저장하고 관리하지 않고, API 서버는 들어오는 요청만을 단순 처리하면 된다. 세션과 같은 컨텍스트 정보를 신경쓸 필요가 없어 구현이 단순해진다.

3.  Cacheable (캐시가능)  
    HTTP 기존의 웹 표준을 그대로 사용하므로, 웹에서 사용하는 기존의 인프라를 그대로 활용 가능하다. HTTP 프로토콜 기반의 로드밸런서(mod_proxy)나, SSL은 물론이고 HTTP가 가진 가장 강력한 특징 중의 하나인 캐싱 기능을 적용할 수 있다. 일반적인 서비스에서 조회 기능이 주로 사용됨을 감안하면, HTTP 리소스들을 웹 캐쉬 서버 등에 캐싱하는 것은 용량이나 성능 면에서 이점이 있다. 캐싱 구현은 HTTP 프로토콜 표준에서 사용하는 Last-Modified 태그나 E-Tag를 이용하면 가능하다.

4.  Self-descriptiveness (자체 표현 구조)  
    동사(Method) + 명사(URI) 로 이루어져있어 어떤 메서드에 무슨 행위를 하는지 알 수 있으며, 메시지 포맷 역시 JSON을 이용해서 직관적으로 이해가 가능한 구조로, REST API 메시지만 보고도 이를 쉽게 이해할 수 있다.

5.  Client - Server 구조  
    REST 서버는 API 제공, 클라이언트는 사용자 인증이나 컨텍스트(세션, 로그인 정보 등)을 직접 관리하는 구조로 각각의 역할이 확실히 구분되기 때문에 클라이언트와 서버에서 개발해야 할 내용이 명확해지고 서로간 의존성이 줄어들게 된다.

6.  계층형 구조  
    API 서버는 순수 비지니스 로직을 수행하고, 그 앞단에 사용자 인증, 암호화(ssl), 로드밸런싱 등을 하는 계층을 추가하여 구조상의 유연상을 둘 수 있다. 이는 간단하게는 HA Proxy나 Apache의 Reverse Proxy를 통해, 더 나아가서는 API gateway 등을 활용하여 Micro Service Architecture로도 구현이 가능하게 한다.

<br/>

#### axios

Axios는 HTTP통신을 하는데 매우 인기있는 Javascript  
Axios는 브라우저와 Node.js 플랫폼에서 모두 사용할 수 있다.  
Axios는 Promise를 기반으로하여 async/await문법을 사용하여 XHR요청을 매우 쉽게 할 수 있다.

Fetch API보다 Axios가 더 좋은 장점

- 구형브라우저를 지원. (Fetch API의 경우는 폴리필 필요)
- 요청을 중단시킬 수 있다.
- 응답 시간 초과를 설정하는 방법이 있다.
- CSRF 보호 기능이 내장
- JSON 데이터 자동변환
- Node.js에서의 사용

<br/>

#### GET 요청

Axios를 사용하는 편한 방법 중 하나는 async/ await 구문을 사용하는 것이다.

이 Node.js 예제는 Dog APi를 사용하여 모든 Dog의 breed 목록을 가져와 axios.get()

```javascript
const axios = require("axios");

const getBreeds = async () => {
  try {
    return await axios.get("https://dog.ceo/api/breeds/list/all");
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = async () => {
  const breeds = await getBreeds();

  if (breeds.data.message) {
    console.log(
      `현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`
    );
  }
};

countBreeds();
```

<br/>

만약 async / await 구문을 사용하지 않는다면 Promise 구문을 사용 할 수 있다.

```javascript
const axios = require("axios");

const getBreeds = () => {
  try {
    return axios.get("https://dog.ceo/api/breeds/list/all");
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = () => {
  const breeds = getBreeds()
    .then(response => {
      if (response.data.message) {
        console.log(
          `현재 강아지의 수는 ${
            Object.entries(breeds.data.message).length
          }입니다.`
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
};

countBreeds();
```

<br/>

**GET 요청에 매개 변수 추가**

Axios를 사용하여 GET 요청시 간단하게 매개변수를 추가 할 수 있다.

```
axios.get('https://test.com/?foo=bar');
```

또는 params옵션에서 추가하여 사용 할 수 있다.

```jsx harmony
axios.get("https://test.com/", {
  params: {
    foo: "bar"
  }
});
```

<br/>

#### POST 요청

axios.post처럼 POST 요청은 axios.getGET 요청과 같이 거의 같다.

```
axios.post('https://test.com');
```

POST 역시 매개변수를 추가하는방법은 GET과 같다.

```
axios.post('https://test.com/', {
  params: {
    foo: 'bar'
  }
});
```

<br/>

<br/>

### Containers & Presenters

<br/>

#### React 디자인 패턴

- Container
  Logic : API Requests, errors etc...

- Presenter
  Data comes from props. No logic. Only UI

<br/>

Derectory

```
my-app
└── src
    └── Screen
        ├── PricesContainer.js
        ├── PricesPresenter.js
        └── index.js
```

index.js

```javascript
import PricesContainer from "./PricesContainer";
export default PricesContainer;
```

PricesContainer.js

```javascript
import React from "react";
import PricesPresenter from "./PricesPresenter";
import { getPrices } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    prices: []
  };
  componentDidMount() {
    this.getPrices();
  }
  getPrices = async () => {
    try {
      const { data: prices } = await getPrices();
      this.setState({
        prices
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    return <PricesPresenter {...this.state} />;
  }
}
```

PricesPresenter.js

```javascript
import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Price from "../../Components/Price";

const PricesPresenter = ({ loading, prices }) =>
  loading ? (
    <Loader />
  ) : (
    prices.map(price => <Price key={price.id} {...price} />)
  );

PricesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  ).isRequired
};

export default PricesPresenter;
```

<br/>

### Reference

- [[React] PropTypes 활용하기](https://medium.com/@sangboaklee/react-proptypes-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-7a0615da236)
- [axios](https://github.com/axios/axios)
- [[Restful API] Rest API란?](https://mangkyu.tistory.com/46)

<br/>

<br/>

# 자바스크립트의 Async/Await 가 Promises를 사라지게 만들 수 있는 6가지 이유

이글은 6 Reasons Why JavaScript’s Async/Await Blows Promises Away (Tutorial)에 대한 번역글입니다. 필요할때 살펴 볼 수 있도록 발췌하여 원문 그대로 사용하였습니다.

<br/>

당신이 잊고 있었는지는 모르겠지만, Node는 7.6 버전부터 async/await 를 별도의 도구없이도 지원하기 시작했다. 아직 async/await를 사용해본 적이 없다면, 이 글을 통해 왜 돌아볼 필요도 없이 바로 이것을 적용해야하는지에 대한 이유들을 예제와 함께 확인해보길 바란다.

[UPDATE]: Node 8 LTS 는 Asnyc/Await를 완벽하게 지원하기로 했다.

[EDIT]: gist에 있는 embedded 코드들은 미디엄 네이티브 앱에서는 동작하지 않는 것으로 보인다, 그렇지만 모바일 브라우저에서는 동작한다. 만약 앱을 통해 이 글을 일고 있다면, share 아이콘을 탭해서, “open in browser”를 선택하여 코드 스니펫들을 확인하기 바란다.

<br/>

## Async/await 101

async/await에 대해 한번도 들어본 적이 없는 사람들을 위해, 간단한 소개글을 준비했다.

- asnyc/await 는 비동기 코드를 작성하는 새로운 방법이다. 이전에는 비동기코드를 작성하기 위해 callback이나 promise를 사용해야 했다.
- asnyc/await 는 실제로는 최상위에 위치한 promise에 대해서 사용하게 된다. Asnyc/await는 plain callback 이나 node callback과 함께 사용할 수 없다.
- async/await는 promise처럼 non-blocking 이다.
- async/await는 비동기 코드의 겉모습과 동작을 좀 더 동기 코드와 유사하게 만들어준다. 이것이 async/await의 가장 큰 장점이다.

<br/>

## 문법

`getJSON`함수를 예로 들어보자. 이 함수는 promise를 반환하고, JSON 오브젝트로 resolve된다. 우리는 간단하게 이 함수를 호출하고, JSON의 로그를 남기고, `"done"`을 반환할 것이다.

다음은 promise를 사용해서 구현한 예이다.

```javascript
const makeRequest = () =>
  getJSON().then(data => {
    console.log(data);
    return "done";
  });

makeRequest();
```

그리고 다음은 async/await를 사용했을 때의 예이다.

```javascript
const makeRequest = async () => {
  console.log(await getJSON());
  return "done";
};

makeRequest();
```

둘 사이에는 몇가지 차이점이 있다.

1. 함수의 앞에 `async` 라는 단어가 오게된다. `await` 키워드는 오직 `async` 로 정의된 함수의 내부에서만 사용될 수 있다. 모든 `async` 함수는 암묵적으로 promise를 반환하고, promise가 함수로부터 반환할 값(예제에서는 `"done"` 이라는 문자열)을 resolve 한다.
2. 위와 같은 점 때문에 우리는 `await` 를 우리 코드의 탑 레벨에서는 사용할 수 없다. `async` 함수 안에 위치한 경우에만 사용이 가능하다.

```javascript
// this will not work in top level
// await makeRequest()

// this will work
makeRequest().then(result => {
  // do something
});
```

3. `await getJSON()` 는 `console.log` 의 호출이 `getJSON()` promise가 resolve된 후에 일어나고, 그 후에 값을 출력할 것이라는 것을 의미한다.

<br/>

<br/>

## 왜 async/await가 더 나은가?

### 1.간결함과 깔끔함

위에서 우리가 줄인 코드량을 보라! 예제를 위해 작성한 위 코드에서 조차 우리가 꽤 많은 양의 코드를 줄인 것이 확연히 드러난다. `.then` 을 추가할 필요가 없었으며, response 를 해결하기 위한 비동기 함수를 만들 필요도 없었고, `data` 란 이름의 변수를 선언하고 사용할 필요도 없어졌다. 우리는 또한 코드의 nesting도 피할 수 있었다. 우리는 이러한 작은 이점들을 얻을 수 있으며, 이러한 이점은 뒤의 예제들을 통해 좀 더 명확하게 보여질 것이다.

<br/>

### 2.에러 핸들링

async/await는 동기와 비동기 에러 모두를 `try/catch`를 통해서 처리할 수 있게 한다. `try/catch` 는 오래되었지만 좋은 접근 방식이다. promise를 사용한 아래 예제에서 `try/catch` 는 `JSON.parse` 가 실패하더라도 동작하지 않을 것이다. promise 안 쪽에서 발생한 에러이기 때문이다. 우리는 promise 상에서 `.catch` 를 호출해야하며, 에러를 처리하는 코드는 중복될 것이며 당신의 production ready 코드 안의 `console.log` 보다 더 복잡해질 것이다.

```javascript
const makeRequest = () => {
  try {
    getJSON().then(result => {
      // this parse may fail
      const data = JSON.parse(result);
      console.log(data);
    });
    // uncomment this block to handle asynchronous errors
    // .catch((err) => {
    //   console.log(err)
    // })
  } catch (err) {
    console.log(err);
  }
};
```

이제 같은 코드를 async/await 상에서 살펴보자. 이번에는 catch 블락이 에러를 파싱할 것이다.

```javascript
const makeRequest = async () => {
  try {
    // this parse may fail
    const data = JSON.parse(await getJSON());
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
```

<br/>

### 3.분기

아래와 같은 코드를 상상해보자. 데이터를 fetch하고 결과를 return 하거나 데이터 안의 값을 이용해서 더 상세한 정보를 가져올 지를 결정하는 코드이다.

```javascript
const makeRequest = () => {
  return getJSON().then(data => {
    if (data.needsAnotherRequest) {
      return makeAnotherRequest(data).then(moreData => {
        console.log(moreData);
        return moreData;
      });
    } else {
      console.log(data);
      return data;
    }
  });
};
```

코드를 보는 것만으로도 머리가 아프다. 메인 promise에서 마지막 결과가 나오기까지 많은 nesting(6 단계)과 대괄호들, return문들이 필요하다. 이런 코드를 읽기란 쉽지 않다.

아래 예제는 async/await를 사용해서 좀 더 가독성을 높인 형태로 재작성되었다.

```javascript
const makeRequest = async () => {
  const data = await getJSON();
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData);
    return moreData;
  } else {
    console.log(data);
    return data;
  }
};
```

<br/>

### 4. 중간값(Intermediate values)

여러분은 개발하면서 다음과 같은 상황에 빠진 적이 있을 것이다. `promise1` 을 호출하고 여기서 return된 값을 사용해서 `promise2` 를 호출하고, `promise3` 을 호출하기 위해 두개의 promise들의 결과를 사용한다. 코드는 아마도 다음과 같을 것이다.

```javascript
const makeRequest = () => {
  return promise1().then(value1 => {
    // do something
    return promise2(value1).then(value2 => {
      // do something
      return promise3(value1, value2);
    });
  });
};
```

만약 `promise3` 이 `value1` 을 요구하지 않았다면 promise들의 nesting을 조금 줄이기 쉬웠을 것이다. 이런 식으로 코드를 작성하고 싶지 않다면, value1 과 value2를 `Promise.all` 로 묶어서 nesting을 조금 피할 수 있다.

```javascript
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return Promise.all([value1, promise2(value1)]);
    })
    .then(([value1, value2]) => {
      // do something
      return promise3(value1, value2);
    });
};
```

이런 식의 접근은 가독성 측면에서 코드의 의미를 희생시켜 버린다. `value1` 과 `value2` 가 배열에 함께 묶여야하는 이유는 오로지 promise nesting을 피하기 위해서다.

같은 로직을 async/await 를 사용해서 구현하면 어이없을 정도로 단순하고 직관적으로 바뀐다. promise들을 덜 혐오스럽게 보이게 하기 위해 썼던 시간과 에너지를 생각하며 내가 뭘 했던건가하고 머리를 쥐어뜯게 될 수도 있다.

```javascript
const makeRequest = async () => {
  const value1 = await promise1();
  const value2 = await promise2(value1);
  return promise3(value1, value2);
};
```

<br/>

### 5. error stack

여러개의 promise들이 하나의 체인으로 선언되는 코드를 상상해보자. 그리고 체인 어딘가에서 error가 throw될 것이다.

```javascript
const makeRequest = () => {
  return callAPromise()
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => {
      throw new Error("oops");
    });
};

makeRequest().catch(err => {
  console.log(err);
  // output
  // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
});
```

promise 체인에서 반환되는 error stack은 어디서 에러가 발생했는 지에 관해 어떤 힌트도 주지 않는다. 더 안 좋은 점은 오해하기 쉽다는 점이다. stack에서 보여주는 유일한 함수 이름은 `callAPromise`이다. 이 함수는 에러와 관련해서 완전히 결백하다.(물론 파일이름과 라인넘버를 통해서 추론이 가능하기는 하지만)

그렇지만 async/await에서 발생한 error stack은 error를 포함한 함수를 가르킨다.

```javascript
const makeRequest = async () => {
  await callAPromise();
  await callAPromise();
  await callAPromise();
  await callAPromise();
  await callAPromise();
  throw new Error("oops");
};

makeRequest().catch(err => {
  console.log(err);
  // output
  // Error: oops at makeRequest (index.js:7:9)
});
```

로컬 환경에서 에디터로 파일을 열어놓고 개발 중인 상황에서는 이런 부분이 큰 도움이 되는 건 아닐 수도 있다. 하지만 상용 서버에서 error log를 파악할 때에는 꽤나 유용할 것이다. 그런 상황에서 makeRequest에서 error가 발생했다는 것을 아는 것은 then 다음 then 다음 then에 error가 발생했다고 아는 것보다 더 유용할 것이다.

<br/>

### 6. 디버깅

마지막이지만 사소하다고 할 수 없는 매우 중요한 장점이다.. async/await를 사용하면 디버깅이 매우 쉬워진다. promise를 디버깅 할 때에는 두가지면에서 고통이 따른다.

1. return 되는 arrow function들에 breakpoint를 잡을 수 없다.

```javascript
//원하는 위치에 breakpoint를 잡을 수 없다
const makeRequest = () => {
  return callAPromise()
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise());
};
```

2. `.then` 블록 안에 breakpoint를 잡고 step-over와 같은 debug shortcuts을 사용하게되면 debugger는 `.then` 을 따라서 움직이지 않는다. 디버그도구가 동기화된 코드를 따라서만 움직이기 때문이다.
   async/await를 사용하게되면 arrow function을 많이 사용할 필요가 없고, 디버그도구는 동기화된 코드를 실행하는 것과 다름없이 동작할 것이다.

```javascript
const makeRequest = async () => {
  await callAPromise();
  await callAPromise();
  await callAPromise();
  await callAPromise();
  await callAPromise();
};
```

<br/>

<br/>

## Reference

[자바스크립트의 Async/Await 가 Promises를 사라지게 만들 수 있는 6가지 이유](https://medium.com/@constell99/자바스크립트의-async-await-가-promises를-사라지게-만들-수-있는-6가지-이유-c5fe0add656c)

---

<br/>
