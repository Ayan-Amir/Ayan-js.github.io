import { render } from '@testing-library/react';

import RenderWithClient from '#/test-utils/renderWithClient';
import { Layout } from '../..';

describe('Layout', () => {
  it('renders the Layout component', () => {
    render(
      <RenderWithClient>
        <Layout />
      </RenderWithClient>
    );
  });
});
