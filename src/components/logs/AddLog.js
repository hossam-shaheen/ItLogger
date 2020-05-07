import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { addNewLog } from '../../data/actions/logActions';
import { getTechs } from '../../data/actions/techActions';

function AddLog({ addNewLog, getTechs, techs }) {
  const [issueName, setIssueName] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [techName, setTechName] = useState('');

  useEffect(() => {
    getTechs();
    M.AutoInit();
    console.log(techs);
  }, []);
  console.log(techs);
  const submitLog = (e) => {
    if (issueName === '' || issueDescription === '') {
      M.toast({ html: 'Fill all fields' });
    } else {
      addNewLog({
        issueName,
        issueDescription,
        techName,
        status: false,
        date: new Date().getTime(),
      });

      setIssueName('');
      setIssueDescription('');
      setTechName('');
      M.toast({ html: `${issueName} added successfully` });
    }
    e.preventDefault();
  };

  return (
    <div id="addLog" className="modal">
      <div className="modal-content">
        <h4>Add Logs</h4>
        <form className="col s12">
          <div className="input-field m-top col s12">
            <input
              placeholder="issue name"
              onChange={(e) => {
                setIssueName(e.target.value);
              }}
              value={issueName}
              id="Issue_name"
              type="text"
            />
          </div>

          <div className="input-field m-top col s12">
            <textarea
              id="Issue_description"
              onChange={(e) => {
                setIssueDescription(e.target.value);
              }}
              value={issueDescription}
              placeholder="issue description"
              className="materialize-textarea"
            ></textarea>
          </div>
          <div className="input-field m-top col s12">
            <select
              value={techName}
              className="browser-default"
              onChange={(e) => {
                setTechName(e.target.value);
              }}
            >
              {techs !== null &&
                techs.map((tech) => (
                  <option
                    key={tech.id}
                    value={`${tech.firstName} ${tech.lastName}`}
                  >
                    {tech.firstName} {tech.lastName}
                  </option>
                ))}
            </select>
          </div>
        </form>
      </div>
      <div className="modal-footer  m-top">
        <a
          href="#!"
          className="modal-close btn red waves-effect waves-green btn-flat"
        >
          close
        </a>

        <a
          href="#!"
          className="modal-close green btn waves-effect waves-green btn-flat"
          onClick={submitLog}
        >
          Add Log
        </a>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  techs: state.techs.techs,
});
export default connect(mapStateToProps, { addNewLog, getTechs })(AddLog);
