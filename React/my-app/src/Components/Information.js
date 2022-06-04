import React from 'react';

class Information extends React.Component {
constructor(props) {
    super(props);

    this.state = { 
            name: "Nigar Ashurova",
            job: "Front Developer",
            salary: 4000  
    };
   
}

myFunction = ()=>{
    this.setState (
        {
            name: "Samire Muradova",
            job: "Backend Developer",
            salary: 300
        }
    );
   
}


    render() {
        return (
          <div className='text-center'>
              <p>Name : {this.state.name}</p>
              <p>Job : {this.state.job}</p>
              <p>Salary: {this.state.salary}</p>
              <button className='btn btn-primary' onClick={this.myFunction}>Set Information</button>
          </div>
        );
        
    
    }
}



export default Information;


