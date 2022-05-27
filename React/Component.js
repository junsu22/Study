import React from 'react';


// --------------Class component----------------------
// 정의
class ClassComponent extends React.Component {
    render() {
        return (<div>Hello</div>)
    }
}

// 사용
<ClassComponent />

// -------------Function component---------------------

// 정의1
function FunctionComponent() {
    return <div>Hello</div>;
}

// 정의2
const FunctionComponent = () => <div>Hello</div>;
// 사용
<FunctionComponent />



