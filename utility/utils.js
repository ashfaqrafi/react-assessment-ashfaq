'use client'

export const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
    
// export const getTasksFromLocalStorage = () => {
//     const storedTasks = localStorage.getItem('tasks');
//     return storedTasks ? JSON.parse(storedTasks) : [];
// }
