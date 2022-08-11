import { createStore } from "vuex";
import router from "@/router";

export default createStore({
  state: {
    users: null,
    Events: null,
    Event: null,
  },
  getters: {},
  mutations: {
    setusers: (state, users) => {
      state.users = users;
    },
    setEvents: (state, Events) => {
      state.Events = Events;
    },
    setEvent: (state, Event) => {
      state.Event = Event;
    },
  },
  actions: {
    logout: async (context) => {
      context.commit("setusers", null);
      window.location = "/login";
    },
    login: async (context, data) => {
      const { email, password } = data;
      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const usersData = await response.json();
      console.log(usersData);
      context.commit("setusers", usersData[0]);
      router.push("/Events");
    },
    register: async (context, data) => {
      const { FullName, email, password } = data;
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          FullName: FullName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
    },
    getEvents: async (context) => {
      fetch("http://localhost:3000/Events")
        .then((res) => res.json())
        .then((Events) => context.commit("setEvents", Events));
    },
    getEvent: async (context, id) => {
      fetch("http://localhost:3000/Events/" + id)
        .then((res) => res.json())
        .then((Event) => context.commit("setEvent", Event));
    },
    deleteEvent: async (context, id) => {
      fetch("http://localhost:3000/Events/" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getEvents"));
    },
    createEvent: async (context, Event) => {
      fetch("http://localhost:3000/Events/", {
        method: "POST",
        body: JSON.stringify(Event),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getEvents"));
    },
    updateEvent: async (context, Event) => {
      fetch("http://localhost:3000/Events/" + Event.id, {
        method: "PUT",
        body: JSON.stringify(Event),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getEvents"));
    },
  },
  modules: {},
});
