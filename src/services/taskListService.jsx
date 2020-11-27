import data from '../resources/data.json';

// Get the taskLists belonging to this board
export function getTaskListsByBoardId(boardId) {
  return data.lists.filter((listItem) => listItem.boardId === boardId);
}

export default getTaskListsByBoardId;
