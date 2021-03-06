import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import SearchResult from '../search-result/search-result.component';

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
	const history = useHistory();

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

	const getSuggestionValue = (result) => result.original_title;

	const renderSuggestion = (result) => <SearchResult result={result} />;

	return (
		<div className='searchbar'>
			<Autosuggest
				suggestions={results}
				inputProps={inputProps}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={() => clearSearchResults()}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				onSuggestionSelected={(event, { suggestion, method }) => {
					if (method.toLowerCase() === 'enter') {
						history.push(`/movies/${suggestion.id}`);
					}
				}}
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
