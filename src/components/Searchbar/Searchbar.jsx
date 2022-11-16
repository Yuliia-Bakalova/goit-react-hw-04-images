import { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {SearchHeader, SearchForm, SearchButton,  SearchInput } from './Searchbar.styled';
  
 


export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onInputChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please, enter your search query. ', {
        position: 'top-right',
      });
      this.setState({ searchQuery: '' });
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchButton type="submit">
            <BiSearchAlt size={30} /> <span>Search</span>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.onInputChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
