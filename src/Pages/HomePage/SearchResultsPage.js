import React from 'react';
import './SearchResultsPage.css';
import ListingSearchPage from '../../components/ListingSearchPage/ListingSearchPage';
import SearchBox from '../../components/Search/SearchBox';
import FilterSection from '../../components/FilterSection/FilterSection';
// import StandardHeaderSearch from '../../components/StandardHeaderSearch/StandardHeaderSearch';


function SearchResultsPage() {
  return (
    <div>
    {/* <StandardHeaderSearch /> */}
    <SearchBox />
    <FilterSection />
    <ListingSearchPage />
    </div>
  );
}

export default SearchResultsPage 
