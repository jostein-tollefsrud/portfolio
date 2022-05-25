import Footer from '../src/components/Footer';
import { render, screen } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '../src/axe-helper';

expect.extend(toHaveNoViolations);

describe('Footer', () => {
  // it('should render a list of links', () => {
  //   render(<Footer />);
  //   const list = screen.getByRole('list');
  //   const listItems = screen.getAllByRole('listitem');
  //   const links = screen.getByRole('link');

  //   expect(list).toBeInTheDocument();
  //   expect(listItems).toBeInTheDocument();
  //   expect(links).toBeInTheDocument();
  // });

  // Accessibility testing
  describe('Accessibility', () => {
    it('Should have no a11y errors', async () => {
      const { container } = render(<Footer />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
