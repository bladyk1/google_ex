/// <reference types="cypress" />
import {GoogleMainPage} from '../page-objects/googleMainPage'

describe('testing google', () => {
    const googleMainPage = new GoogleMainPage()

    beforeEach(() =>
        googleMainPage.navigate()
    )

    it('Verify correct google search results appear after hitting enter button', () => {
        googleMainPage.searchForKeywordPressEnter('du co')
        googleMainPage.validateDuCoPositionedFirstPlace()
    })

    it('Verify search button works properly', () =>{
        googleMainPage.searchForKeywordPressEnter('du co')
        googleMainPage.clearSearchBoxField()
        googleMainPage.searchForKeyword('Cypress')
        cy.get('.FAuhyb').click()
        googleMainPage.validateCypressPositionedFirstPlace()
    })

    it('Verify 10 webpages returned on the 2nd page of search results', () =>{
        googleMainPage.searchForKeywordPressEnter('text')
        googleMainPage.clickOnNextButton()
        googleMainPage.validateNumberOfElementsReturnedInResults(10)
    })

    it('Verify Url adress after click Videos link', () =>{
        googleMainPage.searchForKeywordPressEnter('text')
        googleMainPage.clickOnLink('Videos')
        googleMainPage.validateExpectedUrlIsOpened('Videos')
    })

    it('Verify Url adress after click Maps link', () =>{
        googleMainPage.searchForKeywordPressEnter('text')
        googleMainPage.clickOnLink('Maps')
        googleMainPage.validateExpectedUrlIsOpened('Maps')
    })

    it('Verify Url adress after click Images link', () =>{
        googleMainPage.searchForKeywordPressEnter('text')
        googleMainPage.clickOnLink('Images')
        googleMainPage.validateExpectedUrlIsOpened('Images')
    })

    it('Verify Url adress after click News link', () =>{
        googleMainPage.searchForKeywordPressEnter('text')
        googleMainPage.clickOnLink('News')
        googleMainPage.validateExpectedUrlIsOpened('News')
    })

    it('verify one element returned in results contain 3 parts: subject, URL, short description', () =>{
        googleMainPage.searchForKeywordPressEnter('du co')
        cy.get('[class="g"] .r span').eq(0).should('be.visible')
        cy.get('[class="g"] .TbwUpd').eq(0).should('be.visible')
        cy.get('[class="g"] .st').eq(0).should('be.visible')
    })


    // it('verify keyboard appears after clicking keyboard button', () =>{})

    // it('verify popup with text: "Use your microphone" appears after clicking micro button', () =>{})

    //it('verify pagination at the bottom of the result page'){})

    //it('verify content of each tab in search menu: Images, Videos, Maps,Images, News'){})



})
