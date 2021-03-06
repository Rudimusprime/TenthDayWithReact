class App extends React.Component {
    state = {
        number1: 0,
        number2: 0,
        number3: 0,
    }

    handleClick1 = () => {
        this.setState({
            number1: this.state.number1 + 1,
        })
    }

    handleClick2 = () => {
        this.setState({
            number2: this.state.number2 + 1,
        })
        this.setState({
            number2: this.state.number2 + 2,
        })
        this.setState({
            number2: this.state.number2 + 3,
        })
    }

    handleClick3 = () =>{
        this.setState(()=>({
            number3: this.state.number3 + 1,
        }))
        this.setState(()=>({
            number3: this.state.number3 + 2,
        }))
        this.setState(()=>({
            number3: this.state.number3 + 3,
        }))
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick1}>Podbji o 1</button>
                <h1>{this.state.number1}</h1>
                <button onClick={this.handleClick2}>Podbji o 3</button>
                <h1>{this.state.number1}</h1>
                <button onClick={this.handleClick3}>Podbji o 3</button>
                <h1>{this.state.number3}</h1>
            </div>
        )
    }


}

ReactDOM.render(<App/>, document.getElementById('root'));