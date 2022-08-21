import { render,screen } from '@testing-library/vue'

import GetOrder from './GetOrder.vue'

test ('renders GetOrder component',()=>{
	render(GetOrder)
	
	screen.debug()
})