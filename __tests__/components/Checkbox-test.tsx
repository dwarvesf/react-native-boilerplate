/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Checkbox} from '@components';
import renderer from 'react-test-renderer';

describe('Checkbox', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = renderer.create(<Checkbox isChecked />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
