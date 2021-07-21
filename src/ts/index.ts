import '../scss/style.scss';
import { clearFormInpts } from './utils/helpers';
import { Note } from './class/notes/Note';
import { NoteList } from './class/notes/NoteList';
import { NoteListUI } from './class/notes/NoteListUI';

console.clear();

// Write TypeScript code!
const btnFormNotes = document.querySelector('#form-notes button') as HTMLFormElement;
const inptTitle = document.getElementById('inpt-title') as HTMLInputElement;
const inptText = document.getElementById('inpt-text') as HTMLInputElement;
const noteListNode = document.getElementById('note-list') as HTMLDivElement;
/* const formModal = document.getElementById('new-note-form') as HTMLDivElement;
const btnModal = document.getElementById('btn-modal')  */

const noteList = new NoteList();


const allNotes = noteList.getAllNotes();


const noteListUI = new NoteListUI(allNotes);
noteListUI.renderAllNotes(noteListNode, noteList);
noteListUI.notesLength(noteList);



//Handlers
btnFormNotes.addEventListener('click', e => {
  e.preventDefault();
  const inptTitlteVal = inptTitle.value;
  const inptTextVal = inptText.value;

  if (inptTitlteVal != '' && inptTextVal != '') {
    const newNote = new Note(inptTitlteVal, inptTextVal);
    noteList.addNote(newNote)
    noteListUI.addNote(newNote, noteListNode);
    console.log(allNotes)
    noteListUI.notesLength(noteList);
    clearFormInpts(inptTitle, inptText);
  } else {
    console.log('vacio');
  }
}); 

noteListNode.addEventListener('click', (e) => {
  noteListUI.deleteNote(e)
  const id  = noteListUI.deleteNote(e)
  noteList.deleteNote(id)  
  noteListUI.notesLength(noteList);
  
})

/* btnModal.addEventListener('click', () => {
  formModal.classList.add('open')
  
})
formModal.addEventListener('click', (e) => {
  const target = e.target as Element
  console.log(target)
  if(target.getAttribute('id') === 'new-note-form'){
    formModal.classList.remove('open')
  }
})
 */