import { element } from '../elementLocator'

export class Login {
  login = (username, password) => {
    cy.get(element.login.username).should('be.visible').type(username)
    cy.get(element.login.password).should('be.visible').type(password)
    cy.get(element.login.submit).should('be.visible').click()
    // validate login if success
    cy.get(element.home.header).contains('Products').should('be.visible')
  }
}
