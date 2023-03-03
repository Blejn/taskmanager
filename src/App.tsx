import React, { Component } from "react";

import "./App.css";
import { BsTrash } from "react-icons/bs";
import TitleInfo from "./TitleInfo";
import { MyProps, MyState, Todo } from "./types/types";
import Table from "./table/Table";
class App extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      userName: "Sebastian",
      todoItems: [
        {
          action: "Zrobić zakupy",
          done: false,
          description: "3 jajka, mąke, i sól kuchenna",
        },
        {
          action: "Umyć zęby",
          done: false,
          description: "Dokładnie szarować szczoteczką elektryczną",
        },
        {
          action: "Odkurzyć pokój",
          done: true,
          description: "Dodatkowo umyć podłogę",
        },
      ],
      newTaskAction: "",
      newTaskDescription: "",
      itemsDone: true,
    };
  }
  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Sebastian" ? "Magda" : "Sebastian",
    });
  };
  updateNewTextInputAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTaskAction: e.target.value });
    console.log(this.state.newTaskAction);
  };
  updateNewTextInputDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTaskDescription: e.target.value });
    console.log(this.state.newTaskDescription);
  };
  createNewTask = () => {
    if (
      !this.state.todoItems.find(
        i =>
          i.action === this.state.newTaskAction &&
          this.updateNewTextInputAction.length !== 0 &&
          this.updateNewTextInputDescription.length !== 0
      )
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          {
            action: this.state.newTaskAction,
            done: false,
            description: this.state.newTaskDescription,
          },
        ],
        newTaskAction: "",
        newTaskDescription: "",
        itemsDone: this.state.itemsDone,
      });
    }
    if (
      (this.state.newTaskAction === "" || this.state.newTaskAction === " ") &&
      (this.state.newTaskDescription === "" ||
        this.state.newTaskDescription === " ")
    ) {
      this.somethingIsWrong();
    }
  };
  somethingIsWrong = () => (
    <p style={{ color: "red", marginBottom: "1rem" }}>
      Something is wrong with form
    </p>
  );
  toggleChange = (task: Todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === task.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  changeMode = () => {
    this.setState({
      itemsDone: !this.state.itemsDone,
    });
    console.log(this.state.itemsDone);
  };

  deleteTask(task: Todo) {
    this.setState({});
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <TitleInfo
          userName={this.state.userName}
          todoItems={this.state.todoItems}
        />
        <div className=" flex flex-row justify-center gap-4 ">
          <div className="">
            <input
              placeholder="action..."
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block m-auto p-2.5 my-5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="newTask"
              value={this.state.newTaskAction}
              onChange={this.updateNewTextInputAction}
            />
          </div>
          <div className="">
            <input
              placeholder="description..."
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block m-auto p-2.5 my-5 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="newTask"
              value={this.state.newTaskDescription}
              onChange={this.updateNewTextInputDescription}
            />
          </div>
        </div>
        {this.somethingIsWrong()}
        <button
          disabled={
            (this.state.newTaskAction === "" ||
              this.state.newTaskAction === " ") &&
            (this.state.newTaskDescription === "" ||
              this.state.newTaskDescription === " ")
          }
          className="bg-[#c471c7] hover:bg-[#b041b4] text-white font-semibold hover:text-white py-2 px-4   shadow-[0_4px_9px_-4px_#9c12a1]  rounded"
          onClick={this.createNewTask}
        >
          Add Task
        </button>
        <div>
          <div className="w-full items-center my-5">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={this.changeMode}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-[#9c12a1]"></div>
            </label>
          </div>
        </div>
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {" "}
            {this.state.itemsDone === true ? <>Do zrobienia</> : <> Wykonane</>}
            <br />
          </h1>

          <div className="grid grid-cols-2 gap-4 justify-items-center  overflow-y-hidden">
            <Table
              userName={this.state.userName}
              todoItems={this.state.todoItems}
              newTaskAction={this.state.newTaskAction}
              callback={this.toggleChange}
              newTaskDescription={this.state.newTaskDescription}
              itemsDone={this.state.itemsDone}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
