import 'jest-dom/extend-expect';
import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';
import DeepModifyState from '../index';

const App = () => <DeepModifyState />;

test('Should modify name', () => {
  const {getByTestId} = render(<App />);

  const userOneNameInput = getByTestId('user.1.name');
  fireEvent.change(userOneNameInput, {target: {value: 'change name 1'}});
  expect(userOneNameInput.value).toBe('change name 1');

  const userTwoNameInput = getByTestId('user.2.name');
  fireEvent.change(userTwoNameInput, {target: {value: 'change name 2'}});
  expect(userTwoNameInput.value).toBe('change name 2');
});

afterEach(cleanup);

// test('click panels should not increase count', () => {
//   const {getByText} = render(<App />);
//   const num = getByText('0');

//   const lv1Heading = getByText('Level 1').parentElement;
//   fireEvent.click(lv1Heading);
//   expect(num.innerHTML).toBe('0');
//   const lv2Heading = getByText('Level 2').parentElement;
//   fireEvent.click(lv2Heading);
//   expect(num.innerHTML).toBe('0');
//   const lv3Heading = getByText('Level 3').parentElement;
//   fireEvent.click(lv3Heading);
//   expect(num.innerHTML).toBe('0');
// });
