import '@cypress-audit/lighthouse/commands';

it('should pass the audits', () => {
  cy.visit('http://localhost:3000');
  cy.lighthouse({
    performance: 100,
    accessibility: 100,
    'best-practices': 100,
    seo: 98,
    pwa: 0,
  });
});
