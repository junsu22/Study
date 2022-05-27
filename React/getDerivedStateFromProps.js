// getDerivedStateFromProps
import React from 'react';

class App extends React.Component {
    state = {
        age: 0,
    }
};



getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (prevState.age !== nextProps.age) {
        return {
            age: nextProps.age
        }
        return null;
    }
    render() {
        console.log('App render');
        return <div>{this.state.age}</div>
    }
}


export default App;
