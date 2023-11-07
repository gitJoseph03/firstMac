export class Cart {
  goToCart = () => {
    cy.get('.shopping_cart_link').should('be.visible').click()
    // verify if the user is redirected to cart
    cy.get('span[class="title"]').contains('Your Cart').should('be.visible')
  }
  getProductName = (args = { expectedProductName }) => {
    cy.get('.inventory_item_name')
      .should('be.visible')
      .invoke('text')
      .then((data) => {
        expect(data).to.eq(args.expectedProductName)
      })
  }
}
