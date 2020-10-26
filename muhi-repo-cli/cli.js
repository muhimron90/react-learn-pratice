#!/usr/bin/env node
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const {render} = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ muhi-repo-cli

	Options
		--name, -n  Your name
		--fullname, -fl Your fullname
		--git , -gh
	Examples
	  $ muhi-repo-cli --name=Jane
		Hello, Jane


`);

render(React.createElement(ui, cli.flags));
