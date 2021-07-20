import { Note } from './Note';

export class NoteList {
  note: Note;
  noteList: Array<Note> = [];

  constructor() {}
  addNote(note: Note): Array<Note> {
    this.noteList.push(note);
    return this.noteList;
  }
  deleteNote(index: number) {
    this.noteList.splice(index, 1);
    console.log(this.getAllNotes());
  }
  getAllNotes(): Array<Note> {
    return this.noteList;
  }
}
