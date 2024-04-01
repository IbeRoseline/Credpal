import HomePage from "../PageObjectModel/CredPal_POM"

describe('CredPal App Test', ()=>{
    beforeEach(()=>{
        cy.visit('https://credpal.com')
    })
    it('Homepage Displays correctly', ()=>{
        HomePage.HeroImage
        HomePage.NavigationBar
        HomePage.RegionSelectorDropdown
        HomePage.DownloadTheCredPalApp
        HomePage.One_App_All_Your_Financial_Needs
        HomePage.Payment
        HomePage.VIrtual_Card
        HomePage.Start_Building_Store
        HomePage.Custommer_Love_Us
        //cy.wait(2000)
        //cy.get('.bottom-0 > .flex-col > .flex > .bg-blue-500').click()
        //cy.wait(5000)
        //cy.get('.dn-slide-body > .dn-slide-buttons > .dn-slide-deny-btn').click()
    })
    it('Affiliate page', ()=> {
        cy.get('[href="/sales"]').click()
        cy.contains('Affiliate Onboarding Form').should('be.visible')
        cy.get('#first_name').type('sonky')
        cy.get('#last_name').type('mike')
        cy.get('#email').type('jon@yopmail.com')
        cy.get('#phone').type('08012311666')
        cy.get('.gap-5 > :nth-child(1)').click()
        cy.wait(1000)
        cy.get('.gap-5 > :nth-child(2)').click()
        cy.wait(1000)
cy.get('.gap-5 > :nth-child(1)').click()
        cy.get('.gap-4 > .appearance-none').click()
})
})