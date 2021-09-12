import { TASK_COMPLETED_STATUS, TASK_PENDIND_STATUS } from 'contants';

function sortTasks(taskA, taskB) {
    if (taskA.status === TASK_COMPLETED_STATUS) {
        return -1;
    }

    if (taskB.status === TASK_COMPLETED_STATUS) {
        return 1;
    }

    if (new Date(taskA.endDate) > new Date(taskB.endDate)) {
        return 1;
    }

    if (new Date(taskA.endDate) < new Date(taskB.endDate)) {
        return -1;
    }

    return 0;
}

export default class TasksHelper {
    static isDelayed(task) {
        const taskDate = new Date(task.endDate);

        return new Date() > taskDate && task.status === TASK_PENDIND_STATUS;
    }

    static isComplete(task) {
        return task.status === TASK_COMPLETED_STATUS;
    }

    static sortTasks(tasks = []) {
        return tasks.sort(sortTasks);
    }
}
