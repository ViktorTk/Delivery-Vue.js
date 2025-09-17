<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo logo">
          <img src="../assets/images/h_logo.png" alt="logo" />
        </router-link>
        <div class="header-controls">
          <button class="btn btn-primary">
            <img src="../assets/images/icons/h_login.png" alt="login" />
            Войти
          </button>
          <button class="btn btn-outline" @click="openModal()">
            <img src="../assets/images/icons/h_basket.png" alt="basket" />
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['toggleModal'])
const openModal = () => emit('toggleModal')
</script>

<style scoped>
/* === header === */

.header {
  display: flex;
  align-items: center;
  min-height: 124px;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-controls {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

/* === === */
</style>
