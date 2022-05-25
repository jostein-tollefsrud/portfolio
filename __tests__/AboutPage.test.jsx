import { render } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '../src/axe-helper';
import About from '../src/pages/about';

expect.extend(toHaveNoViolations);

describe('About Page', () => {
  describe('Accessibility', () => {
    it('should have no a11y errors caught by jest axe', async () => {
      const { container } = render(<About />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
