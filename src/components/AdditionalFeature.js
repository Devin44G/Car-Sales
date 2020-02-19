import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

const AdditionalFeature = props => {
  // const features = useSelector( state => state.additionalFeatures );

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {}}
      >
      Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
