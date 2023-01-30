/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketsData from '../components/rocketsData';
import { fetchRockets } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);
  const rocketArr = useSelector((state) => state.rockets);

  useEffect(() => {
    if (shouldFetch.current) {
      if (rocketArr.length === 0) {
        shouldFetch.current = false;
        dispatch(fetchRockets());
      }
    }
  }, [dispatch]);

  if (rocketArr.length > 0) {
    return (
      <div className="rocket-container">
        {rocketArr.map((rocket) => (
          <RocketsData
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            img={rocket.flickr_images}
            id={rocket.id}
            reserved={rocket.reserved}
          />
        ))}
      </div>
    );
  }
  return '';
};

export default Rockets;
