import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <Footer
        footerHtml="<h1>Olá</h1>
      </Footer>"
      />
    );
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    // expect(container).toMatchSnapshot();
  });
});
