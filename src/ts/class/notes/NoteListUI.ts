import { INote, Note } from './Note';
import { NoteList } from './NoteList';

export class NoteListUI {
  note: Note;
  noteList: Array<Note> = [];

  constructor(noteList: Array<Note>) {
    this.noteList = noteList;
  }
  HTMLNote(note: Note): Node {
    const div = document.createElement('div');
    div.setAttribute('class', 'note')
    div.setAttribute('data-id', `${note.id}`)
    div.innerHTML = `
    <div class="note-title">
      <span>Title: <br>${note.title}</span>
    </div>
    <div class="note-text">
      <span>Text: <br>${note.text}</span>
    </div>
    <div class="note-actions">
      <button type="button" name="delete" class="delete btn-custom">Borrar</button>
    </div>
    <div class="note-date">
      <span class="date">Creada: ${note.noteDate}/${note.noteMonth}</span>
    </div>
  `;
    return div;
  }
  addNote(note: Note, nodeList: HTMLElement) {
    nodeList.appendChild(this.HTMLNote(note));
  }
  deleteNote(e: Event): string {
    const target = e.target as Element
    let targetNameAttr: string = (target as Element).getAttribute('name')
    
    if(targetNameAttr === 'delete'){
      console.log(e.target)
      const parent = target.parentElement.parentElement
      parent.remove()
      const parentId = parent.getAttribute('data-id')
      return parentId
      
    }
    
  }
  notesLength(notes: NoteList){
    const noteLength = document.querySelector('.notes-length') as HTMLDivElement;
    if(notes.getAllNotes().length > 0){
      noteLength.innerHTML = `${notes.getAllNotes().length.toString()} creadas`
    }else{
      noteLength.innerHTML = ''
    }
  }
  renderAllNotes(nodeList: HTMLElement, notes: NoteList) {
    this.noteList.forEach((note, index) => {
      nodeList.appendChild(this.HTMLNote(note));
      return nodeList;
    });
  }
}
