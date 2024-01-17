import React from 'react'

const SimpleCounter = (props) => {
    return (
        <>
            <div className="contenedor">
                <div className="reloj">
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div className="cuatro">{props.digitocuatro}</div>
                <div className="tres">{props.digitotres}</div>
                <div className="dos">{props.digitodos}</div>
                <div className="uno">{props.digitouno}</div>
            </div>
        </>

    )

}



export default SimpleCounter