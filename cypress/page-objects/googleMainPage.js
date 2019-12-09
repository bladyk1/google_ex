export class GoogleMainPage{
    
    navigate(){
        cy.visit('http://www.google.com/intl/en/')
    }

    searchForKeywordPressEnter(keyWord){
        cy.get('[name="f"] [name="q"]', {timeout:5000}).type(keyWord + "{Enter}")
    }

    searchForKeyword(keyWord){
        cy.get('[name="f"] [name="q"]', {timeout:5000}).type(keyWord)
    }

    clearSearchBoxField(){
        cy.get('[name="f"] [name="q"]', {timeout:5000}).clear()
    }

    validateDuCoPositionedFirstPlace(){
        cy.get('[class="g"] .r span', {timeout:5000}).eq(0).should('have.text', 'Duco: Homepage')
    }

    validateCypressPositionedFirstPlace(){
        cy.get('[class="g"] .r span', {timeout:5000}).eq(0).should('have.text', 'JavaScript End to End Testing Framework | cypress.io')
    }

    clickOnNextButton(){
        cy.get('.pn', {timeout:5000}).contains('Next').click()
    }

    validateNumberOfElementsReturnedInResults(number){
        cy.get('[class="g"]', {timeout:5000}).should('have.length', number)
    }

    clickOnLink(link){
        switch(link){
            case 'Videos':
                cy.get('#hdtb-msb-vis > div', {timeout:5000}).contains('Videos').click()
                break
            case 'Maps':
                cy.get('#hdtb-msb-vis > div', {timeout:5000}).contains('Maps').click()
                break
            case 'Images':
                cy.get('#hdtb-msb-vis > div', {timeout:5000}).contains('Images').click()
                break
            case 'News':
                cy.get('#hdtb-msb-vis > div', {timeout:5000}).contains('News').click()
                break
            default:
                console.log('Sorry, link parameter not found')
        }

    }

    validateExpectedUrlIsOpened(text){
        switch(text){
            case 'Videos':
                cy.url().should('include', 'tbm=vid')
                break
            case 'Maps':
                cy.url().should('include', 'google.com/maps')
                break
            case 'Images':
                cy.url().should('include', 'tbm=isch')
                break
            case 'News':
                    cy.url().should('include', 'tbm=nws')
                break
            default:
                console.log('Sorry, parameter not found')

        }
    }

}