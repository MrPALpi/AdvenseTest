<template>
  <div class="center-wrap">
    <div class="table-wrap">
      <table>
        <tr>
          <th>№</th>
          <th>Имя клиента</th>
          <th>
            <button class="th-btn" @click="sortForAddress">Адрес &#x25BC;</button>
          </th>
          <th>
            <button class="th-btn" @click="sortForDate">
              Дата заказа &#x25BC;
            </button>
          </th>
          <th>Статус</th>
          <th>Комментарий</th>
          <th class="no-border"></th>
        </tr>
        <transition-group name="table-row">
          <trEvent
            v-for="ev in sortEvents"
            :key="ev"
            :ev="ev"
            :role="getRole"
            @deleteEvent="deleteEvent"
            @updateEventBtn="updateEventBtn"
          ></trEvent>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import trEvent from "@/components/trEvent.vue";
export default {
  components: {
    trEvent,
  },
  methods: {
    ...mapMutations({
      setSelectedSort: "eventsStore/setSelectedSort",
    }),
    ...mapActions({
      allEvents: "eventsStore/allEvents",
      updateEvent: "eventsStore/updateEventAction",
      deleteEventAction: "eventsStore/deleteEventAction",
    }),
    updateEventBtn(id) {
      if (this.getRole === "ADMIN") {
        this.updateEvent(id);
      }
    },
    sortForDate() {
      this.setSelectedSort("date");
    },
    sortForAddress(){
      this.setSelectedSort("address");
    },
    deleteEvent(id) {
      if (this.getRole === "ADMIN") {
        let remove = confirm("Вы действительно хотите удалить  заказ?");
        if (remove) {
          this.deleteEventAction(id);
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      getEvents: "eventsStore/getEvents",
      getRole: "userStore/getRole",
      sortEvents: "eventsStore/sortEvents",
    }),
  },
  mounted() {
    this.allEvents();
  },
};
</script>

<style scoped>
.table-wrap {
  overflow-y: auto;
  height: 60%;
  max-width: 1400px;
  max-height: 800px;
  padding-left: 80px;
}
.th-btn {
  background: inherit;
  border: none;
}
table {
  border-collapse: collapse;
}

.table-row-move {
  transition: transform 0.5s ease-in-out;
}
</style>
