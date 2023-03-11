import React, { Component } from "react";
import { BsTrash } from "react-icons/bs";
import EditTask from "../Edit/EditTask";
import { MyPropsTodo, MyState, MyStateCard, Todo } from "../types/types";

export default class Table extends Component<MyPropsTodo, MyStateCard> {
  constructor(props: MyPropsTodo) {
    super(props);
    this.state = {
      ...this.props,
    };
  }
  deleteTask = (item: Todo) => {
    this.props.deleteTask(this.props.todoItems, item.action, item.description);
  };

  render() {
    return (
      <>
        {" "}
        {this.props.itemsDone === true ? (
          <>
            {this.props.todoItems
              .filter(item => item.done === false)
              .map(item => (
                <div key={item.action}>
                  <div className="relative block w-72 h-64 rounded-lg bg-white p-6 shadow-lg dark:bg-[#c471c7]">
                    <button
                      onClick={() => this.props.modalHandler(item)}
                      className="absolute  top-2 right-4"
                    >
                      Edit
                    </button>

                    {item.done ? (
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50  line-through ">
                        {item.action}
                      </h5>
                    ) : (
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50  ">
                        {item.action}
                      </h5>
                    )}
                    <div className="h-3/5">
                      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200     ">
                        {item.description}
                      </p>
                    </div>

                    <div>
                      {item.done === true ? (
                        <>
                          {" "}
                          <button
                            type="button"
                            className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            onClick={() => this.deleteTask(item)}
                          >
                            Delete
                          </button>
                        </>
                      ) : (
                        <>
                          <input
                            checked={item.done}
                            type="checkbox"
                            onChange={() => this.props.callback(item)}
                            className="w-4 h-4 #9c12a1 bg-gray-100 border-gray-300 rounded focus:#9c12a1 dark:focus:#9c12a1 dark:ring-offset-gray-800 focus:ring-2 dark:#9c12a1 dark:#9c12a1"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  {item.isModal ? (
                    <>
                      {" "}
                      <EditTask
                        item={item}
                        action={item.action}
                        description={item.description}
                        isModal={item.isModal}
                        modalHandler={this.props.modalHandler}
                        editTask={this.props.editTask}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
          </>
        ) : (
          <>
            {this.props.todoItems
              .filter(item => item.done === true)
              .map(item => (
                <div key={item.action}>
                  <div className="block w-72 h-64 rounded-lg bg-white p-6 shadow-lg dark:bg-[#c471c7]">
                    {item.done ? (
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50  line-through ">
                        {item.action}
                      </h5>
                    ) : (
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50  ">
                        {item.action}
                      </h5>
                    )}
                    <div className="h-3/5">
                      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200     ">
                        {item.description}
                      </p>
                    </div>

                    <div>
                      {item.done === true ? (
                        <>
                          {" "}
                          <button
                            type="button"
                            className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            onClick={() =>
                              this.props.deleteTask(
                                this.props.todoItems,
                                item.action,
                                item.description
                              )
                            }
                          >
                            Delete
                          </button>
                        </>
                      ) : (
                        <>
                          <input
                            checked={item.done}
                            type="checkbox"
                            onChange={() => this.props.callback(item)}
                            className="w-4 h-4 #9c12a1 bg-gray-100 border-gray-300 rounded focus:#9c12a1 dark:focus:#9c12a1 dark:ring-offset-gray-800 focus:ring-2 dark:#9c12a1 dark:#9c12a1"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </>
    );
  }
}
