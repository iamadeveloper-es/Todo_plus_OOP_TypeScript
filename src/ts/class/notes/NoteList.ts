import { Note } from './Note';

export class NoteList {
  note: Note;
  noteList: Array<Note> = [];

  constructor() {}
  addNote(note: Note): Array<Note> {
    this.noteList.push(note);
    return this.noteList;
  }
  deleteNote(id: string) {
    this.getAllNotes().forEach((note, index) => {
      if(note.id === id){
        this.noteList.splice(index, 1);
      }
    })
  }
  getAllNotes(): Array<Note> {
    return this.noteList;
  }
}
