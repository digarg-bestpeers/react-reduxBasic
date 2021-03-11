import React from 'react'
import { buyCake } from "../redux"
import { connect } from "react-redux"


function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// For one Reducer
// const mapStateToProps = state => {
//     return {
//         numberOfCakes: state.numberOfCakes
//     }
// }


// For more than one reducer
const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}



const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

// as per new Update
// const mapDispatchToProps =  {
//     buyCake: buyCake,
// }


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

