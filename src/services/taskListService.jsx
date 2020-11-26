import data from '../resources/data.json';

export function getTaskListsByBoardId(boardId) {
  return data.lists.filter((listItem) => listItem.boardId === boardId);
}

export default getTaskListsByBoardId;
