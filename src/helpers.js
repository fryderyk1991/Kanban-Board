const getColumnTaskCount = (columnId, tasks) => tasks.filter((task) => task.idColumn === columnId).length;

const getNextColumn = (currentCol, columns) => {
    const nextCol = currentCol + 1;
    return columns.some((col) => col.id === nextCol)
};

const getNameOfCol = (nextCol, columns) => columns.find((col) => col.id === nextCol).name

export { getColumnTaskCount, getNextColumn, getNameOfCol };
