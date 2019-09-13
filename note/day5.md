
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
  1)  Uniform (유니폼 인터페이스)  
  HTTP 표준에만 따른다면, 안드로이드/IOS 플랫폼이든, 특정 언어나 기술에 종속되지 않고 모든 플랫폼에 사용이 가능하며, URI로 지정한 리소스에 대한 조작이 가능한 아키텍처 스타일을 의미한다.
  
  2) Stateless (무상태성)  
  HTTP는 Stateless Protocol 이므로, REST 역시 무상태성을 갖는다. 즉, HttpSession과 같은 컨텍스트 저장소에 상태정보를 따로 저장하고 관리하지 않고, API 서버는 들어오는 요청만을 단순 처리하면 된다. 세션과 같은 컨텍스트 정보를 신경쓸 필요가 없어 구현이 단순해진다.
  
  3) Cacheable (캐시가능)  
  HTTP 기존의 웹 표준을 그대로 사용하므로, 웹에서 사용하는 기존의 인프라를 그대로 활용 가능하다. HTTP 프로토콜 기반의 로드밸런서(mod_proxy)나, SSL은 물론이고 HTTP가 가진 가장 강력한 특징 중의 하나인 캐싱 기능을 적용할 수 있다. 일반적인 서비스에서 조회 기능이 주로 사용됨을 감안하면, HTTP 리소스들을 웹 캐쉬 서버 등에 캐싱하는 것은 용량이나 성능 면에서 이점이 있다. 캐싱 구현은 HTTP 프로토콜 표준에서 사용하는 Last-Modified 태그나 E-Tag를 이용하면 가능하다.
  
  4) Self-descriptiveness (자체 표현 구조)  
  동사(Method) + 명사(URI) 로 이루어져있어 어떤 메서드에 무슨 행위를 하는지 알 수 있으며, 메시지 포맷 역시 JSON을 이용해서 직관적으로 이해가 가능한 구조로, REST API 메시지만 보고도 이를 쉽게 이해할 수 있다.
   
  5) Client - Server 구조  
  REST 서버는 API 제공, 클라이언트는 사용자 인증이나 컨텍스트(세션, 로그인 정보 등)을 직접 관리하는 구조로 각각의 역할이 확실히 구분되기 때문에 클라이언트와 서버에서 개발해야 할 내용이 명확해지고 서로간 의존성이 줄어들게 된다.
  
  6) 계층형 구조  
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
const axios = require('axios');

const getBreeds = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/list/all');
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = async () => {
  const breeds = await getBreeds();
  
  if (breeds.data.message) {
    console.log(`현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`);
  }
};

countBreeds();
```

<br/>

만약 async / await 구문을 사용하지 않는다면 Promise 구문을 사용 할 수 있다.
```javascript
const axios = require('axios');

const getBreeds = () => {
  try {
    return axios.get('https://dog.ceo/api/breeds/list/all');
  } catch (error) {
    console.error(error)
  }
};

const countBreeds = () => {
  const breeds = getBreeds()
  	.then(response => {
      if (response.data.message) {
        console.log(`현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`);
      }
  	})
  	.catch(error => {
      console.log(error);
  	})
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
axios.get('https://test.com/', {
  params: {
    foo: 'bar'
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

---

<br/>

## Homework 
[Day5 템플릿](https://codesandbox.io/s/day-five-blueprint-ubv3d)

[![Video Label](http://img.youtube.com/vi/gBCUJuS5-HU/0.jpg)](https://youtu.be/gBCUJuS5-HU)

<br/>

Extend the Coin Explorer to call the following API endpoints on the following pages:

/(Homepage) https://api.coinpaprika.com/v1/tickers   
/exchanges https://api.coinpaprika.com/v1/exchanges   
/coins https://api.coinpaprika.com/v1/coins   


- Homepage: Show the name of the coin, the symbol and price.
- Exchanges: Show the name of the exchange, description and website link.
- Coins: List the coins and sort them by rank.

<br/>

### Global Requirements:

- Use **Container/Presenter** pattern with class components.   
- **DO NOT use Hooks**. I know they are awesome, we will use them later.   
- ALL PRESENTERS should use **PropTypes**.   
- Use **PropTypes.shape**   
- Use **async/await**   
- All AJAX requests MUST be made with an **AXIOS INSTANCE** ('axios.create')   
- Containers MUST NEVER call Axios directly, they should call the instance.   
- Use a **Loader** Component.   

<br/>

### Submit

`My Answer`
[Day5 Answer](https://codesandbox.io/s/day-five-blueprint-swptw)


<br/>

`correct`
[Day5 Currect](https://codesandbox.io/s/day-five-solution-xoocs)
