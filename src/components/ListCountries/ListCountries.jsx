import React from 'react';
import styles from './styles/ListCountries.module.css';

const ListCountries = ({countries, searchCountry, selected}) => {
	return (
		<div className={styles.listcountries}>
			{
				countries.filter(item => item.region.toLowerCase() === selected.toLowerCase()).map((country, index) => {
					if (country.name.common.toLowerCase().includes(searchCountry.toLowerCase())) {
						return (
							<div className={styles.item_country}>
								<img src={country.flags.svg} alt="" width={120} />
								<h3>{country.name.common}</h3>
								<p>Population: {country.population}</p>
								<p>Region: {country.region}</p>
								<p>Capital: {country.capital}</p>
							</div>
						)
					}
					
				})
			}

			{
				selected === '' && countries.map((country, index) => (
					<div className={styles.item_country}>
					<img src={country.flags.svg} alt="" width={120} />
					<h3>{country.name.common}</h3>
					<p>Population: {country.population}</p>
					<p>Region: {country.region}</p>
					<p>Capital: {country.capital}</p>
				</div>
				))
			}
		</div>
	)
};

export default ListCountries;
