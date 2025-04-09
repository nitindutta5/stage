describe('Story Viewer', () => {
  it('should navigate slides correctly', () => {
    cy.visit('http://localhost:5173'); // or your app URL
    cy.get('.userItem img').first().click();
    cy.get('.rightZone').click();
    cy.get('.leftZone').click();
  });
});