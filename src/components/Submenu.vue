<template>
  <div>
    <router-link
      :to="data.route"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <img
        :src="getImgUrl(data.icon)"
        class="flex-shrink-0 h-6 w-6 text-indigo-600"
        aria-hidden="true"
      />

      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">
          {{ data.text }}
        </p>
        <p class="mt-1 text-sm text-gray-500">
          {{ data.description }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Submenu",
  props: {
    data: Object
  },
  computed: {
    //
  },
  methods: {
    getImgUrl(icon) {
      var images = require.context("../assets/icons/", false, /\.svg$/);
      return images("./" + icon + ".svg");
    }
  }
};
</script>
