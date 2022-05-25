import { render } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '../src/axe-helper';
import Home from '../src/pages/index';

expect.extend(toHaveNoViolations);

describe('Home Page', () => {
  describe('Accessibility', () => {
    it('should have no a11y errors caught by jest axe', async () => {
      const { container } = render(<Home />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
