export class Login {
  login = (username, password) => {
    cy.get('#user-name').should('be.visible').type(username)
    cy.get('#password').should('be.visible').type(password)
    cy.get('#login-button').should('be.visible').click()
    // validate login if success
    cy.get('span[class="title"]').contains('Products').should('be.visible')
  }
}
