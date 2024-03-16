<template>
  <form
    @submit.prevent="handleSubmit"
    class="note-form card relative bg-white border border-slate-200 rounded-3xl p-8 cursor-pointer card pt-16"
  >
    <img
      src="/close.svg"
      alt="Close"
      class="close-icon absolute right-4 top-4 cursor-pointer"
      @click="closeForm"
    />
    <div class="form-group">
      <label for="title" class="form-label">Name</label>
      <input id="title" v-model="note.title" class="form-input" required />
    </div>
    <div class="form-group">
      <label for="content" class="form-label">Description</label>
      <textarea id="content" v-model="note.content" class="form-textarea" required></textarea>
    </div>
    <div class="form-group">
      <label for="category" class="form-label">Category</label>
      <select id="category" v-model="note.category" class="form-select" required>
        <option disabled value="">Choose category</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <button type="submit" class="button">Change</button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    initialNote: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      note: { title: '', content: '', category: '', id: null },
      categories: ['Work', 'Family', 'Hobby']
    }
  },
  watch: {
    initialNote: {
      immediate: true,
      deep: true,
      handler(newVal) {
        this.note = { ...newVal }
      }
    }
  },
  computed: {
    ...mapGetters(['getNoteById']),
    currentNoteForEdit() {
      const noteId = Number(this.noteId)
      console.log(this.getNoteById(this.noteId))
      return this.getNoteById(noteId)
    }
  },
  methods: {
    handleSubmit() {
      const now = new Date().toISOString()
      this.note.editDate = now
      this.$emit('saveEditedNote', this.note)
      this.resetForm()
      this.closeForm()
    },

    resetForm() {
      this.note = { ...this.initialNote }
    },
    editNote() {
      this.$emit('edit-note', this.noteId)
    },

    closeForm() {
      this.$emit('closeForm')
    }
  }
}
</script>

<style scoped></style>
