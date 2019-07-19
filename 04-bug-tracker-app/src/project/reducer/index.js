function projectReducer(currentState = [], action){
	if (action.type === 'ADD_NEW_PROJECT'){
		let newProj = action.payload;
		let newState = [...currentState, newProj];
		return newState;
	}
	if (action.type === 'UPDATE_PROJECT'){
		let updatedProj = action.payload;
		let newState = currentState.map(proj => proj.id === updatedProj.id ? updatedProj : proj);
		return newState; 
    }
    if (action.type === 'REMOVE_PROJECT'){
		let projToRemove = action.payload;
		let newState = currentState.filter(proj => proj.id !== projToRemove.id);
		return newState;
	}
	return currentState;
}

export default projectReducer;
