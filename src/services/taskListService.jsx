import data from '../resources/data.json';

// Get the taskLists belonging to this board
export function getTaskListsByBoardId(boardId) {
  return data.lists.filter((listItem) => listItem.boardId === boardId);
}

export function getTaskListById(taskListId) {
  return data.lists.find((listItem) => listItem.id === taskListId);
}
