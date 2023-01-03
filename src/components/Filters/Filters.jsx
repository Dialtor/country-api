import React, { useState } from 'react';
import styles from './styles/Filters.module.css';

const Filters = ({setSearchCountry, setSelected}) => {

	const options = [
    {value: '', text: '--Choose an Region--'},
    {value: 'africa', text: 'Africa'},
    {value: 'americas', text: 'Americas'},
    {value: 'asia', text: 'Asia'},
    {value: 'europe', text: 'Europe'},
    {value: 'oceania', text: 'Oceania'},
  ];



	const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

	return (
		<div className={styles.filters}>
			<input type="text" placeholder='Search country' onChange={(e) => setSearchCountry(e.target.value) } />
			<select name="select region" id="" onChange={handleChange}>
				{options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
			</select>
		</div >
	)
};

export default Filters;
