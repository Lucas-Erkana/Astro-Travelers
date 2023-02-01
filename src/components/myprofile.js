import React from 'react';
import { useSelector } from 'react-redux';
import './myprofiles.css';
import './myprofile.css';
import styles from './myprofile.module.css';

const Myprofile = () => {
  const missionsData = useSelector((state) => state.missions);
  const rocketsData = useSelector((state) => state.rockets);

  const reservedRockets = rocketsData.filter((rocket) => rocket.reserved);
  const joinedMissions = missionsData.filter((mission) => mission.reserved);

  return (
    <div className={styles.profile_container}>
      <div className="rocket-contain">
        <h2>My Rockets</h2>
        <ul className="table1">
          {reservedRockets.map((rocket) => (
            <li className="data" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
      <div className="container">
        <h2 className="Mymish">My Missions</h2>
        <ul className="containers">
          {joinedMissions.map((mission) => (
            <li className="missionList" key={mission.id}>{mission.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Myprofile;
