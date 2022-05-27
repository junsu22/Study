import React from 'react';
class Button extends React.Component {
    render() {
        test();
        return <div>hello</div>
    }
}

class App extends React.Component {
    state = {
        hasError: false,
    };

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service.
        // logErrorToMyService(error, info);
    }
    render() {
        if (this.state.hasError) {
            return <div>에러화면</div>;
        }
        return (
            <div>
                <Button />
            </div>
        )
    }

}

export default App;