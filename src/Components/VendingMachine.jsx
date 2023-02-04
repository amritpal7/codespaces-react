import React from 'react'
import {Link} from "react-router-dom";
class VendingMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state= {}
    }

    render() {
        return (
            <div>
                <h1>
                    <strong>Vending Machine:</strong>
                </h1>
                <Link exact to="/soda" >Soda</Link>
                <Link exact to="/chips" >Chips</Link>
                <Link exact to="/fresh-sardines" >Fresh Sardines</Link>
            </div>
        )
    }

}

export default VendingMachine;