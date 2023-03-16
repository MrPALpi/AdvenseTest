<template>
    <div class="center-wrap">
        <div class="create-event">
            <h1>Добавить заказ</h1>
            <input v-model="newEvent.name" type="text" placeholder="Введите ваше имя">
            <input v-model="newEvent.address" type="text" placeholder="Введите ваш адрес">
            <input v-model="newEvent.comment" type="text" placeholder="Комментарий">
            <button class="btn" @click="addNewEvent">Добавить заказ</button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name:"create-event",
    data(){
        return{
            newEvent:{
                name:"",
                address:"",
                comment:"",
            }
        }
    },
    methods:{
        addNewEvent(){
          this.addEvent(this.newEvent);
          this.newEvent.address ='';
          this.comment='';
          alert('Добавлено');
        },

        ...mapActions({
            addEvent: "eventsStore/addEvent",
    }),
    },
    computed: {
    ...mapGetters({
        getName: "userStore/getName",
    }),
  },
    mounted(){
        this.newEvent.name = this.getName;
    }

}
</script>

<style scoped>
.create-event{
    display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px 10px 20px;
  max-height: 300px;
}
.create-event > *{
    margin-bottom: 30px;
    border: none; 
}
</style>