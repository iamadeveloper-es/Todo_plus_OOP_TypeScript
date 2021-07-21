export interface INote {
    title: String;
    text: String;
    id: String;
    done: Boolean;
  }
  export class Note implements INote {
    note: INote;
    title: String;
    text: String;
    id: String;
    date: Date;
    done: Boolean = false;
    noteDate: String;
    noteMonth: String
    
  
    constructor(title: String, text: String) {
      this.title = title;
      this.text = text;
      this.date = new Date();
      this.noteDate = this.date.getDate().toString();
      this.noteMonth = this.date.getMonth().toString();
      this.assignId();
    }
  
    getNote(): Object {
      this.note.title = this.title;
      this.note.text = this.text;
      return this.note;
    }
    assignId(): String {
      const idComponents = [
        this.date.getTime(),
        this.date.getMilliseconds()
      ]
      const id = idComponents.join("")
      this.id = id
      return this.id

    }
  }
  