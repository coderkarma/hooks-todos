import React from 'react';
import useInputState from './hooks/useInputState';

import { TextField, Paper } from '@material-ui/core';

const TodoForm = props => {
	const [ value, handleChange, reset ] = useInputState('');

	return (
		<Paper>
			{value}
			<TextField value={value} onChange={handleChange} />
		</Paper>
	);
};

export default TodoForm;
