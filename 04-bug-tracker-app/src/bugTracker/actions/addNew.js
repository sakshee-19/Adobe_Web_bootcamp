var currentBugId = 0;
export function addNew(newBugName){
	let newBug = { 
		id : ++currentBugId,
		name : newBugName,
		isClosed : false,
		createdAt : new Date()
	};
	let action = { type : 'ADD_NEW_BUG', payload : newBug };
	return action;
}