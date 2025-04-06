import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Enables router-outlet rendering
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApiService } from './services/api.service'; // Service for fetching data

// Define the internal task structure used in the app
interface Task {
  id: number;
  task: string;
  completed: boolean;
}

// Define the structure returned by the API
interface APITask {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,      // Needed for <router-outlet>
    HeaderComponent,   // Custom navigation bar
    FooterComponent,   // Custom footer
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Task Manager';

  tasklist: Task[] = [];  // Local array to store task objects
  nextId: number = 1;     // Used to assign IDs to newly added tasks

  constructor(private apiService: ApiService) {
    this.loadTasksFromAPI(); // Fetch tasks when app loads
  }

  // Fetch task data from public API and convert to internal format
  loadTasksFromAPI() {
    this.apiService.getTasks().subscribe((tasks: APITask[]) => {
      this.tasklist = tasks.map((t: APITask) => ({
        id: t.id,
        task: t.title,       // Map 'title' from API to 'task' in local data
        completed: t.completed,
      }));
      this.nextId = this.tasklist.length + 1;
    });
  }

  // Add a new task to the list (used in earlier versions or future reuse)
  addTask(taskName: string) {
    const task: Task = {
      id: this.nextId++,
      task: taskName,
      completed: false,
    };
    this.tasklist.push(task);
  }

  // Remove a task by ID
  deleteTask(taskId: number) {
    this.tasklist = this.tasklist.filter((t) => t.id !== taskId);
  }
}
