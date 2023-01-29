import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelReservation } from '../redux/dragons/dragonsSlice';
import styles from './dragonssData.module.css';

const DragonssData = (props) => {
  const dispatch = useDispatch();
  const {
    name, type, img, id, reserved,
  } = props;
  return (
    <div className={styles.dragon_card}>
      <div className={styles.dragon_card_min}>
        <img src={img} className={styles.dragon_img} alt="dragon pic" />

        <div className={styles.dragon_data}>
          <h3 className={styles.dragon_name}>{name}</h3>
          <p>
            {reserved && <span className={styles.reserve_badge}>Reserved</span>}
            {type}
          </p>
          {reserved ? (
            <button
              type="button"
              className={styles.cancel_btn}
              onClick={() => {
                dispatch(cancelReservation(id));
              }}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              className={styles.reserve_btn}
              onClick={() => {
                dispatch(reserveDragon(id));
              }}
            >
              Reserve Dragon
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
DragonssData.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default DragonssData;
