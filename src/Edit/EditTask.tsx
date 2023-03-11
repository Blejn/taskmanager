import React, { Component, FormEvent } from "react";
import {
  EditProps,
  EditStateActual,
  MyPropsTodo,
  MyState,
} from "../types/types";
import { TiDelete } from "react-icons/ti";
export default class EditTask extends Component<EditProps, EditStateActual> {
  constructor(props: EditProps) {
    super(props);
    this.state = {
      ...this.props,
      editTaskAction: "",
      editTaskDescription: "",
    };
  }
  updateNewTextInputAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ editTaskAction: event.target.value });
  };
  updateNewTextInputDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ editTaskDescription: event.target.value });
  };
  editTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.editTask(
      this.props.action,
      this.state.editTaskAction,
      this.state.editTaskDescription
    );
  };

  render() {
    return (
      <div className="container_card">
        <div className=" relative overflow-hidden card w-80  h-96 bg-[#c471c7] rounded-lg ">
          <div className="text-3xl font-bold border-b-4  h-1/8 ">
            <h1>Edit Task</h1>
            <TiDelete
              onClick={() => this.props.modalHandler(this.props.item)}
              className="absolute cursor-pointer  top-1 right-2 hover:text-[#7a207d]"
            />
          </div>
          <form className="h-7/8" onSubmit={this.editTask} action="">
            <div className="h-1/5">
              <label className=" mb-2 block uppercase tracking-wide font-bold">
                Title
              </label>
              <input
                name="action"
                onChange={this.updateNewTextInputAction}
                className="text-black appearance-none text-black-700 rounded py-1 px-4 focus:outline-none"
                type="text"
              />
            </div>
            <div className="h-1/5">
              <label className="mb-2 block uppercase tracking-wide font-bold">
                Description
              </label>
              <input
                onChange={this.updateNewTextInputDescription}
                name="description"
                className="text-black appearance-none text-black-700 rounded py-1 px-4  focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex h-48 items-end justify-center ">
              <button
                type="submit"
                className="bg-[#c471c7] hover:bg-[#b041b4] text-white font-semibold hover:text-white py-2 px-4   shadow-[0_4px_9px_-4px_#9c12a1]  rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
