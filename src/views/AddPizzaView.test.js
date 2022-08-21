import { render,screen } from '@testing-library/vue'

import AddPizzaView from './AddPizzaView.vue'

test ('renders AddPizzaView component',()=>{
	render(AddPizzaView)
	
	screen.debug()
})