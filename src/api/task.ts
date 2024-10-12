// src/api/tasks.ts
import { CreateTask, TaskFilter, TaskStatus } from "../types/tasks/taskTypes";
import axiosInstance from "./axiosInstance";

export const fetchTasksAPI = async (taskFilter: TaskFilter) => {
  return await axiosInstance.get(`/tasks`);
};

export const fetchTaskByIdAPI = async (taskId: string) => {
  return await axiosInstance.get(`/tasks/${taskId}`);
};

export const createTaskAPI = async (taskData: CreateTask) => {
  return await axiosInstance.post(`/tasks`, taskData);
};

export const updateTaskStatusAPI = async (
  taskId: string,
  status: TaskStatus
) => {
  return await axiosInstance.patch(`/tasks/${taskId}/status`, { status });
};

export const updateTaskAPI = async (taskId: string, taskData: CreateTask) => {
  return await axiosInstance.put(`/tasks/${taskId}`, taskData);
};

export const deleteTaskAPI = async (taskId: string) => {
  return await axiosInstance.delete(`/tasks/${taskId}`);
};
