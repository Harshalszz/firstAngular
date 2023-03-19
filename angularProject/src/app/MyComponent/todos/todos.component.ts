import { Component,Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
 
  todos: Todo[];
  constructor(){
    this.todos = [
      {
        sno:3,
        title: " kjdsnkndf",
        desc : "dsfdf",
        active: true
      },
      {
        sno:4,
        title: " kjdsnkndf",
        desc : "dsfdf",
        active: true
      }
    ]
  };
  
  deleteTodo(todo:Todo){
    console.log(todo);

    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);

  }

}
