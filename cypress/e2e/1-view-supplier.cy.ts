describe('Test For data retrieving', () => {
  it('Supplier table data retrieval', () => {
    cy.visit('/')
    cy.get('#supplier-table thead th')
  .contains('Supplier Name')
  .invoke('index')
  .then((index) => {
    cy.get('#supplier-table tbody tr:first-child td').eq(index)
      .should('contain', 'Amal Ranasinghe');
  });
  })
})
