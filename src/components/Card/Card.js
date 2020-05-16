import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import Button from '../Button/Button';
import './Card.css';

function CardPrimary(props) {
  const { imageUrl, title, description, buttonName } = props;
  return (
    <div className="CardPrimary">
      <Card className="card">
        <CardImg top width="100%" src={imageUrl} alt="image alt" />
        <CardBody>
          <CardTitle className="cardTitle">{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button title={buttonName} />
        </CardBody>
      </Card>
    </div>
  );
}

CardPrimary.defaultProps = {
  imageUrl:
    'https://res.cloudinary.com/dkh65bchm/image/upload/v1588001440/njcimy4idmpu6mrrqf11.jpg',
};

CardPrimary.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default CardPrimary;
