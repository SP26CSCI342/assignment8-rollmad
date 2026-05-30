import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

export default function SearchBar(props) {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  useEffect(() => {
  if (term) {
    document.title = `PlateScout — Searching for ${term}`;
  } else {
    document.title = 'PlateScout';
    }
  }, [term]);

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.searchYelp(term, location, sortBy);
  };

  const getSortByClass = (sortByOption) => {
    return sortBy === sortByOption ? 'active' : '';
  };

  const renderSortByOptions = () => {
  return Object.keys(sortByOptions).map((option) => {
    const value = sortByOptions[option];

    return (
      <li
        key={value}
        className={getSortByClass(value)}
        onClick={() => handleSortByChange(value)}
      >
        {option}
      </li>
    );
  });
};

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>

      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />

        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>

      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
}