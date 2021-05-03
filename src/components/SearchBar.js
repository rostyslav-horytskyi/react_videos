import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onInputChange = () => {

  };

  render() {
    const { term } = this.state;

    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video search</label>
            <input
              type="text"
              value={term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
