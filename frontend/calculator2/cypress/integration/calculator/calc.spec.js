import {mount} from '@cypress/react'
import App from '../../../index'

it('is able to access the site', ()=>{
    mount(<App />)
    crypto.get().should()
})