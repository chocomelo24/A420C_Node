<template>
   <div class="onecard">
    <div v-if="event">
      <div class="d-flex justify-content-center">
        <div class="card" style="width: 30rem">
          <img v-bind:src="event.Img" class="img-fluid" style="width: 30rem"  />
          <div class="card-body">
            <p class="card-text">{{ event.Title }}</p>
            <p class="card-text">{{ event.Date }}</p>
            <p class="card-text">{{ event.Type }}</p>
            <p class="card-text">{{ event.Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/Events/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.event = data));
  },
};
</script>
<style>
    .onecard{
      padding: 50px;
    }
    
</style>