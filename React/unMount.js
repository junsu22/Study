// component unMount (< v16.3)
class App extends React.Component {
    _interval;

    constructor(props) {
        console.log('App construnctor');
        super(props);
        this.state = {
            age: 30,

        };
    }



    componentDidMount() {
        console.log('App componentDidMount');
        this._interval = window.setInterval(() => {
            this.setState({
                age: this.state.age + 1,
            });
        }, 1000);
    }
    componentWillUnmount() {
        console.log('App componentWillunMount');
        clearInterval(this._interval);
    }
    render() {
        console.log('App render');
        return (
            <div>{this.state.age < 50 && <Button />}</div>
        );
    }

}


class Button extends React.Component {
    componentWillUnmount() {
        console.log('Button componentWillUnmount');

    }
    render() {
        return <>hello!</>
    }
}