import {mount} from '@cypress/react'
import App from '../../../index'

describe('calculator app', ()=>{
    // beforeEach(()=>{
    //     cy.visit(App)
    // })
    mount(App)
    it('can be displayed', ()=>{
        cy.get('h1').contains('Display: ')
    })
})