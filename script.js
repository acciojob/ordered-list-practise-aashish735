//your JS code here. If required.
cy.get('li').each((li, idx) => {
  cy.wrap(li).should('have.text', list_texts[idx]);
});