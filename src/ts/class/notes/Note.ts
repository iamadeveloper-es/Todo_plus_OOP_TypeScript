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
    done: Boolean = false;
    noteDate: String
  
    constructor(title: String, text: String) {
      this.title = title;
      this.text = text;
      this.assignId();
      this.assignDate();
    }
  
    getNote(): Object {
      this.note.title = this.title;
      this.note.text = this.text;
      return this.note;
    }
    assignId(): String {
      const date = new Date()
      const idComponents = [
        date.getTime(),
        date.getMilliseconds()
      ]
      const id = idComponents.join("")
      this.id = id
      return this.id

    }
    assignDate(): String{
      const date = new Date()
      this.noteDate = `${date.getDate()}/${date.getMonth()}`
      return this.noteDate
    }
  }
  