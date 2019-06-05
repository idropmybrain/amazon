import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tag from './components'
import data from './data.json';
const dataArr = [
  {
    name: 'bharath nagesh',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },
  {
    name: 'aa',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },{
    name: 'abcd',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },{
    name: 'bhusan kumar',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },{
    name: 'Bhavesh Joshi',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },{
    name: 'Useless amazon',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },{
    name: 'Super flipkart',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },{
    name: 'bhusan kumar',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },{
    name: 'Bhavesh Joshi',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },{
    name: 'Useless amazon',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  },{
    name: 'Super flipkart',
    status:false,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldqQkHcGq8YmquLLwCt82A5ekcjFPFgZGU55EelsvdRBwrhObbQ',
  }
];



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataArr: data.map((item)=>{let data = item;
      data.isSelectedStatus=false;
    return data}),
      open: false,
      searchText: '',
      count: 0
    }
  }
  onDeleteClick = (index) => {
    var arr = this.state.dataArr;
    arr[index].isSelectedStatus = false;
    this.setState({dataArr: arr})
  }
  
  onSelectClick = (index) => {
    var arr = this.state.dataArr;
    arr[index].isSelectedStatus = true;
    this.setState({dataArr: arr})
  }
  isBackSpacePreesed = (event) => {
    var char = event.which || event.keyCode;
    console.log("KeyCode", char);
    if(char === 8 && event.target.value === ''){
      if(this.state.count < 1)
      this.setState({count: this.state.count+1});
      else{
        var arr = this.state.dataArr;
        for(var i = (arr.length -1) ; i>=0; i--){
          if(arr[i].isSelectedStatus )
          {
            arr[i].isSelectedStatus = false;
            break;
          }
        }
        this.setState({dataArr: arr, count: 0})
      }
    }
    
    
  }
  
  render(){
    return (
    <div className="App">
      <header className="App-header container mt-5">
        {/* <input></input> */}
        <div className="d-flex flex-row flex-wrap" style={{'borderBottom':'2px blue solid'}}>

          { this.state.dataArr.map((item,index) => <Tag data={item} index={index} selected={true} onDeleteClick={this.onDeleteClick}/>)}
          <div>
            <input style={{'height':'30px', 'border':'none'}} 
              // onBlur={()=>{this.setState({open:false})}} 
              onFocus={()=>{this.setState({open:true})}}
              onChange={(e)=>{this.setState({searchText: e.target.value})}}
              onKeyDown={(e)=>{this.isBackSpacePreesed(e)}}
            />
            {this.state.open && <div className="viewOptions mt-2"
              // onBlur={()=>{this.setState({open:false})}} 
              // onFocus={()=>{this.setState({open:false})}}
                                >
              {this.state.dataArr.map((item,index) =><Tag data={item} selected={false}
                index={index}
                onSelectClick={this.onSelectClick}
                filterText={this.state.searchText}/>)}
                </div>}
          </div>
        </div>
      </header>
    </div>
  );
}
}

export default App;
