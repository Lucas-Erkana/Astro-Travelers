import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/mission';
import './missions.css';

const Mission = (props) => {
  const {
    id, name, description, reserved,
  } = props;

  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(joinMission(id));
  };

  const unsubscribe = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr id={id} className="table-support">
      <td className="mission1 mission-name">{name}</td>
      <td className="mission-description">
        {description}
        {' '}
      </td>
      <td className="mission1 status-name">
        <span className={reserved ? 'yes' : 'not'}>{reserved ? 'Active Member' : 'NOT A MEMBER'}</span>
      </td>
      <td className="mission1 member-name">
        {!reserved ? <button type="button" className="join" onClick={reserve}>Join Mission</button>
          : <button type="button" className="leave" onClick={unsubscribe}>Leave Mission </button>}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
