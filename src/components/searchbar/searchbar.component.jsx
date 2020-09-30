import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectIsLoading,
	selectQuery,
	selectResults,
} from '../../redux/search/search.selectors';
import {
	setQuery,
	clearSearchResults,
	fetchSearchResultsStart,
} from '../../redux/search/search.actions';

import './searchbar.styles.scss';

const Searchbar = ({
	query,
	results,
	setQuery,
	clearSearchResults,
	fetchSearchResults,
}) => {
	// Handle input change
	const handleChange = (_event, { newValue }) => {
		setQuery(newValue);
	};

	// Autosuggest will pass through all these props to the input.
	const inputProps = {
		placeholder: 'Search movies...',
		value: query,
		onChange: handleChange,
	};

	// Populate search results
	const onSuggestionsFetchRequested = ({ value }) => {
		if (!value) {
			clearSearchResults();
		}
		fetchSearchResults(value);
	};

	const getSuggestionValue = (result) => ({
		id: result.id,
		title: result.original_title,
	});

	const renderSuggestion = (result) => {
		const { id, title } = result;
		return (
			<div className='test'>
				<a href={`/movies/${id}`}>{title}</a>
			</div>
		);
	};

	return (
		<div>
			<Autosuggest
				suggestions={results}
				inputProps={inputProps}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={() => clearSearchResults()}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
			/>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsLoading,
	query: selectQuery,
	results: selectResults,
});

const mapDispatchToProps = (dispatch) => ({
	setQuery: (query) => dispatch(setQuery(query)),
	clearSearchResults: () => dispatch(clearSearchResults()),
	fetchSearchResults: (query) => dispatch(fetchSearchResultsStart(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
