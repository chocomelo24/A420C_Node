<template>
  <input class="SB" type="text" v-model="search" placeholder="Search by Public/Private Events" />
  <div class="row">
    <EventsCard
      v-for="event in filteredEvents"
      :key="event.id"
      :event="event"
    />
  </div>
</template>
<script>
import EventsCard from "../components/EventsCard.vue";
export default {
  components: { EventsCard },
  data() {
    return {
      search: "",
      Events: [],
    };
  },

  computed: {
    filteredEvents() {
      return this.$store.state.Events?.filter((event) => {
        return event.Type?.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.$store.dispatch("getEvents");
  },
};
</script>
<style scoped>
.row {
  margin-top: 10px;
}
.SB {
  margin-top: 53px;
  margin-left: 42vw;
  font-size: 21px;
  border: 0;
  outline:0;
  border-bottom: 2px solid black;
  width: 18%;
  font-size: 20px;
  background: transparent;
  color: black;
}
</style>
