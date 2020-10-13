import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaSearchLocation } from 'react-icons/fa';
import { setLocation } from '../state/actions';
import CurrentLocation from './CurrentLocation';

const AppSearch = styled.input`
  border-radius: 0.5em;
  color: black;
  height: 2.5em;
  font-size: 1em;
  width: 10em;
`;

const StyledIcon = styled.button`
  font-size: 32px;
  height: 1.25em;
  width: 1.25em;
  margin: 0 0.25em;
  background: none;
  border: none;
  color: white;
  font-size: x-large;
`;

const SearchWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1em;
`;

/**
 * Search Component
 * @param {object} props - Component props
 * @returns {JSX} react component
 */
const Search = React.memo(({ dispatch, zipcode = '' }) => {
  const [zip, setZip] = useState(zipcode);

  /**
   * Sets zipcode for given zip and updates the state
   */
  useEffect(() => {
    setZip(zipcode);
  }, [zipcode]);

  const onZipcodeChange = (e) => setZip(e.target.value);

  /**
   * gets the value of the location entered
   * @param {*} e
   */
  const searchLocation = (e) => {
    e.preventDefault();
    dispatch(setLocation({ latitude: '', longitude: '', zipcode: zip }));
  };

  return (
    <SearchWrapper onSubmit={searchLocation}>
      <AppSearch type="number" placeholder="Search Zip" min="1" max="99999" required onChange={onZipcodeChange} value={zip} />
      <StyledIcon type="submit" data-testid="search-button">
        <FaSearchLocation />
      </StyledIcon>
      <CurrentLocation dispatch={dispatch} />
    </SearchWrapper>
  );
});

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  zipcode: PropTypes.string,
};

Search.defaultProps = {
  zipcode: '',
};

export default Search;
