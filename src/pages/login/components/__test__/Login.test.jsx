import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RenderWithClient from '#/test-utils/renderWithClient';
import { Login } from '../..';

describe('Login', () => {
  it('renders the login component', async () => {
    render(
      <RenderWithClient>
        <Login />
      </RenderWithClient>
    );

    // screen.debug;

    let screenText = screen.getByText('Secure Sign-in with Google');

    await userEvent.click(screenText);
    await screenText.click();
    // expect(screenText).toBeInTheDocument();
  });
});
