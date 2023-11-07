export class Product {
  addToCart = () => {
    cy.get('button').contains('Add to cart').should('be.visible').click()
    // verify if the user clicks the cart button
    cy.get('button').contains('Remove').should('be.visible')
  }
  verifyCartQty = (qty) => {
    cy.get('.shopping_cart_badge')
      .invoke('text')
      .then((data) => {
        expect(data).to.eq(qty.toString())
      })
  }
}
