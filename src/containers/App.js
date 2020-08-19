import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
class App extends Component{
    constructor(){
        super()
        this.state= {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }
    render(){
        const filteredRobots= this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h2 className='tc mt5 white'>Loading...</h2>
        }else{
        return(
            <div className='tc'>
            <h1 className='f1'>Robofriends 2.0</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
        );
        }
    }
}
export default App;