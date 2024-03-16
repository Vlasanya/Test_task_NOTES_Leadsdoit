<template>
    <div class="w-80 mx-auto bg-red-50 rounded-xl shadow-xl mt-14">
        <HeaderComponent />
    
      <NoteEdit
        :initialNote="currentNoteForEdit"
        @saveEditedNote="handleUpdateNote"
        @closeForm="closeForm"
        />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import NoteEdit from '../components/NoteEdit.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    NoteEdit,
    HeaderComponent
  },
  data() {
   return {
      noteId: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters(['getNoteById']),
    currentNoteForEdit() {
        const noteId = Number(this.noteId)
      return this.getNoteById(noteId);
    },
  },
  methods: {
    ...mapActions(['updateNote']),
    handleUpdateNote(updatedNote) {
      this.updateNote(updatedNote);
      this.$router.push('/');
    },
    closeForm() {
      this.$router.push('/'); 
    },
  },
  }
</script>