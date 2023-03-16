<template>
  <div class="navBar">
    <div class="nav-btns">
      <button class="nav-btn" @click="$router.push('/events')">Все заказы</button>
      <button class="nav-btn" @click="$router.push('/newevent')">
        Добавить заказ
      </button>
    </div>
    <div class="nav-right">
        <div class="nav-userName">
            {{this.getName}}
        </div>
        <div >
            <button @click="exit" class="nav-exit">Выйти</button>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
  name: "nav-bar",
  methods:{
    ...mapMutations({
      setStateAll: "userStore/setStateAll",
    }),
    exit(){
      this.setStateAll({role:'',name:'',user:''});
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters({
        getName: "userStore/getName",
    }),
  },
};
</script>

<style scoped>
.nav-btns {
  background: none;
}
.nav-btn {
  color: #ffffff;
  background: none;
  border: none;
  margin-right: 40px;
}

.nav-right{
    display: flex;
    align-items: center;
    background: inherit;
}
.nav-userName{
    margin-right: 40px;
    background: inherit;
}
.nav-exit{
    background: #D9D9D9;
    border: none;
    padding: 6px 20px;
}
.navBar {
  z-index: 10;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  background-color: #165996;
  padding: 0 20px 0 20px;
}
</style>
