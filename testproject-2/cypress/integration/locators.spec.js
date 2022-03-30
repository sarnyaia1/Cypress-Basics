/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("Locating elements with GET", () => {
        // Get all elements by tag name:
        cy.get("button")
        cy.get("h3")
        cy.get("h2")
        
        // Get all elements by className
        cy.get(".btn-with-class")

        // Get all elements with specific classes
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        // Get all elemetns by ID
        cy.get("[id='btn-with-id']")
        cy.get("#btn-with-id")

        // Get all elements by specific attribute (type)
        cy.get("[type='submit'")

        // Get all elements by tag name AND class
        cy.get("button.Elements-btn")

        // Get all elements by tag name AND class AND id
        cy.get("button.Elements-btn#btn-with-id")

        // Get all elements by tag name AND class AND type attribute
        cy.get("button.Elements-btn[type='submit']")

        // Get all elements with specific data test id
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId("btn-id-1") // after we create a new command

    })

    it("Locating elements with CONTAINS", () => {
        // CONTAINS get only ONE ELEMENT!

        // Get element by text
        cy.contains("Unique Text")
        cy.contains("Not Unique Text") 

        // Combine with with selector
        cy.contains("[type='submit']", "Not Unique Text")
        cy.contains("form", "Not Unique Text")
        cy.get("[type='submit']").contains("Not Unique Text")

    })

    it("Locating elements with FIND", () => {
        cy.get("#form-1").find(".btn-1")

    })

})

