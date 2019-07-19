var currentProjId = 0;
export function addNewProject(newProjName){
	let newProj = { 
		id : ++currentProjId,
		name : newProjName,
		isClosed : false,
		createdAt : new Date()
	};
	let action = { type : 'ADD_NEW_PROJECT', payload : newProj };
	return action;
}