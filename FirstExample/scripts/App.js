class App extends React.Component {
    state = {
        number1: 0,
    }

    render() {
        return (
            <div>
                <button>Podbji o 1</button>
                <h1></h1>
            </div>
        )
    }


}

ReactDOM.render(<App/>, document.getElementById('root'));