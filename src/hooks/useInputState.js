import { useState } from 'react';

export default initialVal => {
	// exporting deafult
	const [ value, setValue ] = useState(initialVal);

	const handleChange = e => {
		setValue(e.target.value);
	};
	const reset = () => {
		setValue('');
	};

	return [ value, handleChange, reset ];
};
