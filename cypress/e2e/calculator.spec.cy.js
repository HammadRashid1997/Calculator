// Function to check if all the buttons are responsive and working
function check_all_buttons_are_responsive_and_working(n) {
  if(n <= 0) {
    return;
  }

  cy.get('.calc-button').click({multiple: true})

  check_all_buttons_are_responsive_and_working(n - 1);
}

// Main cypress code
describe('Calculator', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/code.html')
  });

  // Functional E2E Testing

  it('Calculator Displayed', () => {
    // cy.visit('http://127.0.0.1:5500/code.html')
  })

  it('Addition', () => {
    cy.get('.calc-button').contains(2).click()
    cy.get('.calc-button').contains('+').click()
    cy.get('.calc-button').contains(8).click()
    cy.get('.calc-button').contains('=').click()
    cy.get('.screen').should('have.text', 10)
  })

  it('Subtraction', () => {
    cy.get('.calc-button').contains(1).click()
    cy.get('.calc-button').contains(5).click()
    cy.get('.calc-button').contains('-').click()
    cy.get('.calc-button').contains(7).click()
    cy.get('.calc-button').contains('=').click()
    cy.get('.screen').should('have.text', 8)
  })

  it('Multiplication', () => {
    cy.get('.calc-button').contains(2).click()
    cy.get('.calc-button').contains('*').click()
    cy.get('.calc-button').contains(8).click()
    cy.get('.calc-button').contains('=').click()
    cy.get('.screen').should('have.text', 16)
  })

  it('Division', () => {
    cy.get('.calc-button').contains(1).click()
    cy.get('.calc-button').contains(5).click()
    cy.get('.calc-button').contains('/').click()
    cy.get('.calc-button').contains(3).click()
    cy.get('.calc-button').contains('=').click()
    cy.get('.screen').should('have.text', 5)
  })

  it('Percentage', () => {
    cy.get('.calc-button').contains(1).click()
    cy.get('.calc-button').contains(5).click()
    cy.get('.calc-button').contains('%').click()
    cy.get('.calc-button').contains('=').click()
    cy.get('.screen').should('have.text', .15)
  })

  it('Evaluates multiple expressions', () => {
    cy.get('.calc-button').contains(5).click()
    cy.get('.calc-button').contains('+').click()
    cy.get('.calc-button').contains(3).click()
    cy.get('.calc-button').contains('-').click()
    cy.get('.calc-button').contains(2).click()
    cy.get('.calc-button').contains('*').click()
    cy.get('.calc-button').contains(6).click()
    cy.get('.calc-button').contains('/').click()
    cy.get('.calc-button').contains(4).click()
    cy.get('.calc-button').contains('=').click()
    cy.get('.screen').should('have.text', 9)
  })

  it('Divide by 0 gives Infinity', () => {
    cy.get('.calc-button').contains(6).click()
    cy.get('.calc-button').contains('/').click()
    cy.get('.calc-button').contains(0).click()
    cy.get('.calc-button').contains('=').click()
    cy.get('.screen').should('have.text', 'Infinity')
  })

  it('Displays 0 whenever I enter C', () => {
    cy.get('.calc-button').contains(1).click()
    cy.get('.calc-button').contains(5).click()
    cy.get('.calc-button').contains('+').click()
    cy.get('.calc-button').contains(3).click()
    cy.get('.calc-button').contains('=').click()
    cy.get('.screen').should('have.text', 18)

    cy.get('.calc-button').contains('C').click()
    cy.get('.screen').should('have.text', 0)
  })

  // UI E2E Testing

  it('Change color on hover', () => {
    cy.get('.calc-button').contains(8).trigger('mouseover')
  })

  it('Background-color of a digit button', () => {
   cy.get('.calc-button').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('Background-color of an arithmetic operations button', () => {
    cy.get('.calc-button').contains('+').should('have.css', 'background-color', 'rgb(134, 164, 182)')
    cy.get('.calc-button').contains('-').should('have.css', 'background-color', 'rgb(134, 164, 182)')
    cy.get('.calc-button').contains('*').should('have.css', 'background-color', 'rgb(134, 164, 182)')
    cy.get('.calc-button').contains('/').should('have.css', 'background-color', 'rgb(134, 164, 182)')
    cy.get('.calc-button').contains('%').should('have.css', 'background-color', 'rgb(134, 164, 182)')
   })
  
   it('Background Color of the Website', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(11, 11, 11)')
   })

   it('Color of the calculator screen', () => {
    cy.get('.wrapper').should('have.css', 'background-color', 'rgba(112, 132, 143, 0.282)')
   })

   it('Check all the buttons are responsive and working', () => {
    check_all_buttons_are_responsive_and_working(1)
   })

   it('The screen of the calculator where the text appears is visible', () => {
    cy.get('.screen').should('be.visible')
    
    cy.get('.calc-buttons').contains(4).click()
    cy.get('.screen').should('be.visible')
    cy.get('.calc-buttons').contains('+').click()
    cy.get('.screen').should('be.visible')
    cy.get('.calc-buttons').contains(4).click()
    cy.get('.screen').should('be.visible')
    cy.get('.calc-buttons').contains('=').click()
    cy.get('.screen').should('be.visible')
    cy.get('.screen').should('have.text', 8)
    cy.get('.screen').should('be.visible')

    cy.get('.screen').should('have.css', 'background-color', 'rgb(255, 255, 255)')
   })

   it('Easy to use and Navigate', () => {
    cy.get('.screen').should('be.visible')
    
    cy.get('.calc-buttons').contains(4).click()
    cy.get('.calc-buttons').contains('+').click()
    cy.get('.calc-buttons').contains(4).click()
    cy.get('.calc-buttons').contains('-').click()
    cy.get('.calc-buttons').contains(1).click()
    cy.get('.calc-buttons').contains('*').click()
    cy.get('.calc-buttons').contains(3).click()
    cy.get('.calc-buttons').contains('=').click()
    cy.get('.screen').should('have.text', 21)

    cy.get('.calc-buttons').contains('C').click()
    cy.get('.screen').should('have.text', 0)

   })

})
