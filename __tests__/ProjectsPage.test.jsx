import { render } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '../src/axe-helper';
import Projects from '../src/pages/projects';

expect.extend(toHaveNoViolations);

describe('Projects Page', () => {
  describe('Accessibility', () => {
    it('should have no a11y errors caught by jest axe', async () => {
      const { container } = render(<Projects />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
