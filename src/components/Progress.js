import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

const handleUpdateProgress = () => {
  //
};
const ShowProgress = ({ completedPercent, currentChapter, handleUpdateProgress }) => (
  <div className="showProgress">
    <div className="showCompleted">
      <CircularProgressBar percent={completedPercent} fontSize="1rem" size={100} />
      <div>
        <p>{`${completedPercent}%`}</p>
        <p>Completed</p>
      </div>
    </div>
    <hr style={{
      border: 'none', height: '70px', width: '3px', background: '#f1f1f1', margin: '0 20px',
    }}
    />
    <div className="progress">
      <p className="showCurrentChapter">Current Chapter</p>
      <p className="currentChapter">{currentChapter}</p>
      <button type="button" className="progress-btn" onClick={handleUpdateProgress}>Update Progress</button>
    </div>
  </div>
);

ShowProgress.defaultProps = {
  handleUpdateProgress,
};

ShowProgress.propTypes = {
  completedPercent: PropTypes.number.isRequired,
  currentChapter: PropTypes.string.isRequired,
  handleUpdateProgress: PropTypes.func,
};

export default ShowProgress;
