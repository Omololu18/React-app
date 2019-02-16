import React from "react";

var students = [{
    name: "Frank",
    age: 22,
    hobby: "singing"
},
{
    name: "Vanessa",
    age: 21,
    hobby: "teaching"
},
{
    name: "Julie",
    age: 19,
    hobby: "Drawing"
},
{
    name: "Jerry",
    age: 20,
    hobby: "Writing"
},
]

class NewComponent extends React.Component{
    render(){
        return <div>
            {
                students.map(function(person, index){
                    return <li key={index}> My name is {person.name}. I am {person.age} year old. I love {person.hobby} </li>
                })
            }
        </div>
    }
}

export default NewComponent;