// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { 
//     cy.visit('https://www.phptravels.net/') 
//     cy.contains('Login')

//   // Check that the user has indeed landed on the login page
//     cy.url().should('include','/login')
//     cy.get('#Email').type(email).should ('have.value', email)

//   // Enter a password at this step
//     cy.get('#Password').type(password).should ('have.value', password)

//   // Proceed to login to account
//     cy.get('#loginfrm > .btn-primary').click();

//   // Assert that Dashboard is visible
//     // cy.get('title')
//     // cy.contains ('Dashboard')
    

// })

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
