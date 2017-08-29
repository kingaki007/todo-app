export function selectTask(task){
    console.log(task.name);
    return {
        type : 'BOOK_SELECTED',
        payload : task
    }
}