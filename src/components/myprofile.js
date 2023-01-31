import React from 'react';
import { useSelector } from 'react-redux';
import './myprofiles.css';
import './myprofile.css';
import styles from './myprofile.module.css';

function Myprofile() {
  const missionsData = useSelector((state) => state.missions);
  const rocketsData = useSelector((state) => state.rockets);

  return (
    <div className={styles.profile_container}>
      <div className="rocket-contain">
        <h2>My Rockets</h2>
        <ul className="table1">
          {rocketsData.map((rocket) => {
            if (rocket.reserved) {
              return <li className="data" key={rocket.id}>{rocket.name}</li>;
            }
            return '';
          })}
        </ul>
      </div>
      <div className="container">
        <h2 className="Mymish">My Missions</h2>
        <ul className="containers">
          {missionsData.map((mission) => {
            if (mission.reserved) {
              return <li className="missionList" key={mission.id}>{mission.name}</li>;
            }
            return '';
          })}
        </ul>
      </div>

    </div>
  );
}
export default Myprofile;
