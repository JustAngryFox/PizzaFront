import { render,screen } from '@testing-library/vue'

import ProfileView from './ProfileView.vue'

test ('renders ProfileView component',()=>{
	render(ProfileView)
	
	screen.debug()
})