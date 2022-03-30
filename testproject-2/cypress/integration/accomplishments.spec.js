/// <reference types="cypress" />

describe("Accomplishments Tests", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("Should showcase error if checkbox is false", () => {
        cy.get("input[placeholder='Title']").type("test123")
        cy.get("textarea[placeholder='My accomplishment...']").type("test321")
        cy.get("button").contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("Should showcase error if text is missing", () => {
        cy.get("textarea[placeholder='My accomplishment...']").type("test321")
        cy.get("input[type='checkbox']").click()
        cy.get("button").contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("Should show message if all data is filled", () => {
        // Reach with data-cy
        cy.get("[data-cy='accomplishment-title-input']").type("test123")
        cy.get("[data-cy='accomplishment-input']").type("test321")
        cy.get("[data-cy='accomplishment-checkbox']").click() 
        cy.get("button").contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    })

    it("Should return back to Accomplishment dashboard with empty inputs ", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("test123")
        cy.get("[data-cy='accomplishment-input']").type("test321")
        cy.get("[data-cy='accomplishment-checkbox']").click() 
        cy.get("button").contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
        cy.get("button").contains("Go Back").click()
        cy.get("[data-cy='accomplishment-title-input']").should("be.empty")
        cy.get("[data-cy='accomplishment-input']").should("be.empty")
        cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked")
    })

})