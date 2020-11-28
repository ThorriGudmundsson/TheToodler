import data from '../resources/data.json';

// Get the tasks belonging to this list
export function getTasksByTaskListId(listId) {
  return data.tasks.filter((task) => task.listId === listId);
}

export function getTaskByTaskListId(listId) {
  return data.tasks.find((task) => task.listId === listId);
}

export function getTaskById(taskId) {
  return data.tasks.find((task) => task.id === taskId);
}
