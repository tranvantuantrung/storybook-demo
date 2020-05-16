import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import './Button.css';

function ButtonPrimary(props) {
  const { title } = props;
  return (
    <div className="ButtonPrimary">
      <Button className="btn" color="primary">
        {title}
      </Button>
    </div>
  );
}

ButtonPrimary.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonPrimary;
