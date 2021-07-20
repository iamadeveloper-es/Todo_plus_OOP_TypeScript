import { INote, Note } from './Note';

export class NoteListUI {
  note: Note;
  noteList: Array<Note> = [];

  constructor(noteList: Array<Note>) {
    this.noteList = noteList;
  }
  HTMLNote(note: Note): Node {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="note">
      <div class="note-title">
        <span>Title: <br>${note.title}</span>
      </div>
      <div class="note-text">
        <span>Text: <br>${note.text}</span>
      </div>
      <div class="note-actions">
        <button type="button" name="delete" class="delete btn-custom">Borrar</button>
      </div>
    </div>
  `;
    return div;
  }
  addNote(note: Note, nodeList: HTMLElement) {
    nodeList.appendChild(this.HTMLNote(note));
  }
  deleteNote() {
    const btnDelete = document.querySelectorAll('.delete');
    btnDelete.forEach(btn => {
      btn.addEventListener('click', e => {
        console.log(e.target);
        btn.parentElement.parentElement.remove();
      });
    });
  }
  renderAllNotes(nodeList: HTMLElement) {
    this.noteList.forEach((note, index) => {
      nodeList.appendChild(this.HTMLNote(note));
      return nodeList;
    });
  }
}
