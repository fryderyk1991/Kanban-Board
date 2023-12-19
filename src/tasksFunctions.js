const getColumnTaskCount = (columnId, tasks) => tasks.filter(task => task.idColumn === columnId).length;


export default getColumnTaskCount;
