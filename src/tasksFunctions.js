const getColumnTaskCount = (columnId, tasks) => tasks.filter(task => task.idColumn === columnId).length;

const getColumnLimit = (id, collArr) => collArr.find(col => col.id === id ? col.limit : null);

export { getColumnTaskCount, getColumnLimit };
