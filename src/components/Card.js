import React from "react"

export default function Card(props) {
    console.log(props)

    let badgeText
    if(props.dog.adopted === true) {
        badgeText = "Adopted!"
    } else if (props.dog.daysInShelter < 30) {
        badgeText = "New Arrival!"
    } else {
        badgeText = "Available!"
    }

    
    return (
        <div className="card">
            {badgeText && <div className="card--badge" >{badgeText}</div>}
            <img className="card--image" src={props.dog.cardImage} alt="Golden Retriever"/>
            <div style={{margin:"0 10px 0px 10px"}}>
                <h3 className="card--title">{props.dog.name}</h3>
                <h4>Age: {props.dog.age}</h4>
                {!props.dog.adopted && <h5>At shelter for {props.dog.daysInShelter} days</h5>}
            </div>
        </div>
    )
}