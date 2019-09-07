
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

#### axios
Axios는 HTTP통신을 하는데 매우 인기있는 Javascript  
Axios는 브라우저와 Node.js 플랫폼에서 모두 사용할 수 있다.  
Axios는 Promise를 기반으로하여 async/await문법을 사용하여 XHR요청을 매우 쉽게 할 수 있다.     

Fetch API보다 Axios가 더 좋은 장점
- 구형브라우저를 지원. (Fetch API의 경우는 폴리필 필요)
- 요청을 중단시킬 수 있따.
- 응답 시간 초과를 설정하는 방법이 있다.
- CSRF 보호 기능이 내장
- JSON 데이터 자동변환
- Node.js에서의 사용

<br/>

GET 요청
Axios를 사용하는 편한 방법 중 하나는 async/ await 구문을 사용하는 것이다.

이 Node.js예제는 Dog APi를 사용하여 모든 Dog의 breed 목록을 가져와 axios.get() 합니다.

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

만약 async / await 구문을 사용하지 않는다면 Promise 구문을 사용 할 수 있습니다.
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

GET 요청에 매개 변수 추가
GET 응답에는 URL에 매개변수가 포함 될 수 있습니다.

https://test.com/?foo=bar

Axios를 사용하여 GET 요청시 간단하게 매개변수를 추가 할 수 있습니다.
```
axios.get('https://test.com/?foo=bar');
```

또는 params옵션에서 추가하여 사용 할 수 있습니다.
```jsx harmony
axios.get('https://test.com/', {
  params: {
    foo: 'bar'
  }
});
```

POST 요청
axios.post처럼 POST 요청은 axios.getGET 요청과 같이 거의 같습니다.
```
axios.post('https://test.com');
```

POST 역시 매개변수를 추가하는방법은 GET과 같습니다.
```
axios.post('https://test.com/', {
  params: {
    foo: 'bar'
  }
});
```



### Containers & Presenters

<br/>

#### React 디자인 패턴
- Container
Logic : API Requests, errors etc...

- Presenter
Data comes from props. No logic. Only UI


<br/>

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
