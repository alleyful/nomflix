import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from "dotenv";
import App from 'Components/App';

dotenv.config();

console.log(process.env.NODE_ENV)

ReactDOM.render(<App />, document.getElementById('root'));