import 'jest-dom/extend-expect';
import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';
import DeepModifyState from '../index';

const App = () => <DeepModifyState />;

test('Should modify user address', () => {
  const {getByTestId} = render(<App />);

  const userOneAddressInput = getByTestId('user.1.address');
  fireEvent.change(userOneAddressInput, {target: {value: 'change address 1'}});
  expect(userOneAddressInput.value).toBe('change address 1');

  const userTwoAddressInput = getByTestId('user.2.address');
  fireEvent.change(userTwoAddressInput, {target: {value: 'change address 2'}});
  expect(userTwoAddressInput.value).toBe('change address 2');
});

afterEach(cleanup);
