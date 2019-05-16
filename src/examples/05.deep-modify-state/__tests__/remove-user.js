import 'jest-dom/extend-expect';
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import DeepModifyState from '../index';

const App = () => <DeepModifyState />;

test('Should remove user from list when click delete button', () => {
  const {getByTestId} = render(<App />);

  let root = getByTestId('root');
  let userOneDeleteButton = getByTestId('user.1.delete');
  fireEvent.click(userOneDeleteButton);
  expect(root.childNodes).toHaveLength(1);

  let userTwoDeleteButton = getByTestId('user.2.delete');
  fireEvent.click(userTwoDeleteButton);
  expect(root.childNodes).toHaveLength(0);
});
