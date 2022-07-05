import React from "react";

const Tile = (props) => {
    return (
        <div id={props.number} onClick={props.onClick} className={props.className} style={{backgroundColor: props.color}}>{props.number}
        </div>
    )
}

export default Tile;