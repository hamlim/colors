var css = require("!style!css!sass!./assets/css/src/main.scss");

import React from 'react'
import ReactDOM from 'react-dom'
import { Header, Main, Footer } from './assets/js/components'
// import App from './assets/js/app'


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));