import React from 'react'


export class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<h1>boilerplate</h1>
				<h2>A simple webpack based set of files/settings to help you quickly start a website</h2>
			</header>
		);
	}
};

export class Main extends React.Component {
	render() {
		return (
			<main className="main">
				<article className="article">
					<section className="lead">
						<h3>About boilerplate:</h3>
						<p>
							I made boilerplate to satisfy my need for a basic default when I want to start a website. Before this I had worked on Basi.css which was really just a custom css file that could be dropped into any project and would help with prototyping. boilerplate is a bit different, it serves as the default, so you can pull in boilerplate when starting and build your site around it. The css is all meant to be hacked on and extended, the defaults are all really primative also. (Heck the reset's are just setting every element to <code>box-sizing: border-box</code> and setting <code>margin: 0; padding: 0</code>.)
						</p>
						<p>
							This is still very early on in it's lifecycle, so if you notice any issues that should be fixed, or have some additions to add to the project that submit a pull request <a className="link" href="https://github.com/hamlim/boilerplate">here.</a>
						</p>
					</section>
					<section className="opinionated">
						<h3>Opinionated:</h3>
						<p>
							Lets get one thing clear, if you are using this project to start a website, you should know that this is very opinionated.
						</p>
					</section>
					<section className="how-to">
						<h3>How do I use it?</h3>
						<p>
							Well to be honest I am not 100% sure, I think you can simply clone this <a href="https://github.com/hamlim/boilerplate" className="link">repository</a> and then run:
						</p>
						<pre><code>npm install</code></pre>
						<p>and follow that with a </p>
						<pre><code>npm run webpack</code></pre>
						<p>but I am really not sure. ¯\_(ツ)_/¯</p>
					</section>
				</article>
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