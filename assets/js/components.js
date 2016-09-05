import React from 'react'


export class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<h1>Colors</h1>
				<h2>A selection of handpicked colors</h2>
			</header>
		);
	}
};

export class Main extends React.Component {
	render() {
		return (
			<main className="main">
				{this.props.colors.map(function(color, index){
					console.log(color);
					var customStyle = {
						backgroundColor: color.hex
					};
      		return <h3 className="color escape--default" style={customStyle} key={ index }><span className="label">{color.hex}</span></h3>;
    		})}
			</main>
		);
	}
};

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<p className="escape--default">&copy; 2016 <a href="https://matthamlin.me" className="link">Matt Hamlin</a></p>
			</footer>
		);
	}
};