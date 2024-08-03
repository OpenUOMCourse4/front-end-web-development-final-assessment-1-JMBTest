describe('Add Supplier form button Validation', () => {
    it('Supplier Button validation', () => {
      cy.visit('/')
      cy.get('#supplier-add').click()
      cy.get('#add-form').should('exist');
      cy.get('#supplier-submit').should('be.disabled')
      cy.get('#supplier-name').type('Ayesha Nirmali')
      cy.get('#supplier-address').type('No 435, galle road,colombo 4')
      cy.get('#supplier-joined-date').type('2030-05-15')
      cy.get('#supplier-mobile-no').type('0724356789')
      cy.get('#supplier-submit').should('be.enabled')
    })
  })