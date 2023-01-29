import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DragonssData from '../components/DragonssData';
import { fetchDragons } from '../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);
  const dragonsArr = useSelector((state) => state.dragons);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      dispatch(fetchDragons());
    }
  }, [dispatch]);
  if (dragonsArr.length > 0) {
    return (
      <div className="dragons-container">
        {dragonsArr.map((dragon) => (
          <DragonssData
            key={dragon.id}
            name={dragon.name}
            type={dragon.type}
            img={dragon.flickr_images}
            id={dragon.id}
            reserved={dragon.reserved}
          />
        ))}
      </div>
    );
  }
  return '';
};
export default Dragons;
