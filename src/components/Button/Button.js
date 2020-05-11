import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import './Button.css';

class ButtonPrimary extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="ButtonPrimary">
        <Button className="btn" color="primary">
          {title}
        </Button>
      </div>
    );
  }
}

ButtonPrimary.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonPrimary;
