import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {SearchHeader, SearchForm, SearchButton,  SearchInput } from './Searchbar.styled';
  
 


export const Searchbar = ({onSubmit}) => {
 const [searchQuery, setSearchQuery] = useState('');

const  onInputChange = evt => {
  setSearchQuery( evt.currentTarget.value.toLowerCase());
  };

 const onFormSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Please, enter your search query. ', {
        position: 'top-right',
        autoClose: 3500,
      }); 
    }
  onSubmit(searchQuery);
  setSearchQuery('');
  };
    return (
      <SearchHeader>
        <SearchForm onSubmit={onFormSubmit}>
          <SearchButton type="submit">
            <BiSearchAlt size={30} /> <span>Search</span>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={onInputChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
