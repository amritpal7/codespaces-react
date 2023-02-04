import React from 'react'
import { Link } from 'react-router-dom';
class Chips extends React.Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }

    render() {
        return (
            <div>
<h1 style={{color: "red", textDecoration: "underline"}}>Chips</h1>
<Link exact to="/" >Go Back</Link>

            </div>
        )
    }

}

export default Chips;