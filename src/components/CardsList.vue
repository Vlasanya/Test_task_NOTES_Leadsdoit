<script>
import CardComponent from './CardComponent.vue';

export default {
  components: {
    CardComponent,
  },
  props: {
    notes: Array,
  },
  methods: {
    handleEditNote(note) {
      this.$emit('editNote', note);
    },
    addToFavorites(note) {
      this.$emit('addToFavorites', note);
    },
    handleDeleteNote(noteId) {
      this.note = this.notes.filter(note => note.id !== noteId);
      this.$store.dispatch('deleteNote', noteId);
    }
  },
};
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <CardComponent
      v-for="note in notes"
      :key="note.id"
      :id="note.id"
      :title="note.title"
      :content="note.content"
      :category="note.category"
      :creationDate="note.creationDate"
      :editDate="note.editDate"
      :isFavorite="note.isFavorite"
      @deleteNote="handleDeleteNote"
      @onClickFavorite="addToFavorites(note)"
      @editNote="handleEditNote"
    />
  </div>
</template>
