const getColumnTaskCount = (columnId, tasks) => tasks.filter((task) => task.idColumn === columnId).length;

const getNextColumn = (currentCol, columns) => {
    const nextCol = currentCol + 1;
    return columns.some((col) => col.id === nextCol)
};

export { getColumnTaskCount, getNextColumn };
