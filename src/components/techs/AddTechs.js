import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { addNewTech } from '../../data/actions/techActions';

function AddTechs({ addNewTech }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    M.AutoInit();
  }, []);

  const submitTechs = (e) => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Fill all fields' });
    } else {
      addNewTech({
        firstName,
        lastName,
      });
      setFirstName('');
      setLastName('');
      M.toast({ html: 'tech added successfully' });
    }
    e.preventDefault();
  };

  return (
    <div id="addTech" className="modal">
      <div className="modal-content">
        <h4>Add Tech</h4>
        <form className="col s12">
          <div className="input-field m-top col s12">
            <input
              placeholder="first name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
              id="First_name"
              type="text"
            />
          </div>
          <div className="input-field m-top col s12">
            <input
              placeholder="Last name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
              id="Last_name"
              type="text"
            />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="btn red modal-close waves-effect waves-green btn-flat"
        >
          Agree
        </a>

        <a
          href="#!"
          className="modal-close green btn waves-effect waves-green btn-flat"
          onClick={submitTechs}
        >
          Add new tech
        </a>
      </div>
    </div>
  );
}

export default connect(null, { addNewTech })(AddTechs);
