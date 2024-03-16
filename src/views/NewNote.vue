<template>
    <div class="w-80 mx-auto bg-red-50 rounded-xl shadow-xl mt-14">
        <HeaderComponent />
        <NoteForm
            :initialNote="currentNoteForEdit"
            @addNote="addNote"
        />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import NoteForm from '../components/NoteForm.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    NoteForm,
    HeaderComponent
  },
  data() {
    return {
      showNoteForm: false,
      currentNoteForEdit: {},
      isEditing: false,
      sortCriterion: 'title',
      searchQuery: ''
    }
  },
  methods: {
    ...mapActions(['addNote']),
  }
}
</script>