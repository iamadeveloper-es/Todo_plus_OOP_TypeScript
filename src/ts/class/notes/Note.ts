export interface INote {
    title: String;
    text: String;
    done: Boolean;
  }
  export class Note implements INote {
    note: INote;
    title: String;
    text: String;
    done: Boolean = false;
  
    constructor(title: String, text: String) {
      this.title = title;
      this.text = text;
    }
  
    getNote(): Object {
      this.note.title = this.title;
      this.note.text = this.text;
      return this.note;
    }
  }
  