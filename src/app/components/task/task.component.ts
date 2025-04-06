import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service'; // Service to fetch tasks from API

// Interface for transformed local task used in the UI
interface Task {
  id: number;
  task: string;
  completed: boolean;
}

// Interface matching the API response structure
interface APITask {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import basic modules and ngModel support
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  tasklist: Task[] = [];            // Local list of tasks shown in the UI
  newTask: string = '';             // Input for adding a new task
  searchTerm: string = '';          // Text used to filter task list
  nextId = 1;                       // Used to assign unique ID to new tasks

  constructor(private apiService: ApiService) {
    this.loadTasks();              // Load tasks from API when component is created
  }

  // Load task data from public API and transform into local Task[]
  loadTasks() {
    this.apiService.getTasks().subscribe((tasks: APITask[]) => {
      this.tasklist = tasks.map((t: APITask) => ({
        id: t.id,
        task: t.title,
        completed: t.completed,
      }));
      this.nextId = this.tasklist.length + 1;
    });
  }

  // Return filtered list based on search term
  get filteredTasks(): Task[] {
    return this.tasklist.filter((t) =>
      t.task.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Add a new task to the tasklist
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasklist.push({
        id: this.nextId++,
        task: this.newTask,
        completed: false,
      });
      this.newTask = '';
    }
  }

  // Remove a task by ID
  deleteTask(id: number) {
    this.tasklist = this.tasklist.filter((t) => t.id !== id);
  }

  // Toggle task completion status
  toggleComplete(task: Task) {
    task.completed = !task.completed;
  }
}
