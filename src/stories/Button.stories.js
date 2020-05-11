import React from 'react';
import { withInfo } from '@storybook/addon-info';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from '../components/Button/Button';

export default { title: 'Button', decorators: [withInfo] };

export const defaultButton = () => <Button title="Add to card" />;
