import React, { Component } from 'react';

class SearchInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  handleInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSearch = () => {
    // Add search functionality here
  }

  render() {
    return (
      <div className="search-input">
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchInputComponent;
