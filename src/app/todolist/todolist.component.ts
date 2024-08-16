import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  newTodo: string = '';
  todos: { task: string, isEditing: boolean }[] = [];
  addTodo(){
    if(this.newTodo.trim()){
      this.todos.push({task: this.newTodo.trim(), isEditing: false});
      this.newTodo = '';

    }
  }
  editTask(index: number) {
    this.todos[index].isEditing = true;
  }

  saveTask(index: number) {
    if (this.todos[index].task.trim()) {
      this.todos[index].isEditing = false;
    } else {
      this.Delete(index);  // Delete task if the input is empty on save
    }
  }
  Delete(index: number){
    this.todos.splice(index, 1);
  }
}
