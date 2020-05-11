import React from 'react';
import { withInfo } from '@storybook/addon-info';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from '../components/Card/Card';

export default { title: 'Card', decorators: [withInfo] };

export const defaultCard = () => (
  <Card
    title="Sách dạy làm giàu"
    description="Tác giả: Huấn rose"
    buttonName="Add to card"
  />
);
