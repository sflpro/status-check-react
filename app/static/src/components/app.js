import { h, Component } from 'preact';

import Header from "./header/Header";
import Sort from "./sort/Sort";

export default class App extends Component{


    constructor(){
        super();

        this.store = {
            status:'in',
            sortBy:'fullName',
            employees:[]
        };
        this.handleHeaderChange('in');
    }

    /*init(state){
        this.setState(state);
    }*/
    handleSortChange(value){
   //     this.store.sortBy
        this.setState({sortBy:value});
    }

     getStaff(){
        console.log('staff');
        return new Promise(function (res,rej) {
            /*const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "api/staff", true);
            xhttp.send();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const staff = JSON.parse(this.responseText);
                    console.log(staff);
                    res(staff)
                }
            };*/
            setTimeout(function () {
                res([
                    { "fullName":"JohnDoe", "status":"in", "id":"7", "lastStatusChange":"2017-10-19T10:24:15.000Z" },
                    { "fullName":"JohnDoe5", "status":"out", "id":"27", "lastStatusChange":"2017-10-19T10:22:15.000Z" },
                    { "fullName":"JohnDoe4", "status":"in", "id":"27", "lastStatusChange":"2017-10-19T10:21:15.000Z" },
                    { "fullName":"JohnDoe3", "status":"out", "id":"27", "lastStatusChange":"2017-10-19T10:32:15.000Z" },
                    { "fullName":"JohnDoe1", "status":"out", "id":"27", "lastStatusChange":"2017-10-19T10:12:15.000Z" }
                ])
            },4000)
        })

    }

    handleHeaderChange(status){
        console.log(status);

        const self = this;
        const staff= [];
        console.log(this.fetchEmployees());
        /*const staff = this.fetchEmployees()().then(e=>{
            self.setState({status:status,employees:e})
        });*/
        console.log(staff);
        //self.setState({status:status,employees:this.fetchEmployees()});

        //const status = this.state.status=='out'?'in':'out';
        /*this.getStaff().then(function (res) {
            self.setState({status:status,employees:res});
        })*/
        //this.init({});
    }

    fetchEmployees(){
        console.log('fetching..');
        const self = this;
        return async  ()=> {
            return await self.getStaff();
        };

        /*this.setState({employees:[
            { "fullName":"JohnDoe", "status":"in", "id":"7", "lastStatusChange":"2017-10-19T10:24:15.000Z" },
            { "fullName":"JohnDoe2", "status":"out", "id":"27", "lastStatusChange":"2017-10-19T10:22:15.000Z" }
        ]});*/

      /*  return [
            { "fullName":"JohnDoe", "status":"in", "id":"7", "lastStatusChange":"2017-10-19T10:24:15.000Z" },
            { "fullName":"JohnDoe5", "status":"out", "id":"27", "lastStatusChange":"2017-10-19T10:22:15.000Z" },
            { "fullName":"JohnDoe4", "status":"in", "id":"27", "lastStatusChange":"2017-10-19T10:21:15.000Z" },
            { "fullName":"JohnDoe3", "status":"out", "id":"27", "lastStatusChange":"2017-10-19T10:32:15.000Z" },
            { "fullName":"JohnDoe1", "status":"out", "id":"27", "lastStatusChange":"2017-10-19T10:12:15.000Z" }
        ];*/
    }



    render(){
        const employees = this.state.employees.filter(e=>e.status==this.state.status);
        return(
            <div>
                <Header nav={this.state.status} handleHeaderChange={this.handleHeaderChange.bind(this)} />
                <Sort employees={employees} handleSortChange={this.handleSortChange.bind(this)} />
            </div>
        )
    }
}