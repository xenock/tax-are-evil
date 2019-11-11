import { shallow } from 'enzyme';
import React from 'react';

import InputField from './InputField';

const inputFieldProps = {
  id: 'name',
  label: 'Name',
  placeholder: 'Enter your name',
  type: 'string',
};

describe('<InputField />', () => {
  test('Renders a InputField', () => {
    expect(shallow(
      <InputField {...inputFieldProps} />
    )).toMatchSnapshot();
  });
});
