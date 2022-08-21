import { render,screen } from '@testing-library/vue'

import GetProduct from './GetProduct.vue'

test ('renders GetProduct component',()=>{
	render(GetProduct)
	
	screen.debug()
})