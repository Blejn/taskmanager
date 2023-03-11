import React, { ChangeEvent, ChangeEventHandler, Component } from "react";

import "./App.css";
import { BsTrash } from "react-icons/bs";
import TitleInfo from "./TitleInfo";
import { FormError, MyProps, MyState, Todo, TodoEdit } from "./types/types";
import Table from "./table/Table";
class App extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      userName: "Sebastian",
      todoItems: [],
      newTaskAction: "",
      newTaskDescription: "",
      itemsDone: true,
      formValid: false,
      searchBar: "",
    };
  }
  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Sebastian" ? "Magda" : "Sebastian",
    });
  };
  updateNewTextInputAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTaskAction: event.target.value });
  };
  updateNewTextInputDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ newTaskDescription: event.target.value });
  };

  createNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(
      {
        todoItems: [
          ...this.state.todoItems,
          {
            action: this.state.newTaskAction,
            done: false,
            description: this.state.newTaskDescription,
            isModal: false,
          },
        ],
        newTaskAction: "",
        newTaskDescription: "",
      },
      () => localStorage.setItem("todos", JSON.stringify(this.state.todoItems))
    );
  };
  // editTask = (task:Todo) => {
  //   this.setState({
  //     todoItems:this.state.todoItems.map(item=>{
  //       item.action ===  task.action ? {
  //         ...item,
  //       }
  //     })
  //   })
  // };

  toggleChange = (task: Todo) => {
    this.setState(
      {
        todoItems: this.state.todoItems.map(item =>
          item.action === task.action ? { ...item, done: !item.done } : item
        ),
      },
      () => localStorage.setItem("todos", JSON.stringify(this.state.todoItems))
    );
  };
  editHandler = (task: Todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === task.action ? { ...item, isModal: !item.isModal } : item
      ),
    });
  };
  editTask = (action: string, actionEdit: string, descriptionEdit: string) => {
    this.setState(
      {
        todoItems: this.state.todoItems.map(item =>
          item.action === action
            ? {
                action: actionEdit,
                done: false,
                description: descriptionEdit,
                isModal: false,
              }
            : item
        ),
      },
      () => localStorage.setItem("todos", JSON.stringify(this.state.todoItems))
    );
  };
  changeMode = () => {
    this.setState({
      itemsDone: !this.state.itemsDone,
    });
  };

  deleteTask = (array: Array<Todo>, action: string, description: string) => {
    let index = array.findIndex(x => x.action === action);
    array.splice(index, 1);
    this.setState(
      {
        todoItems: [...array],
      },
      () => localStorage.setItem("todos", JSON.stringify(this.state.todoItems))
    );
  };
  // searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   let allTodos = localStorage.getItem("todos");

  //   const todos = this.state.todoItems.filter(todo => {
  //     return todo.action.toLowerCase().includes(event.target.value);
  //   });

  //   if (event.target.value === "") {
  //     this.setState(
  //       allTodos != null
  //         ? {
  //             todoItems: JSON.parse(allTodos),
  //           }
  //         : { todoItems: [...todos] }
  //     );
  //   }
  //   this.setState({
  //     todoItems: todos,
  //   });
  // };
  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null
        ? { todoItems: JSON.parse(data) }
        : {
            todoItems: [],
          }
    );
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <TitleInfo
          userName={this.state.userName}
          todoItems={this.state.todoItems}
        />
        <form onSubmit={this.createNewTask}>
          <div className=" flex flex-row justify-center gap-4 ">
            <div className="">
              <input
                placeholder="action..."
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block m-auto p-2.5 my-5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500  focus:outline-none focus:border-transparent focus:ring-0"
                type="text"
                id="newTask"
                name="action"
                value={this.state.newTaskAction}
                onChange={this.updateNewTextInputAction}
              />
            </div>
            <div className="">
              <input
                placeholder="description..."
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block m-auto p-2.5 my-5 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-transparent focus:ring-0"
                type="text"
                id="newTask"
                name="description"
                value={this.state.newTaskDescription}
                onChange={this.updateNewTextInputDescription}
              />
            </div>
          </div>

          <button
            className="bg-[#c471c7] hover:bg-[#b041b4] text-white font-semibold hover:text-white py-2 px-4   shadow-[0_4px_9px_-4px_#9c12a1]  rounded"
            type="submit"
          >
            Add Task
          </button>
        </form>

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
        {/* SEARCH BAR */}
        {/* <div className="">
          <input
            placeholder="search..."
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block m-auto p-2.5 my-5 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-transparent focus:ring-0"
            type="text"
            onChange={this.searchHandler}
          />
        </div> */}

        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {" "}
            {this.state.todoItems.length === 0 ? (
              <>Brak Zadań</>
            ) : (
              <>
                {" "}
                {this.state.itemsDone === true ? (
                  <>Do zrobienia</>
                ) : (
                  <> Wykonane</>
                )}
              </>
            )}
            <br />
          </h1>

          <div className="grid grid-cols-2 gap-4 justify-items-center  overflow-y-hidden">
            <Table
              userName={this.state.userName}
              todoItems={this.state.todoItems}
              newTaskAction={this.state.newTaskAction}
              callback={this.toggleChange}
              modalHandler={this.editHandler}
              newTaskDescription={this.state.newTaskDescription}
              itemsDone={this.state.itemsDone}
              formValid={this.state.formValid}
              editTask={this.editTask}
              deleteTask={this.deleteTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
