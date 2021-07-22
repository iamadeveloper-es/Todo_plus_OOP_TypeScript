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
      <span class="title">Título:</span><br>
      <span>${note.title}</span>
    </div>
    <div class="note-text">
      <span class="text">Texto:</span><br>
      <span>${note.title}</span>
    </div>
    <div class="note-actions">
      <!--<button type="button" name="update" class="update btn-custom turquoise">Actualizar</button>-->
      <button type="button" name="delete" class="delete m4 btn-custom danger">Borrar</button>
    </div>
    <div class="note-date">
      <span class="date">Creada: </span><br>
      <span>${note.noteDate}/${note.noteMonth}</span>
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
    let text = ''
    switch(notes.getAllNotes().length){
      case 1:
        text = 'nota'
        noteLength.innerHTML = `<div>${notes.getAllNotes().length.toString()} ${text}</div>`
        break;
      case 0:
        noteLength.innerHTML = ''
        break;
      default:
        text = 'notas'
        noteLength.innerHTML = `<div>${notes.getAllNotes().length.toString()} ${text}</div>`
        break;
    }
  }
  renderAllNotes(nodeList: HTMLElement, notes: NoteList) {
    this.noteList.forEach((note, index) => {
      nodeList.appendChild(this.HTMLNote(note));
      return nodeList;
    });
  }
}
