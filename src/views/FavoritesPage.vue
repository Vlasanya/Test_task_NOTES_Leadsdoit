<template>
  <div class="w-4/5 mx-auto bg-red-50 rounded-xl shadow-xl mt-14">
    <HeaderComponent />

    <main class="p-10">
      <div v-if="favoriteNotes.length > 0">
        <h2 class="text-3xl font-bold">Your favorites notes</h2>
        <CardsList :notes="favoriteNotes" />
      </div>
      <div v-else class="text-center font-bold text-xl mt-10 mb-10">
        <p class="mb-10">Sorry, but you don't have a favorite note yet</p>
        <img src="/emoji-1.png" alt="Smile" class="smile" />
      </div>
    </main>
  </div>
</template>
<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import CardsList from '../components/CardsList.vue'

export default {
  components: {
    HeaderComponent,
    CardsList
  },
  computed: {
    favoriteNotes() {
      return this.$store.getters.allNotes.filter((note) => note.isFavorite)
    }
  }
}
</script>
<style scoped>
.smile {
  margin: 0 auto;
}
</style>
