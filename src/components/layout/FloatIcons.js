import React from 'react';

export default function FloatIcons() {
  return (
    <div className="fixed-action-btn">
      <a className="btn-floating btn-large red">
        <i
          className="large material-icons modal-trigger tooltipped"
          data-position="left"
          data-tooltip="Add new issue"
          href="#addLog"
        >
          add
        </i>
      </a>
      <ul>
        <li>
          <a
            className="large material-icons btn-floating yellow modal-trigger tooltipped"
            data-position="left"
            data-tooltip="View Techs"
            href="#viewTech"
          >
            <i className="material-icons">person</i>
          </a>
        </li>

        <li>
          <a
            className="large material-icons btn-floating green modal-trigger tooltipped"
            data-position="left"
            data-tooltip="Add new tech"
            href="#addTech"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
}
