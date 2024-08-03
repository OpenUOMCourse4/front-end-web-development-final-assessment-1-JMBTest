describe('Test For data retrieving', () => {
    it('Supplier table data retrieval', () => {
      cy.visit('/')
      cy.get('#supplier-table thead th')
    .contains('Joined Date')
    .invoke('index')
    .then((index) => {
      cy.get('#supplier-table tbody tr:first-child td').eq(index)
        .should('contain', 'Mar 2, 2022');
    });
    })
  })