import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import SignUp from './SignUp';
import {createUserWithEmailAndPassword} from 'firebase/auth';

jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
}));

jest.mock('./fire-base', () => ({
  auth: jest.fn(),
}));

describe('<SignUp />', () => {
  it('opens and closes the modal', async () => {
    const {getByText, queryByLabelText} = render(<SignUp />);

    fireEvent.click(getByText('Sign Up'));
    expect(queryByLabelText('SignUpModal')).toBeInTheDocument();

    fireEvent.click(getByText('close'));
    expect(queryByLabelText('SignUpModal')).not.toBeInTheDocument();
  });

  it('allows the user to type an email and password', () => {
    const {getByText, getByPlaceholderText} = render(<SignUp />);
    fireEvent.click(getByText('Sign Up'));

    const email = getByPlaceholderText('Email') as HTMLInputElement;
    const password = getByPlaceholderText('Password') as HTMLInputElement;

    fireEvent.change(email, {target: {value: 'user@test.com'}});
    fireEvent.change(password, {target: {value: 'test1234'}});

    expect(email.value).toBe('user@test.com');
    expect(password.value).toBe('test1234');
  });

  it('calls createUserWithEmailAndPassword when the form is submitted', async () => {
    const {getByText, getByPlaceholderText, getByTestId, queryByLabelText} =
      render(<SignUp />);
    fireEvent.click(getByText('Sign Up'));

    const email = getByPlaceholderText('Email') as HTMLInputElement;
    const password = getByPlaceholderText('Password') as HTMLInputElement;

    fireEvent.change(email, {target: {value: 'user@test.com'}});
    fireEvent.change(password, {target: {value: 'test1234'}});

    const signUpButton = getByTestId('signup-btn') as HTMLInputElement;
    fireEvent.click(signUpButton);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      expect.anything(),
      email.value,
      password.value,
    );

    await waitFor(() => {
      expect(queryByLabelText('SignUpModal')).not.toBeInTheDocument();
    });
  });
});
