import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {
        savingNewNote: (state) => {
          state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
          state.notes.push(action.payload);
          state.isSaving = false
        },
        setActiveNote: (state, action) => {
          state.active = action.payload;
        },
        setNotes: (state, action) => {
          state.notes = action.payload
        },
        setSaving: (state) => {
          state.isSaving = true
        },
        updateNote: (state, action) => {
          state.isSaving = false
          const index = state.notes.findIndex(el => el.id === action.payload.id)

          state.notes[index] = action.payload
        },
        deleteNoteById: (state, action) => {
          
        }
    }
});
// Action creators are generated for each case reducer function
export const {
  savingNewNote, 
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;