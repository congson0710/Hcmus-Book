import React from 'react'
import View from './View'

class Home extends React.Component{
    render(){
        return(
            <View {...this.props} {...this.state}></View>
        )
    }
}

export default Home