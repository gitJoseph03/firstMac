export class Home {
  getAllProducts = () => {
    cy.get('div[class="inventory_item"]')
      .its('length')
      .then((len) => {
        let products = []
        for (let i = 0; i < len; i++) {
          cy.get('div[class="inventory_item"]')
            .eq(i)
            .find(
              '.inventory_item_description > .inventory_item_label > a > .inventory_item_name'
            )
            .invoke('text')
            .then((data) => {
              products.push(data)
            })
        }
        cy.wrap(products).then((_products) => {
          cy.writeFile('cypress/fixtures/products.json', { _products })
        })
      })
  }
  selectProduct = (productName) => {
    cy.get('.inventory_item_name ')
      .contains(productName)
      .should('be.visible')
      .click()
    // verify if the user redirects to product details
    cy.get('.inventory_details_name').contains(productName).should('be.visible')
  }
}
