import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import Login from './Login';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

//* signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider mocking
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
  signInWithPopup: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  FacebookAuthProvider: jest.fn(),
}));

//* auth mocking
jest.mock('./fire-base', () => ({
  auth: jest.fn(),
}));

describe('<Login />', () => {
  it('opens and closes the modal', async () => {
    const {getByText, queryByLabelText} = render(<Login />);

    fireEvent.click(getByText('login'));
    expect(queryByLabelText('loginModal')).toBeInTheDocument();

    fireEvent.click(getByText('close'));
    expect(queryByLabelText('loginModal')).not.toBeInTheDocument();
  });

  it('allows the user to type an email and password', () => {
    const {getByText, getByPlaceholderText} = render(<Login />);
    fireEvent.click(getByText('login'));

    const email = getByPlaceholderText('Email') as HTMLInputElement;
    const password = getByPlaceholderText('Password') as HTMLInputElement;

    fireEvent.change(email, {target: {value: 'user@test.com'}});
    fireEvent.change(password, {target: {value: 'test1234'}});

    expect(email.value).toBe('user@test.com');
    expect(password.value).toBe('test1234');
  });

  it('calls signInWithEmailAndPassword when the form is submitted', async () => {
    const {getByPlaceholderText, getByText, getByTestId, queryByLabelText} =
      render(<Login />);
    fireEvent.click(getByText('login'));

    const email = getByPlaceholderText('Email') as HTMLInputElement;
    const password = getByPlaceholderText('Password') as HTMLInputElement;
    const loginButton = getByTestId('login-btn');

    fireEvent.change(email, {target: {value: 'user@test.com'}});
    fireEvent.change(password, {target: {value: 'test1234'}});
    fireEvent.submit(loginButton);

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      expect.anything(),
      'user@test.com',
      'test1234',
    );

    await waitFor(() =>
      expect(queryByLabelText('loginModal')).not.toBeInTheDocument(),
    );
  });

  it('calls signInWithPopup for google social login when the button is clicked', async () => {
    const {getByText, getByTestId, queryByLabelText} = render(<Login />);
    fireEvent.click(getByText('login'));

    const googleSignInButton = getByTestId('google-btn');
    fireEvent.click(googleSignInButton);

    const provider = new GoogleAuthProvider();
    expect(signInWithPopup).toHaveBeenCalledWith(expect.anything(), provider);
    await waitFor(() =>
      expect(queryByLabelText('loginModal')).not.toBeInTheDocument(),
    );
  });

  it('calls signInWithPopup for facebook social login when the button is clicked', async () => {
    const {getByText, getByTestId, queryByLabelText} = render(<Login />);
    fireEvent.click(getByText('login'));

    const googleSignInButton = getByTestId('facebook-btn');
    fireEvent.click(googleSignInButton);

    const provider = new FacebookAuthProvider();
    expect(signInWithPopup).toHaveBeenCalledWith(expect.anything(), provider);
    await waitFor(() =>
      expect(queryByLabelText('loginModal')).not.toBeInTheDocument(),
    );
  });
});
