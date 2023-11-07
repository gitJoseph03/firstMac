import { element } from '../elementLocator'

export class Home {
  getAllProducts = () => {
    cy.get(element.home.inventoryItem)
      .its('length')
      .then((len) => {
        let products = []
        for (let i = 0; i < len; i++) {
          cy.get(element.home.inventoryItem)
            .eq(i)
            .find(element.home.inventoryName)
            .invoke('text')
            .then((data) => {
              products.push(data)
            })
        }
        cy.wrap(products).then((_products) => {
          cy.readFile('cypress/fixtures/testData.json').then((data) => {
            data.products = _products
            cy.writeFile('cypress/fixtures/testData.json', JSON.stringify(data))
          })
        })
      })
  }
  selectProduct = (productName) => {
    cy.get(element.home.inventoryName)
      .contains(productName)
      .should('be.visible')
      .click()
    // verify if the user redirects to product details
    cy.get(element.product.productName)
      .contains(productName)
      .should('be.visible')
  }
}
