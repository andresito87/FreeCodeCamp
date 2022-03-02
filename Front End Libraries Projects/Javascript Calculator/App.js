const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "×", "-", "+", "="];

class App extends React.Component {
  state = {
    lastPressed: undefined,
    currentNumber: "0",
    prevNumber: undefined,
  }

  handleClick = (event) => {
    const { lastPressed, currentNumber, prevNumber } = this.state;
    const { innerText } = event.target;

    if (!Number.isNaN(Number(innerText))) {
      if (currentNumber === "0") {
        this.state({
          currentNumber: innerText
        })
      } else {
        this.state({
          currentNumber: currentNumber + innerText
        })
      }
    }

    switch (innerText) {
    }

    this.setState({
      lastPressed: innerText
    })
  }
  render() {
    const {currentNumber} = this.state;
    return (
      <div className="calculator">
        <div id="display" className="display">
          {currentNumber}
        </div>
        <div className="nums-container">
          <button className=" big-h light-grey ac" onClick={this.handleClick}>
            AC
          </button>
          {nums.map((num) => (
            <button
              className={`dark-grey ${num === 0 && "big-h"}`}
              key={num}
              onClick={this.handleClick}>
              {num}
            </button>
          ))}
          <button className="light-grey" onClick={this.handleClick}>.</button>
        </div>
        <div className="ops-container" onClick={this.handleClick}>
          {ops.map((op) => (
            <button className="orange" key={op}>
              {op}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
