import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    const { onFormSubmit } = this.props;

    onFormSubmit(this.state.term);
  };

  render() {
    const { term } = this.state;

    return (
      <div className="search-bar ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
        >
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
