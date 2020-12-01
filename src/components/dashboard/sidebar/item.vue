<template>
  <li class="nav-item active">
    <a
      data-toggle="collapse"
      :href="`#${href}`"
      class="collapsed"
      aria-expanded="false"
    >
      <p>{{ title }}</p>
      <span class="caret"></span>
    </a>
    <div class="collapse" :id="href">
      <ul class="nav nav-collapse">
        <li v-for="(item, index) in items" :key="index">
          <router-link :to="{ name: `${item.name}` }">
            <span class="sub-item">{{ item.text }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
};
</script>
