import React from "react";

function ItemListContainer(props) {
    return (
        <div className="container">
            <h1> {props.greeting} </h1>
        </div>
    )
}

export default ItemListContainer;