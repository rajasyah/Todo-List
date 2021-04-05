import React from "react";
import Button from "./Button";
import "../styles/FormList.css";

class FormList extends React.Component {
  state = {
    text: "",
  };
  change = (e) => {
    this.setState({ text: e.target.value });
  };
  submit = (e) => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.add(this.state.text);
    }
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <div>
        <form className="form-input" onSubmit={this.submit}>
          <input
            type="text"
            onChange={this.change}
            value={this.state.text}
            placeholder="New Task"
          />
          <Button text="Add" color="primary" action={this.submit} />
        </form>
      </div>
    );
  }
}

export default FormList;
