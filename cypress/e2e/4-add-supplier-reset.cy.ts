describe('Reset Supplier', () => {
    it('Reset Supplier', () => {
      cy.visit('/')
      cy.get('#supplier-add').click()
      cy.get('#add-form').should('exist');
      cy.get('#supplier-name').type('Ayesha Nirmali')
      cy.get('#supplier-address').type('No 435, galle road,colombo 4')
      cy.get('#supplier-joined-date').type('2030-05-15')
      cy.get('#supplier-mobile-no').type('0724356789')
      cy.get('#supplier-submit').click()

      cy.get('#add-form').should('exist');
      cy.get('#supplier-name'). should('have.value', '');
      cy.get('#supplier-address'). should('have.value', '');
      cy.get('#supplier-joined-date'). should('have.value', '');
      cy.get('#supplier-mobile-no'). should('have.value', '');
    })
  })