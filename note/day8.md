
# Day8 ~ 9
> 오늘의 강의: #6.8 ~ #6.9  
  오늘의 과제: 위의 강의들을 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.  
  이번 챌린지는 2일간 진행되는 챌린지 입니다.


<br/>

[[멤버십] 초보를 위한 React JS](https://academy.nomadcoders.co/courses/436641/lectures/8467057)   
- 6.8 Detail Container part One
- 6.9 Detail Container part Two

<br/>

---

<br/>

## Lecture Summery


<br/>
<br/>


### Reference


<br/>

---

<br/>

## Homework 
[Day8 템플릿](https://codesandbox.io/s/day-five-solution-xoocs)

[![Video Label](http://img.youtube.com/vi/A7Zn8o-JL5Q/0.jpg)](https://youtu.be/A7Zn8o-JL5Q)

<br/>

Extend the Coin Explorer to create a detail view of each coin. You have to make the following URLs on your existing app.

1. /coins/{coin_id} `https://api.coinpaprika.com/v1/coins/{coin_id}`
2. /coins/{coin_id}/exchanges `https://api.coinpaprika.com/v1/coins/{coin_id}/exchanges`
3. /coins/{coin_id}/markets `https://api.coinpaprika.com/v1/coins/{coin_id}/markets`

Documentation: `https://api.coinpaprika.com/?ref=public-apis#operation/getCoinById`

- **Coin Markets & Coin Exchanges**: These two **ROUTES** should be inside of the Coin Detail. 

<br/>

### Global Requirements:

- Use **Container/Presenter** pattern with **class** components.
- **DO NOT** use **Hooks**. I know they are awesome, we will use them later.
- **ALL PRESENTERS** should use **PropTypes**.
- Use **PropTypes.shape**
- Use **async/await**
- All AJAX requests MUST be made with an **AXIOS INSTANCE** ('axios.create')
- Containers MUST NEVER call Axios directly, they should call the instance.
- Use a **Loader** Component.
- Coin Markets and Coin Exchanges should be **ROUTES**. 


<br/>

### Submit

`My Answer`
[Day8 Answer](https://codesandbox.io/s/day-five-solution-2wr12)


<br/>

`correct`
[Day8 Currect](https://codesandbox.io/s/day-six-solution-6n2q7)
