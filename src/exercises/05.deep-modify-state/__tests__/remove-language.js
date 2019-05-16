import 'jest-dom/extend-expect';
import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';
import DeepModifyState from '../index';

const App = () => <DeepModifyState />;

test('Should delete language button when click', () => {
  const {getByTestId} = render(<App />);

  // user.1
  let userOneButtonList = getByTestId('user.1.languages');
  const userOneButtonOne = userOneButtonList.querySelector('button');

  expect(userOneButtonList.childNodes).toHaveLength(2);

  fireEvent.click(userOneButtonOne);
  expect(userOneButtonList.childNodes).toHaveLength(1);

  const userOneButtonTwo = userOneButtonList.querySelector('button');
  expect(userOneButtonTwo.innerHTML).toBe('x vi');
  fireEvent.click(userOneButtonTwo);
  expect(userOneButtonList.childNodes).toHaveLength(0);

  // user.2
  let userTwoButtonList = getByTestId('user.2.languages');
  expect(userTwoButtonList.childNodes).toHaveLength(3);
  const userTwoButtonTwo = userTwoButtonList.querySelector(
    'button:nth-child(2)',
  );
  fireEvent.click(userTwoButtonTwo);
  expect(userTwoButtonList.childNodes).toHaveLength(2);
  const userTwoButtonThree = userTwoButtonList.querySelector(
    'button:nth-child(2)',
  );
  expect(userTwoButtonThree.innerHTML).toBe('x au');
  fireEvent.click(userTwoButtonThree);
  expect(userTwoButtonList.childNodes).toHaveLength(1);
  const userTwoButtonOne = userTwoButtonList.querySelector('button');
  expect(userTwoButtonOne.innerHTML).toBe('x en');
});
