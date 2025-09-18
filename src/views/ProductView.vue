<template>
  <section class="products">
    <div class="container">
      <div id="goods-container" class="products-wrapper">
        <div
          class="products-card"
          v-for="product in goodsArray"
          :key="product.id"
        >
          <div class="products-card__image">
            <img :src="getUrl(product.image)" alt="good-1" />
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">
                {{ product.title }}
              </h5>
            </div>
            <div class="products-card__description-row">
              <p class="products-card__description--text">
                {{ product.description }}
              </p>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img
                    src="../assets/images/icons/basket-white.svg"
                    alt="login"
                  />
                </button>
                <span class="products-card__description-controls--price"
                  >{{ product.price }} ₽</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { goodsArray } from '@/constans/goods'
const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url)
}
</script>
