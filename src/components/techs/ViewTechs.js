import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs, deleteTech } from '../../data/actions/techActions';
import TechsItems from './TechsItems';

function ViewTechs({ techs, error, getTechs, deleteTech }) {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="viewTech" className="modal">
      <div className="modal-content">
        <h4>Techs</h4>
        <ul className="collection with-header">
          {techs.map((tech) => (
            <TechsItems key={tech.id} tech={tech} deleteTech={deleteTech} />
          ))}
        </ul>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="btn red modal-close waves-effect waves-green btn-flat"
        >
          close
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  techs: state.techs.techs,
  error: state.techs.error,
});

export default connect(mapStateToProps, { getTechs, deleteTech })(ViewTechs);
