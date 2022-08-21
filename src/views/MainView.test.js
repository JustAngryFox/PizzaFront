import { render,screen } from '@testing-library/vue'

import MainView from './MainView.vue'

test ('renders MainView component',()=>{
	render(MainView)
	
	screen.debug()
})