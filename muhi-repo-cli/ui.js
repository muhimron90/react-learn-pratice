'use strict';
const React = require('react');
const { Newline, useApp, Box, Text, Spacer, Static, useStdin } = require("ink");
const importJsx = require("import-jsx");
const gitcmd = require('./scripts/cmd');
const Title = importJsx("./components/Title");


const App = ({gh }) => {
const { exit } = useApp();
	
	

	return (
		<>
			<Box>
				<Title headerTitle="Welcome.." />
			</Box>
			<Newline />

			<Box flexDirection={"column"} height={3}></Box>

			<Spacer />
			
			
		</>
	);
};

module.exports = App;