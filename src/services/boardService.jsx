import data from '../resources/data.json';

// Get the board by Id
export function getBoardById(boardId) {
  return data.boards.find((listItem) => listItem.id === boardId);
}

export default getBoardById;
