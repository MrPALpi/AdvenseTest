<template>
  <tr :style="[ev.status===`Выполнен` ? {'color': '#bfbfbf'} : {'color':'#000000'}]">
          <td>{{ ev.id }}</td>
          <td>{{ ev.name }}</td>
          <td>{{ ev.address }}</td>
          <td>{{ ev.date }}</td>
          <td>{{ ev.status }}</td>
          <td>{{ ev.comment }}</td>
          <td class="no-border" :style="[this.role===`ADMIN` ? {'visibility': 'visible'} : {'visibility':'hidden'}]">
            <button class="btn" @click="updateEventBtn">&#10004;</button>
            <button class="btn" @click="deleteEvent">&#x2716;</button>
          </td>
        </tr>
</template>

<script>
export default {
    props:{
        ev:{},
        role:'',
    },
    methods: {
    updateEventBtn(){
      if (this.ev.status!=='Выполнен'){
      this.$emit("updateEventBtn", this.ev.id);
    }
    },
    deleteEvent(){
        this.$emit("deleteEvent", this.ev.id);
    },
  },
}
</script>

<style>
.no-border {
  border: none;
  opacity: 0;
  transition: all ease 0.2s;
  padding: 9px 5px;
  display:flex;
}

tr:hover .no-border{
  opacity: 1;
}
</style>