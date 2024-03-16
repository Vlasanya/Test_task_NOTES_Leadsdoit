<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String,
    isFavorite: Boolean,
    category: String,
    creationDate: String,
    editDate: String,
    onClickFavorite: Function
  },
  emits: ['editNote', 'deleteNote'],
  methods: {
    formatDate(dateString) {
      if (!dateString) return '—'
      const date = new Date(dateString)
      return date.toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })
    },
    emitDeleteEvent() {
      this.$emit('deleteNote', this.id)
    },
    toggleFavorite() {
      this.$store.dispatch('toggleFavorite', this.id)
    }
  }
}
</script>

<template>
  <div
    class="flex flex-col justify-between relative mt-10 bg-white border border-slate-200 rounded-3xl p-8 cursor-pointer card"
  >
    <img
      @click="toggleFavorite"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like"
      class="favorite-icon absolute right-4 top-3 cursor-pointer border border-slate-300 rounded-md"
    />

    <div class="content">
      <h3 class="title mt-2 text-2xl font-bold break-all">{{ title }}</h3>
      <div class="meta flex justify-between flex-col">
        <span class="mb-8 text-slate-400">Category: </span>
        <b>{{ category }}</b>
        <div class="mb-8">
          <span class="text-slate-400">Creation date:</span>
          <p>{{ formatDate(creationDate) }}</p>
          <b v-if="editDate">Edit date: {{ formatDate(editDate) }}</b>
        </div>
      </div>
      <div class="description">
        <span class="text-slate-400">Description:</span>
        <p class="mb-16 break-all">{{ content }}</p>
      </div>
    </div>
    <div class="card-actions">
      <router-link :to="`/edit/${id}`" class="button mr-4">Edit</router-link>
      <button @click="emitDeleteEvent" class="button">Delete</button>
    </div>
  </div>
</template>
<style scoped></style>
