import { Login } from '../support/pages/Login'
import { Home } from '../support/pages/Home'
import { Product } from '../support/pages/Product'
import { Cart } from '../support/pages/Cart'

const login = new Login()
const home = new Home()
const product = new Product()
const cart = new Cart()

const testData = 'testData.json'

describe('Technical Examination', () => {
  before(() => {
    cy.clearAllLocalStorage()
    cy.visit('/')
  })
  it('login to the app', function () {
    cy.fixture(testData).then((data) => {
      login.login(data.username, data.password)
    })
  })
  it('log/store all products', function () {
    home.getAllProducts()
  })
  it('get the collected products and select the 3rd product', function () {
    cy.fixture(testData).then((data) => {
      home.selectProduct(data.products[2])
    })
  })
  it('add to cart the selected product', function () {
    product.addToCart()
  })
  it('verify the cart quantity in product details page', function () {
    cy.fixture(testData).then((data) => {
      product.verifyCartQty(data.qty)
    })
  })
  it('go to cart', function () {
    cart.goToCart()
  })
  it('verify if the added product name is correct', function () {
    cy.fixture(testData).then((data) => {
      cart.getProductName({ expectedProductName: data.products[2] })
    })
  })
})
