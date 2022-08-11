<template>
    <div class="col-md-3">
    <router-link class="router-text" :to="{ name: 'oneCard', params: { id: event.id } }">
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="event.Img" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-event">{{ event.Title }}</p>
          <p class="card-text-event">{{ event.Date }}</p>
          <p class="card-text-event">{{ event.Type }}</p>
          <p class="card-text-event">{{ event.Description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
    export default {
        props: ["event"],
    };
    

</script>
<style>
.img-fluid {
  width: 18rem;
  height: 15rem;
  border-radius: 5px;
  transition: 0.2 linear;
}
.img-fluid:hover {
  transform: scale(1.1);
}
.router-text{
  text-decoration: none;
  color: black;
}

</style>