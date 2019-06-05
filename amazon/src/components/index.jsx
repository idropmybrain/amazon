import React from 'react';
import './../App.css';
import includes from 'lodash/includes';

const Tag = (props) => {
  if(!props.data.status )
  // console.log("========= ", includes((props.data.first_name+props.data.last_name) , props.filterText));
  if(props.selected)
  return (props.data.isSelectedStatus &&
    <div className="d-flex flex-row pr-2 mb-2 justify-content-between mr-2" style={{'borderRadius':'30px','backgroundColor':'#ebebeb'}}>
      <img className="d-flex " style={{'width':'30px','height':'30px','borderRadius':'50%'}} src={props.data.avatar}/>
      <div className="d-flex my-auto p-1" style={{"fontSize":'10px'}}>{props.data.first_name+' '+props.data.last_name}</div>
      <span className="my-auto d-flex" style={{'fontSize':'15px'}} onClick={()=>{props.onDeleteClick(props.index)}}>X</span>
    </div>
  );
  else return (!props.data.isSelectedStatus && includes((props.data.first_name+props.data.last_name).toUpperCase() , props.filterText.toUpperCase()) &&
    <div className="d-flex flex-row pr-2 p-2 justify-content-between notSelected" onClick={()=>{props.onSelectClick(props.index)}}>
      <img className="d-flex " style={{'width':'30px','height':'30px','borderRadius':'50%'}} src={props.data.avatar}/>
      <div className="d-flex my-auto p-1" style={{"fontSize":'14px'}}>{props.data.first_name+' '+props.data.last_name}</div>
      <span className="ml-2" style={{'fontSize':'10px','color':'#bebebe'}}>{props.data.email}</span>
    </div>
);
}

export default Tag;