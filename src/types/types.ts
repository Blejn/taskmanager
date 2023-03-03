export type MyProps = { userName: string; todoItems: Todo[] };
export type MyPropsTodo = {
  userName: string;
  todoItems: Todo[];
  newTaskAction: string;
  newTaskDescription: string;
  callback(todo: Todo): any;
  itemsDone: boolean;
};

export type MyState = {
  userName: string;
  todoItems: Todo[];
  newTaskAction: string;
  newTaskDescription: string;
  itemsDone: boolean;
};
export interface Todo {
  action: string;
  done: boolean;
  description: string;
}
