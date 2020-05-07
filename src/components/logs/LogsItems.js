import React from 'react';
import M from 'materialize-css';
import Moment from 'react-moment';

export default function LogsItems({ log, deleteLog, setCurrentLog }) {
  return (
    <li className="collection-item avatar">
      <i
        className={`material-icons circle ${
          log.status === 'true' ? 'green' : 'red'
        }`}
      >
        insert_chart
      </i>
      <a
        onClick={(e) => {
          setCurrentLog(log);
          e.preventDefault();
        }}
        className="modal-trigger tooltipped"
        data-position="bottom"
        data-tooltip="Edit Issue status"
        href="#editLog"
      >
        {log.issueName}
      </a>
      <p>{log.issueDescription}</p>
      <ul>
        <li>assigned to: {log.techName}</li>
        <li>
          Issued date:
          <Moment fromNow ago>
            {log.date}
          </Moment>
        </li>
      </ul>
      <a href="#!" className="secondary-content">
        <i
          onClick={(e) => {
            deleteLog(log.id);
            M.toast({
              html: `${log.issueName} deleted successfully`,
            });
            e.preventDefault();
          }}
          className="material-icons tooltipped"
          data-position="bottom"
          data-tooltip="Delete Issue"
        >
          delete
        </i>
      </a>
    </li>
  );
}
