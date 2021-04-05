import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import FormList from "./components/FormList";
import TodoList from "./components/TodoList";
import EditModal from "./components/EditModal";
import DeleteList from "./components/DeleteList";

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learning react",
      },
      {
        id: 2,
        title: "Watching",
      },
    ],
    isEdit: false,
    isDelete: false,
    editData: {
      id: "",
      title: "",
    },
  };

  update = () => {
    const { id, title } = this.state.editData;
    const newData = { id, title };
    const newTodos = this.state.todos;
    newTodos.splice(id - 1, 1, newData);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
      },
    });
  };

  setTitle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value,
      },
    });
  };

  openDel = () => {
    this.setState({
      isDelete: true,
    });
  };

  closeDel = () => {
    this.setState({
      isDelete: false,
    });
  };

  openEdit = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data,
      },
    });
  };

  closeEdit = () => {
    this.setState({
      isEdit: false,
    });
  };

  deleteTask = (id) => {
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
      isDelete: false,
    });
  };

  addTask = (data) => {
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data,
    };
    this.setState({
      todos: [...this.state.todos, newData],
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>First App</h3>
        </div>
        <div className="List-items">
          {todos.map((items) => (
            <TodoList
              todo={items}
              open={this.openEdit}
              openDel={this.openDel}
            />
          ))}
        </div>
        <div className="form-list">
          <FormList add={this.addTask} />
        </div>
        <EditModal
          edit={this.state.isEdit}
          close={this.closeEdit}
          change={this.setTitle}
          data={this.state.editData}
          update={this.update}
        />
        {todos.map((items) => (
          <DeleteList
            key={items.id}
            todos={items}
            deld={this.state.isDelete}
            closed={this.closeDel}
            del={this.deleteTask}
          />
        ))}
      </div>
    );
  }
}

export default App;
