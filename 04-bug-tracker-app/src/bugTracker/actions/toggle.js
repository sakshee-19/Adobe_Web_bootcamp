export function toggle(bugToToggle){
	let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
	let action = { type : 'UPDATE_BUG', payload : toggledBug };
	return action;
}