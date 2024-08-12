import React from "react"

export default function Card(props) {
    console.log(props)

    const badgeText = props.dog.adopted === true ? "Adopted!" : props.dog.daysInShelter < 30 ? "New Arrival!" : "Available"

    const badgeStyle = props.dog.adopted === true ?
        { backgroundColor: "#FFADAD" } :
        props.dog.daysInShelter < 30 ?
            { backgroundColor: "#BDB2FF" } :
            { backgroundColor: "#CAFFBF" };

    
    return (
        <div className="card">
            {badgeText && <div className="card--badge" style={badgeStyle}>{badgeText}</div>}
            <img className="card--image" src={props.dog.cardImage} alt="Golden Retriever"/>
            <div className="card--info">
                <h3 className="card--title">{props.dog.name}</h3>
                <h4>Age: {props.dog.age}</h4>
                {props.dog.adopted === false ? <h5>At shelter for {props.dog.daysInShelter} days</h5> : <h5>Happily adopted!</h5>}
            </div>
        </div>
    )
}