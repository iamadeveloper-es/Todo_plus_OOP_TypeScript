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
const listDiv = document.getElementById('note-list') as HTMLDivElement;


const noteList = new NoteList();
const allNotes = noteList.getAllNotes();


const noteListUI = new NoteListUI(allNotes);
noteListUI.renderAllNotes(listDiv);

noteListUI.deleteNote();

console.log(allNotes);

//Handlers
btnFormNotes.addEventListener('click', e => {
  e.preventDefault();
  const inptTitlteVal = inptTitle.value;
  const inptTextVal = inptText.value;

  if (inptTitlteVal != '' && inptTextVal != '') {
    const newNote = new Note(inptTitlteVal, inptTextVal);
    noteList.addNote(newNote)
    noteListUI.addNote(newNote, listDiv);
    noteListUI.deleteNote();
    clearFormInpts(inptTitle, inptText);
    console.log(allNotes);
  } else {
    console.log('vacio');
  }
});