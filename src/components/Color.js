import React from 'react';
import PropTypes from 'prop-types';

function Color({ match }){

  return (
    <div style={ { width: '100px', height: '100px', backgroundColor: decodeURIComponent(match.params.color) } }/>
  );
}

Color.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      color: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Color;
