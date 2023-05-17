/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Button} from '@components';
import renderer from 'react-test-renderer';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = renderer
        .create(<Button title="Sign in" primary />)
        .toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
