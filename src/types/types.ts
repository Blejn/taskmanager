export type MyProps = { userName: string; todoItems: Todo[] };
export type MyPropsTodo = {
  userName: string;
  todoItems: Todo[];
  newTaskAction: string;
  modalHandler(todo: Todo): any;
  newTaskDescription: string;
  callback(todo: Todo): any;
  editTask(actionCurrent: string, action: string, description: string): any;
  itemsDone: boolean;
  formValid: boolean;
  deleteTask(array: Array<Todo>, action: string, description: string): any;
};

export type MyState = {
  userName: string;
  todoItems: Todo[];
  newTaskAction: string;

  newTaskDescription: string;
  itemsDone: boolean;
  formValid: boolean;
  searchBar: string;
};
export interface Todo {
  action: string;
  done: boolean;
  description: string;
  isModal: boolean;
}

export interface TodoEdit {
  action: string;
  done: boolean;
  description: string;
  isModal: boolean;
}
export type FormError = {
  action: string;
  description: string;
};
export type EditStateActual = {
  item: any;
  action: string;
  description: string;
  isModal: boolean;
  editTaskAction: string;
  editTaskDescription: string;
  modalHandler(todo: Todo): any;
};
export type EditProps = {
  item: any;
  action: string;
  description: string;
  isModal: boolean;
  editTask(actionCurrent: string, action: string, description: string): any;

  modalHandler(todo: Todo): any;
};
export type MyStateCard = {
  userName: string;
  todoItems: Todo[];
  newTaskAction: string;
  newTaskDescription: string;
  itemsDone: boolean;
  formValid: boolean;
};
