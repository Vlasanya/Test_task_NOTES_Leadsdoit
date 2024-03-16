<template>
  <div class="w-80 mx-auto bg-red-50 rounded-xl shadow-xl mt-14">
    <HeaderComponent />

    <main class="p-10 bg-red-50">
      <div class="flex justify-between mb-10 items-center">
        <h2 class="text-3xl font-bold">Your notes</h2>
        <router-link to="/new" class="flex items-center">
          <p class="w-20">Add note</p>
          <img src="/plus.svg" alt="Plus" class="cursor-pointer" />
        </router-link>
        <button @click="clearNotes" class="button">Clean all notes</button>
        <div class="flex justify-between gap-4 items-center">
          <select
            @change="onChangeSelect"
            name="Rating"
            id=""
            class="p-4 border border-slate-300 rounded-md outline-none"
          >
            <option value="title">Name</option>
            <option value="creationDate">Date</option>
          </select>
          <div class="relative">
            <img src="/search.svg" alt="Search" class="cursor-pointer absolute left-4 top-4" />
            <input
              @input="onChangeInput"
              type="text"
              placeholder="Search..."
              class="border border-slate-300 rounded-md pl-10 pt-4 outline-none input"
            />
          </div>
        </div>
      </div>
      <CardsList :notes="filteredAndSortedNotes" />
    </main>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import HeaderComponent from '../components/HeaderComponent.vue'
import CardsList from '../components/CardsList.vue'

export default {
  components: {
    HeaderComponent,
    CardsList
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
  computed: {
    ...mapState(['notes']),
    filteredAndSortedNotes() {
      let result = this.notes

      if (this.searchQuery) {
        result = result.filter(
          (note) =>
            note.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            note.content.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }

      result = result.slice().sort((a, b) => {
        if (this.sortCriterion === 'title') {
          return a.title.localeCompare(b.title)
        } else if (this.sortCriterion === 'creationDate') {
          return new Date(a.creationDate) - new Date(b.creationDate)
        }
      })

      return result
    }
  },
  methods: {
    ...mapActions(['deleteNote', 'clearAllNotes']),
    clearNotes() {
      this.clearAllNotes()
    },
    onChangeInput(event) {
      this.searchQuery = event.target.value
    },
    onChangeSelect(event) {
      this.sortCriterion = event.target.value
    }
  }
}
</script>
<style scoped></style>
