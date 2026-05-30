import React, { useState } from 'react';
import './HomePage.css';

import SearchBar from '../components/SearchBar/SearchBar.jsx';
import BusinessList from '../components/BusinessList/BusinessList.jsx';
import Subscription from '../components/Subscription/Subscription.jsx';
import Footer from '../components/Footer/Footer.jsx';

import searchBusinesses from '../util/yelp';

function HomePage() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchYelp = async (term, location, sortBy) => {
    setLoading(true);
    setError(null);

    try {
      const businesses = await searchBusinesses(term, location, sortBy);

      setBusinesses(businesses);
    } catch (error) {
      setError('Something went wrong while searching Yelp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>PlateScout</h1>

      <SearchBar searchYelp={searchYelp} />

      {loading ? (
        <p className="HomePage-status">Loading...</p>
      ) : error ? (
        <p className="HomePage-status HomePage-status--error">
          {error}
        </p>
      ) : (
        <BusinessList businesses={businesses} />
      )}

      <Subscription />

      <Footer />
    </>
  );
}

export default HomePage;
