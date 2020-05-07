import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { logSearch } from '../../data/actions/logActions';

function Search({ logSearch }) {
  const text = useRef();
  return (
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              ref={text}
              onChange={(e) => {
                logSearch(text.current.value);
                console.log(text);
                e.preventDefault();
              }}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default connect(null, { logSearch })(Search);
