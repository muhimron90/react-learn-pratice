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
	--git , -gh 
	{
		flags : {
			github:{
				type : 'boolean',
				alias: 'gh'
			}
		}
	}	
	

`);

render(React.createElement(ui,cli.input[0], cli.flags));
