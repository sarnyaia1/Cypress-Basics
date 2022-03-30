/// <reference types="cypress" />

describe("Real Tests", () => {
    beforeEach(() => {
        cy.visit("/habits")
    })

    it("Should display modal when add button is clicked", () => {
        cy.get("button").contains("Add").click()
        cy.contains("Add a new habit").should("be.visible")
    })

    it("Should display habit card and new habit is added", () => {
        cy.get("#habit-add-btn").click()
        cy.contains("Add a new habit").should("be.visible")
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")
        cy.get("button").contains("Save Changes").click()
        cy.contains("Drink a cup of water")
            .should("be.visible")
            .should("have.class", "HabitCard__habit-container") // OR use 'and'
    })

    it("Should toggle icon when habit card is clicked", () => {
        cy.get("button").contains("Add").click()
        cy.contains("Add a new habit").should("be.visible")
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")
        cy.contains("Save Changes").click()
        cy.contains("Drink a cup of water").click()
        cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")
        cy.contains("Drink a cup of water").click()
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
    })
})