<template>
  <div class="center-wrap">
  <div class="auth">
    <input v-model="log" type="text" placeholder="username" />
    <input v-model="pass" type="password" placeholder="password" />
    <button :disabled="pass.length < 8" @click="enter">Вход</button>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data(){
        return{
            log:'',
            pass:'',
        }
    },
    methods:{
        async enter(){
          if(this.pass.length>8){
          await this.entrance({user:this.log,pass:this.pass}).then(() =>{
            if(this.getName){
              this.$router.push('/events');
            }
            else{
              alert("Неверный логин или пароль")
            }
          }
          )
           
          }else{
            alert("Пароль должен быть > 8 символов")
          }
          this.log='';
          this.pass='';
        },
        ...mapActions({
      entrance: "userStore/entrance",
      
    }),
    },
    computed: {
    ...mapGetters({
        getName: "userStore/getName",
    }),
  },
  mounted(){
    this.log = this.getName || '';
  }
};
</script>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #D9D9D9;
  padding: 60px 120px 20px 120px;
  max-height: 250px;
  max-width: 350px;
}
.auth > *{
    margin-bottom: 30px;
    background: #FFFFFF;
    border: none; 
}

button{
    padding: 7px 34px;
    cursor: pointer;
}


</style>


