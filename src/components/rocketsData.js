import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketSlice';
import './rockets.css';

const RocketsData = (props) => {
  const dispatch = useDispatch();
  const {
    name, description, img, id, reserved,
  } = props;

  return (
    <div className="rocket-card">
      <div className="rocket-card-row">
        <img className="rocket-img" src={img} alt="rocket pic" />

        <div className="list">
          <h3 className="title">{name}</h3>
          <p className="paragraph">
            {reserved && <span className="reserved">Reserved</span>}
            {description}
          </p>
          {reserved ? (
            <button
              className="cancel-btn"
              type="button"
              onClick={() => {
                dispatch(cancelReservation(id));
              }}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              className="reserve-btn"
              type="button"
              onClick={() => {
                dispatch(reserveRocket(id));
              }}
            >
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </div>

  );
};

RocketsData.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default RocketsData;
