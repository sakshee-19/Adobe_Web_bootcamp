import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bugActionCreators from './action';

class ProjectCard extends Component{
	render(){
		let { project, toggle } = this.props;
		let projectStyle = 'bugname ' + (project.isClosed ? 'closed' : '');
		console.log(this.props);
		return(
			<li>
				<span 
					className={projectStyle}
					onClick={() => toggle(project)}
				>
					{project.name}
				</span>
				<div className="datetime">{project.createdAt.toString()}</div>
				<input type="button" value="remove" onClick={event => this.props.removeSelected(project)}/>
			</li>
		);
	}
}

class ProjStats extends Component{
	render(){
		let { projects }= this.props;
		return(
			<section className="stats">
				<span className="closed">{(projects.filter(proj=>proj.isClosed===true)).length}</span>
				<span> / </span>
				<span>{projects.length}</span>
			</section>
		)
	}
}

class ProjEdit extends Component{
	state = { newProjName : '' };
	onAddNewClick = () => {
		this.props.addNewProject(this.state.newProjName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Project Name :</label>
				<input type="text" onChange={ evt => this.setState({newProjName : evt.target.value}) }/>
				<input type="button" value="Add New" onClick={ this.onAddNewClick }/>
			</section>
		)
	}
}

class ProjList extends Component{
	render(){
		let { projects, removeClosed, toggle, removeSelected } = this.props,
			projItems = projects.map(project => (<ProjectCard project={project} toggle={toggle} key={project.id} removeSelected={removeSelected} ></ProjectCard>));
			
		return(
			<section className="list">
				<ol>
					{projItems}					
				</ol>
				<input type="button" value="Remove Closed" onClick={removeClosed}/>
			</section>
		)
	}
}

class Project extends Component{
	render(){
		let { projects, toggle, addNewProject, removeClosed, removeSelected } = this.props;
		return(
			<section>
				<br/>
				<h1>Project Manager</h1>
				<hr/>
				<ProjStats projects={projects} />
				<ProjEdit addNewProject={addNewProject} />
				<ProjList projects={projects} toggle={toggle} removeSelected={removeSelected} removeClosed={removeClosed} />
			</section>
		)
	}
}

function mapStateToProps(storeState){
	let projects = storeState.projectState;
	return { projects : projects };
}

function mapDispatchToProps(dispatch){
	let bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
	return bugActionDispatchers;
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Project);