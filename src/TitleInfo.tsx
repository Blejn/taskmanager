import React, { Component } from "react";
import { MyProps } from "./types/types";

class TitleInfo extends Component<MyProps, {}> {
  render = () => {
    return (
      <div className="bg-[#9c12a1]">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {" "}
          TASK MANAGER
          {/* Lista zadań dla użytkownika: {this.props.userName} */}
          <br />
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Liczba zadań do wykonania: &nbsp;
          {this.props.todoItems.filter(task => !task.done).length}
        </p>
      </div>
    );
  };
}

export default TitleInfo;
