function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW_BUG'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'UPDATE_BUG'){
		let updatedBug = action.payload;
		let newState = currentState.map(bug => bug.id === updatedBug.id ? updatedBug : bug);
		return newState; 
	}
	if (action.type === 'REMOVE_BUG'){
		let bugToRemove = action.payload;
		let newState = currentState.filter(bug => bug.id !== bugToRemove.id);
		return newState;
	}
	return currentState;
}

export default bugsReducer;