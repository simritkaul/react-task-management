// src/redux/taskSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  CreateTask,
  Task,
  TaskFilter,
  TaskStatus,
} from "../types/tasks/taskTypes"; // Define your Task type
import {
  fetchTasksAPI,
  fetchTaskByIdAPI,
  createTaskAPI,
  updateTaskAPI,
  deleteTaskAPI,
  updateTaskStatusAPI,
} from "../api/task"; // Import your API functions

interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

// Async Thunks for API calls
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (taskFilter: TaskFilter) => {
    const response = await fetchTasksAPI(taskFilter);
    return response.data; // Adjust based on your API response structure
  }
);

export const fetchTaskById = createAsyncThunk(
  "tasks/fetchTaskById",
  async (taskId: string) => {
    const response = await fetchTaskByIdAPI(taskId);
    return response.data; // Adjust based on your API response structure
  }
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData: CreateTask) => {
    const response = await createTaskAPI(taskData);
    return response.data; // Adjust based on your API response structure
  }
);

export const updateTaskStatus = createAsyncThunk(
  "tasks/updateTaskStatus",
  async ({ taskId, status }: { taskId: string; status: TaskStatus }) => {
    const response = await updateTaskStatusAPI(taskId, status);
    return response.data; // Adjust based on your API response structure
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ taskId, taskData }: { taskId: string; taskData: CreateTask }) => {
    const response = await updateTaskAPI(taskId, taskData);
    return response.data; // Adjust based on your API response structure
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId: string) => {
    await deleteTaskAPI(taskId);
    return taskId; // Return the ID for removing it from the state
  }
);

// Create the tasks slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tasks";
      })
      .addCase(fetchTaskById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTaskById.fulfilled,
        (state, action: PayloadAction<Task>) => {
          state.loading = false;
          const existingTask = state.tasks.find(
            (task) => task.id === action.payload.id
          );
          if (existingTask) {
            Object.assign(existingTask, action.payload); // Update existing task
          } else {
            state.tasks.push(action.payload); // Add new task
          }
        }
      )
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch task";
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.loading = false;
        state.tasks.push(action.payload); // Add the new task to state
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create task";
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.loading = false;
        const existingTask = state.tasks.find(
          (task) => task.id === action.payload.id
        );
        if (existingTask) {
          Object.assign(existingTask, action.payload); // Update existing task
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update task";
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload); // Remove deleted task
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete task";
      });
  },
});

// Export the actions and the reducer
export default taskSlice.reducer;
