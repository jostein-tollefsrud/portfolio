import { render } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '../src/axe-helper';
import Contact from '../src/pages/contact';

expect.extend(toHaveNoViolations);

describe('Contact Page', () => {
  describe('Accessibility', () => {
    it('should have no a11y errors caught by jest axe', async () => {
      const { container } = render(<Contact />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
