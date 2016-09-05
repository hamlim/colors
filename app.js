var css = require("!style!css!sass!./assets/css/src/main.scss");

import React from 'react'
import ReactDOM from 'react-dom'
import { Header, Main, Footer } from './assets/js/components'
// import App from './assets/js/app'


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));


fetch( 'https://boilerplate-dhpkgfwgrp.now.sh/', {// 'https://tonicdev.io/matthamlin/colors-api/branches/master', {
	mode: 'cors',
	method: "GET",
  headers: {
    "Accept": "application/json"
  }
}).then(function(resp){
	console.log(resp);
	return resp.json();
}).then(function(colors) {
	ReactDOM.render(<Main colors={colors.colors}/>, document.getElementById('main'));
	return true;
}).catch(function(error) {
	console.log(error);
	return false;
});