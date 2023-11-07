import { element } from '../elementLocator'
export class Cart {
  goToCart = () => {
    cy.get(element.product.shoppingCart).should('be.visible').click()
    // verify if the user is redirected to cart
    cy.get(element.home.header).contains('Your Cart').should('be.visible')
  }
  getProductName = (args = { expectedProductName }) => {
    cy.get(element.cart.productName)
      .should('be.visible')
      .invoke('text')
      .then((data) => {
        expect(data).to.eq(args.expectedProductName)
      })
  }
}
