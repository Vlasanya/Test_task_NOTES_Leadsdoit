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
    <button type="submit" class="button">Save</button>
  </form>
</template>

<script>
export default {
  props: {
    initialNote: {
      type: Object,
      default: () => ({})
    },
    showNoteForm: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      note: { ...this.initialNote },
      categories: ['Work', 'Family', 'Hobby']
    }
  },

  methods: {
    handleSubmit() {
      const now = new Date().toISOString()
      this.note.creationDate = now
      if (!this.note.id) {
        this.note.id = Date.now()
      }
      this.$emit('addNote', this.note)
      console.log(this.note)
      this.resetForm()
      this.closeForm()
    },

    resetForm() {
      this.note = { ...this.initialNote }
    },

    closeForm() {
    this.$router.push('/');
    this.$emit('closeForm');
  }
  }
}
</script>

<style scoped>

</style>
