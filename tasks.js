class Task {
    constructor(name, time, cost) {
        this.name = name;
        this.time = time;
        this.cost = cost;
    }
}

class TaskManager {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    // Жадный алгоритм по времени выполнения
    selectTasks(maxTime) {
        const sorted = [...this.tasks].sort((a, b) => a.time - b.time);
        const selected = [];
        let totalTime = 0;

        for (const task of sorted) {
            if (totalTime + task.time <= maxTime) {
                selected.push(task);
                totalTime += task.time;
            } else {
                break;
            }
        }

        return selected;
    }
}

// Пример использования
const list = [
    new Task("Первая задача", 2, 500),
    new Task("Вторая задача", 5, 1200),
    new Task("Третья задача", 1, 300),
    new Task("Четвертая задача", 3, 400),
    new Task("Пятая задача", 7, 800),
];

const manager = new TaskManager(list);
const chosen = manager.selectTasks(8);

console.log("Выбранно:");
chosen.forEach(t => console.log(`- ${t.name} (${t.time} дней)`));
