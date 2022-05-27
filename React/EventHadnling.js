class Comp extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log('clicked');
                }}>클릭
                </button>
            </div>
        )
    }
}

// CamelCase로만 사용할수 있음. ex.) onClick, onMouseEnter
// 이벤트에 연결된 자바스크립트 코드는 함수.{}
// 이벤트 = {함수} 와 같이 사용
// 실제 DOM 요소들에만 사용 가능
// 리액트에 사용하면 props로 전달