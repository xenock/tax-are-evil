import { shallow } from 'enzyme';
import React from 'react';
import FormContext from '../../common/formContext';

import List from './List';

const listProps = {
  submissions: [
    {
      name: 'Mery',
      surname: 'SuperGalaxy',
      age: '35',
    },
  ],
};

const contextValues = {
  state: {
    submissions: [
      {
        name: 'Jesucristo',
        surname: 'Superstar',
        age: '33',
      },
    ],
  },
};

describe('<List />', () => {
  test('Renders a List', () => {
    expect(shallow(
      <FormContext.Provider value={contextValues}>
        <List {...listProps} />
      </FormContext.Provider>
    )).toMatchSnapshot();
  });
});
