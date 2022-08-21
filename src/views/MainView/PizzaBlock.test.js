import { render,screen } from '@testing-library/vue'

import PizzaBlock from './PizzaBlock.vue'

test ('renders PizzaBlock component',()=>{
	render(PizzaBlock)
	
	screen.debug()
})