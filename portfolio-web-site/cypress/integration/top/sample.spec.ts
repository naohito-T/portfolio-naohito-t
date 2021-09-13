describe('Check text', () => {
  it('check text', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Coding In Design', 'src/pages/index.vue');
  });
});
