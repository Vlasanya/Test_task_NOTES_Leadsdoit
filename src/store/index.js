import { createStore } from 'vuex'


const localStoragePlugin = (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('notes', JSON.stringify(state.notes))
  })
}

const savedNotes = localStorage.getItem('notes')

export default createStore({
  state: {
    notes: savedNotes ? JSON.parse(savedNotes) : []
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note)
    },
    deleteNote (state, noteId) {
      const index = state.notes.findIndex(note => note.id === noteId);
      if (index !== -1) {
        state.notes.splice(index, 1);
      }
    },
    updateNote(state, updatedNote) {
      const index = state.notes.findIndex(note => note.id === updatedNote.id);
      if (index !== -1) {
        state.notes.splice(index, 1, updatedNote);
      }
    },
    clearNotes(state) {
      state.notes = [];
    },
    toggleFavorite(state, noteId) {
      const note = state.notes.find(note => note.id === noteId);
      if (note) {
        note.isFavorite = !note.isFavorite;
      }
    },
    
  },
  actions: {
    addNote({ commit }, note) {
      commit('addNote', note)
    },
    deleteNote({ commit }, noteId) {
      commit('deleteNote', noteId)
    },
    updateNote ({ commit }, note) {
      commit('updateNote', note);
    },
    clearAllNotes({ commit }) {
      commit('clearNotes');
    },
    toggleFavorite({ commit }, noteId) {
      commit('toggleFavorite', noteId);
    },
  },
  getters: {
    allNotes: (state) => state.notes,
    getNoteById: (state) => (id) => {
      return state.notes.find(note => note.id === id);
    },
  },
  plugins: [localStoragePlugin] 
})
