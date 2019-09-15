
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

### Directory

```
my-app
└── src
    └── Screen
        └── Coin
            ├── CoinContainer.js   
            ├── CoinPresenter.js   
            └── index.js
```

<br/>

### index.js
```jsx harmony
import CoinContainer from "./CoinContainer";
export default CoinContainer;
```

<br/>

### CoinContainer.js
```jsx harmony
import React from "react";
import CoinPresenter from "./CoinPresenter";
import { getCoinDetail } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    coin: null
  };
  getCoin = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    try {
      const { data: coin } = await getCoinDetail(id);
      this.setState({
        coin
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.getCoin();
  }
  render() {
    return <CoinPresenter {...this.state} />;
  }
}
```

<br/>

### CoinPresenter.js
```jsx harmony
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Route, Link, withRouter } from "react-router-dom";
import Loader from "../../Components/Loader";
import Markets from "../Markets";
import Exchanges from "../CoinExchanges";

const Title = styled("h1")``;

const Description = styled("p")`
  margin: 30px 0px;
`;

const KeyValueRow = styled("div")`
  margin-bottom: 5px;
`;

const Key = styled("span")`
  font-weight: 600;
`;

const Value = styled("span")``;

const InsideMenu = styled("div")`
  margin: 20px 0px;
`;

const List = styled("ul")`
  display: flex;
`;

const Item = styled("li")`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #1abc9c;
  padding: 5px;
  border-radius: 3px;
  background-color: ${props => (props.active ? "#1abc9c" : "transparent")};
  color: ${props => (props.active ? "white" : "black")};
`;

const CoinPresenter = withRouter(({ location: { pathname }, loading, coin }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Title>
        {coin.name} / {coin.symbol}
      </Title>
      <Description>{coin.description}</Description>
      <KeyValueRow>
        <Key>Rank:</Key> <Value>{coin.rank}</Value>
      </KeyValueRow>
      <KeyValueRow>
        <Key>Open Source:</Key> <Value>{coin.open_source ? "Yes" : "No"}</Value>
      </KeyValueRow>
      <KeyValueRow>
        <Key>Proof Type:</Key> <Value>{coin.proof_type}</Value>
      </KeyValueRow>
      <KeyValueRow>
        <Key>Structure:</Key> <Value>{coin.org_structure}</Value>
      </KeyValueRow>
      <InsideMenu>
        <List>
          <Item active={pathname === `/coins/${coin.id}/markets`}>
            <Link to={`/coins/${coin.id}/markets`}>Markets</Link>
          </Item>
          <Item active={pathname === `/coins/${coin.id}/exchanges`}>
            <Link to={`/coins/${coin.id}/exchanges`}>Exchanges</Link>
          </Item>
        </List>
      </InsideMenu>
      <Route path="/coins/:id/markets" component={Markets} />
      <Route path="/coins/:id/exchanges" component={Exchanges} />
    </>
  )
);

CoinPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    open_source: PropTypes.bool.isRequired,
    proof_type: PropTypes.string.isRequired,
    org_structure: PropTypes.string.isRequired
  })
};

export default CoinPresenter;
```

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
