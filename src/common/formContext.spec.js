import { shallow } from 'enzyme';
import React from 'react';
import data from '../data';
import { formReducer, globalReducer, extractFormFields } from './formContext';

const submission = {
  name: 'Mery',
  surname: 'SuperGalaxy',
  age: '35',
};

const state = {
  submissions: [
    {
      name: 'Jesucristo',
      surname: 'Superstar',
      age: '33',
    },
  ],
};

describe('InitialFormValues', () => {
    test('If transforms data received', () => {
        expect(extractFormFields(data)).toEqual({ name: '', surname: '', age: '' })
    })
})

describe('Context', () => {
  test('globalReducer works!', () => {
    const action = {
      type: 'submit',
      payload: submission,
    };

    expect(globalReducer(state, action)).toEqual({
      submissions: [
        {
          name: 'Jesucristo',
          surname: 'Superstar',
          age: '33',
        },
        {
          name: 'Mery',
          surname: 'SuperGalaxy',
          age: '35',
        },
      ],
    });
  });
});

describe('Context', () => {
  test('formReducer works!', () => {
    const action = {
      type: 'update',
      payload: submission,
    };

    expect(formReducer(...state.submissions, action)).toEqual(submission);
  });
});
