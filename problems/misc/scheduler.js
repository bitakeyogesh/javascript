//JavaScript Scheduler implementation using promises
// Please note that we need to only execute "n" (concurrent) tasks at a time before proceeding to execute other tasks.

class TaskScheduler {
    constructor(concurrency) {
        this.limit = concurrency;
        this.active = 0;
        this.pool = [];
    }
    push(task) {
        this.pool.push(task);
        if (this.active < this.limit) {
            this.active += 1;
            this.execute(this.pool.shift());
        }
    }
    execute(task) {
        task().then(val => {
            console.log(`${val} executed`);
            this.active -= 1
            if (this.pool.length && this.active < this.limit) {
                this.execute(this.pool.shift());
            }
        });
    }
}

const task = () => new Promise((res, rej) => setTimeout(() => res('task'), 4000));
const task2 = () => new Promise((res, rej) => setTimeout(() => res('task'), 200));

const scheduler = new TaskScheduler(2);
scheduler.push(task);
scheduler.push(task2);
scheduler.push(task2);
scheduler.push(task2);
scheduler.push(task);
scheduler.push(task);
scheduler.push(task);
scheduler.push(task);