
"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const chalk = require('chalk');
const figlet = require("figlet");
const Title = ({headerTitle}) => {
	function fig(args) {
		figlet(
			args,
			{
				font: "Ogre",
				horizontalLayout: "default",
				verticalLayout: "default",
				width: "default",
				whitespaceBreak: false,
			},
			(err, data) => {
				if (err) {
					console.log(chalk.whiteBright.bgRed("oops! something wrong!"));
					return;
				}
				console.log(chalk.green.bold(data));
			}
		);
	}

	return (
		<Box>
			<Text>{fig(headerTitle)}</Text>
		</Box>
	);
};

module.exports = Title;
