import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../layout/Loader';
import {
  getLogs,
  deleteLog,
  setCurrentLog,
} from '../../data/actions/logActions';
import LogsItems from './LogsItems';

function Logs({ getLogs, deleteLog, setCurrentLog, logs, loading, error }) {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);
  console.log(logs, loading, error);
  return (
    <>
      <h4>List of logs ...</h4>
      {logs.length === 0 && loading === false && 'No Issues Founded'}
      {logs.length > 0 && loading === false ? (
        <ul className="collection">
          {logs.map((log) => (
            <LogsItems
              key={log.id}
              log={log}
              deleteLog={deleteLog}
              setCurrentLog={setCurrentLog}
            />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  loading: state.logs.loading,
  logs: state.logs.logs,
  error: state.logs.error,
});
export default connect(mapStateToProps, { getLogs, deleteLog, setCurrentLog })(
  Logs
);
