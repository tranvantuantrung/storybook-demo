import React from 'react';
import { withInfo } from '@storybook/addon-info';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../components/Navigation/Navigation';

export default { title: 'Navigation', decorators: [withInfo] };

export const defaultNavigation = () => (
  <Navigation
    brand="Book store"
    navLinks={[
      { name: 'Books', link: '/books' },
      { name: 'Users', link: '/users' },
      { name: 'Products', link: '/products' },
    ]}
  />
);
