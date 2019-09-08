
# Day13
> 오늘의 강의: 없습니다.  
  오늘의 과제: 아래 코드 챌린지를 제출하면 됩니다.  
  이번 챌린지는 1일간 진행되는 챌린지 입니다.
 
<br/>

---

<br/>

## Homework 
[Day13 템플릿](https://codesandbox.io/s/day-seven-blueprint-xrfub)

Using everything that you know, create a page that calls an API with infinite scrolling.
It should behave like this:

[![Video Label](http://img.youtube.com/vi/WA6LayBsoxc/0.jpg)](https://youtu.be/WA6LayBsoxc)

API Documentation: https://yts.lt/api#list_movies

**Clues:**   
This is how I would make the API file.   
The URL would end up looking something like this:   
https://yts.lt/api/v2/list_movies.json?page=1&limit=50

<br/>

```javascript
import axios from 'axios';

const api = axios.create({baseURL: "https://tys.lt/api/v2"});

export const getMovies = (page = 1) => 
    api.get("/list_movies.json", {params: { page, limit: 50 } });
```

<br/>

### Requirements:
- Don't use Class Components.
- Use only hooks.
- When the user reaches the end of the page, request more movies (other page)
- No Container/Presenter.
- All functionality should remain the same.


<br/>

### Submit

`My Answer`
[Day13 Answer](https://codesandbox.io/s/day-seven-blueprint-jx0mh)

<br/>

```javascript
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getMovies } from "./api";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const [offset, setOffset] = useState();
  const [height, setHeight] = useState();

  const dom = document.documentElement;

  const getMovie = async page => {
    try {
      const {
        data: {
          data: { movies }
        }
      } = await getMovies(page);
      setMovies([...movie, ...movies]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onScroll = () => {
    setOffset(dom.scrollTop + window.innerHeight);
    setHeight(dom.offsetHeight);
    offset === height && setPage(page + 1);
  };

  useEffect(() => {
    getMovie(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <h1>Infinite Movies / Page {page}</h1>
      {loading ? (
        "...loading"
      ) : (
        <ul>
          {movie &&
            movie.length > 0 &&
            movie.map(v => <li key={v.id}>{v.title}</li>)}
        </ul>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

<br/>

`correct`
[Day13 Currect](https://codesandbox.io/s/day-nine-solution-6pwcl)
