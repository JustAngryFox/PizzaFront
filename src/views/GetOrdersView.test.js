import { render,screen } from '@testing-library/vue'

import GetOrdersView from './GetOrdersView.vue'

test ('renders GetOrdersView component',()=>{
	render(GetOrdersView)
	
	screen.debug()
})