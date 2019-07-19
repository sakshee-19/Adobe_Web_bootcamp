export function removeClosed(){
	//find the closed 
	return function(dispatch, getState){
		let proj = getState().projectState,
			closedProj = proj.filter(pjct => pjct.isClosed);

		closedProj
			.forEach(closedPrjct => {
				let action = { type : 'REMOVE_PROJECT', payload : closedPrjct};
				dispatch(action);
			});
	}
}

export function removeSelected(project){
	return function(dispatch, getState){
		// let proj = getState().projectState;
		let action = { type : 'REMOVE_PROJECT', payload : project};
		dispatch(action);
	}
}