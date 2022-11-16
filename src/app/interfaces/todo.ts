export class Todo {
  todo_id: number;
  titre: string;
  statut: string;
  date: String;
  description: string;

constructor(todo_id: number,
  titre: string,
  statut: string,
  date: String,
  description: string  ){
    this.todo_id = todo_id;
    this.titre = titre;
    this.statut = statut;
    this.date = date;
    this.description = description;
  }
}
