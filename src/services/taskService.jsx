import data from '../resources/data.json';

// Get the tasks belonging to this list
export function getTasksByTaskListId(listId) {
  return data.tasks.filter((task) => task.listId === listId);
}

export default getTasksByTaskListId;
