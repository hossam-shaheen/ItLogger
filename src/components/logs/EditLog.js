import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { editLog } from '../../data/actions/logActions';
import { getTechs } from '../../data/actions/techActions';

function EditLog({ editLog, currentLog, techs }) {
  const [issueName, setIssueName] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [techName, setTechName] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    M.AutoInit();
    getTechs();

    if (currentLog !== null) {
      setIssueName(currentLog.issueName);
      setIssueDescription(currentLog.issueDescription);
      setTechName(currentLog.techName);
      setStatus(currentLog.status);
    }
    console.log(issueName);
  }, [currentLog]);

  const submitEditLog = (e) => {
    if (issueName === '' || issueDescription === '' || techName === '') {
      M.toast({ html: 'Fill all fields' });
    } else {
      editLog({
        id: currentLog.id,
        issueName,
        issueDescription,
        techName,
        status,
        date: new Date().toString(),
      });
      M.toast({ html: `${issueName} edited successfully` });
    }

    e.preventDefault();
  };

  return (
    <div id="editLog" className="modal">
      <div className="modal-content">
        <h4>Edit Log</h4>
        <form className="col s12">
          <div className="input-field m-top col s12">
            <input
              placeholder="issue name"
              value={issueName}
              onChange={(e) => {
                setIssueName(e.target.value);
              }}
              id="Issue_name"
              type="text"
            />
          </div>

          <div className="input-field m-top col s12">
            <textarea
              id="Issue_description"
              value={issueDescription}
              onChange={(e) => {
                setIssueDescription(e.target.value);
              }}
              placeholder="issue description"
              className="materialize-textarea"
            ></textarea>
          </div>

          <div className="input-field  m-top col s12">
            <select
              className="browser-default"
              value={techName}
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
          <div className="input-field  m-top col s12">
            <p>
              <label>
                <input
                  type="checkbox"
                  value={status}
                  checked={status}
                  onChange={(e) => {
                    setStatus(!status);
                  }}
                />
                <span>Fixed</span>
              </label>
            </p>
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
          onClick={submitEditLog}
        >
          Edit Log
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentLog: state.logs.currentLog,
  techs: state.techs.techs,
});
export default connect(mapStateToProps, { editLog, getTechs })(EditLog);
