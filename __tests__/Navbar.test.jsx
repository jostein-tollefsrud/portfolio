import Navbar from '../src/components/Navbar';
import { render, screen } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '../src/axe-helper';

expect.extend(toHaveNoViolations);

describe('Navbar', () => {
  // Accessibility testing
  describe('Accessibility', () => {
    it('Should have no a11y errors', async () => {
      const { container } = render(<Navbar />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
