
# Day12
> 오늘의 강의: 없습니다.  
  오늘의 과제: 아래 코드 챌린지를 제출하면 됩니다.  
  이번 챌린지는 1일간 진행되는 챌린지 입니다.
 
<br/>

---

<br/>

## Homework 
[Day12 템플릿](https://codesandbox.io/s/day-six-solution-6n2q7)

Take the boilerplate and turn refactor it to use hooks 100%

### Requirements:
- Don't use Class Components.
- Use only hooks.
- No Container/Presenter.
- All functionality should remain the same.


<br/>

### Submit

`My Answer`
[Day12 Answer](https://codesandbox.io/s/day-six-solution-0vhns)

<br/>

`Container/Presenter use Class Component`
```javascript
// index.js
import PricesContainer from "./PricesContainer";
export default PricesContainer;

// PricesContainer.js
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

// PricesPresenter.js
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

`use Hooks`
```javascript
import React, { useState, useEffect } from "react";
import { getPrices } from "../../api";
import Loader from "../../Components/Loader";
import Price from "../../Components/Price";

export default () => {
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState([]);

  const getPrice = async () => {
    try {
      const { data: prices } = await getPrices();
      setPrices(prices);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        prices.map(price => <Price key={price.id} {...price} />)
      )}
    </>
  );
};

```

<br/>

`correct`
[Day12 Currect](https://codesandbox.io/s/day-eight-solution-0210c)
