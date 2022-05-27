
// 16버젼이상
class App extends React.Component {
    _interval;

    constructor(props) {
        console.log('App constructor');
        super(props);
        this.state = {
            age: 30,
        };
    }
    componetWillMount() {
        console.log('App componentWillMount');
    }

    componentDidMount() {
        console.log('App componentDidMount');
        this.interval = window.setInterval(() => {
            this.setState({
                age: this.state.age + 1,
            });
        }, 1000);
    }
    componentWillUnmount() {
        console.log('App componentWillUnmount');
        claerInterval(this._interval);
    }

    render() {
        console.log('App render');
        return (
            <div>
                <h2>
                    Hello {this.props.name} = {this.state.age}
                </h2>
            </div>
        )
    }
}









//  Component props , state 변경 (<v16.3)
componentWillReceiveProps(nextProps){
    console.log(
        `App componentWillReceiveProps: ${JSON.strungify(
            this.props
        )}=> ${JSON.strungify(nextProps)}`
    );
}
shouldComponentUpdate(nextProps, nextState) {
    console.log(
        `App ShouldComponetUpdate : ${JSON.stringify(
            this.props
        )}=>${JSON.stringify(nextProps)}, ${JSON.stringify(
            this.state
        )}=> ${JSON.stringify(nextState)}`
    );
    return true;
}

componentWillUpdate(nextProps, nextState) {
    console.log(
        `App componentWillupdate : ${JSON.stringify(
            this.props
        )}=> ${JSON.stringify(nextProps)}, 
        ${JSON.stringify(
            this.state
        )}=> ${JSON.stringify(nextState)}`
    );
}


componentDidUpdate(prevProps, prevState) {
    console.log(
        `App componentDidUpdate: ${JSON.stringify(
            prevProps
        )} => ${JSON.stringify(this.props)}, ${JSON.stringify(
            prevState
        )}=> ${JSON.stringify(this.state)}`
    )
}