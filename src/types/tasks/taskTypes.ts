export interface CreateTask {
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  NEW = "N",
  IN_PROGRESS = "P",
  COMPLETE = "C",
}

export interface TaskFilter {
  status: TaskStatus;
  search: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

export enum TaskViewEnum {
  standard = "standard",
  status = "status",
}
