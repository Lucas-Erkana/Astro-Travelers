import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsData from '../components/rocketsData';
import Rockets from '../pages/Rockets';

describe('testing for rockets data', () => {
  it('test for component', () => {
    const test = render(
      <Provider store={store}>
        <RocketsData />
      </Provider>,
    );
    expect(test).toMatchSnapshot();
  });
  it('test for component', () => {
    const test2 = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(test2).toMatchSnapshot();
  });
});
