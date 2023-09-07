import { GoSearch } from "react-icons/go";
import { Component } from "react";
import toast from 'react-hot-toast';
import { SearchbarHeader, SearchForm, SearchFormBtn,  SearchFormInput } from "./Searchbar.styled"
export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleValueChange = evt => {
    this.setState({ value: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { value } = this.state;
    if (value.trim() === '') {
      return toast.error('Please wright your request', {
        icon: '👈',
      });
    }
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    const onChange = this.handleValueChange;
    const onSubmit = this.handleSubmit;

  return( <SearchbarHeader>
    <SearchForm onSubmit={onSubmit}>
      <SearchFormBtn type="submit" >
        <span><GoSearch size={25} /></span>
      </SearchFormBtn>

      <SearchFormInput
        type="text"
        placeholder="Search images and photos"
        name="query"
        value={value}
        autoComplete="off"
        autoFocus
        onChange={onChange}
      />
    </SearchForm>
  </SearchbarHeader>)
  }
}