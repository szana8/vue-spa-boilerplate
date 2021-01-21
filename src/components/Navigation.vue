<template>
  <div class="w-full border-b shadow py-4 flex">
    <div class="flex-1">
      <img
        class="h-8 w-auto mx-4"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt=""
      />
    </div>
    <div class="flex-none">
      <div class="flex mt-2">
        <div class="relative" v-for="link in links" :key="link.name">
          <a
            href="#"
            v-click-outside="hide"
            @click="setActiveLink(link.name)"
            class="font-semibold px-4 antialiased text-gray-600 hover:text-gray-400"
          >
            {{ link.text }}
          </a>
          <div
            class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
            v-if="link.submenu && link.name == activeLink"
          >
            <div
              class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
              <submenu
                v-for="submenu in link.submenu"
                :key="submenu.name"
                :data="submenu"
                class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
              ></submenu>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex justify-end">
        <button class="mx-4 rounded px-4 py-2">Sign In</button>
        <button class="mx-4 rounded px-4 py-2">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Submenu from "@/components/Submenu";
import ClickOutside from "vue-click-outside";

export default {
  name: "Navigation",
  props: {
    //
  },
  components: {
    Submenu
  },
  directives: {
    ClickOutside
  },
  data() {
    return {
      activeLink: null,
      links: [
        {
          name: "products",
          route: "/",
          text: "Products",
          submenu: [
            {
              name: "analitics",
              route: "/",
              text: "Analitics",
              description:
                "Get a better understanding of where your traffic is coming from.",
              icon: "analitics"
            },
            {
              name: "integrations",
              route: "/",
              text: "Integrations",
              description:
                "Connect with third-party tools that you're already using.",
              icon: "integrations"
            },
            {
              name: "security",
              route: "/",
              text: "Security",
              description: "Your customer's data will be safe and secure.",
              icon: "security"
            }
          ]
        },
        {
          name: "use_cases",
          route: "/",
          text: "Use Cases"
        },
        {
          name: "developers",
          route: "/",
          text: "Developers",
          submenu: [
            {
              name: "documentations",
              route: "/",
              text: "Documentations",
              description:
                "Start inegrating " +
                process.env.VUE_APP_TITLE +
                " products and tools.",
              icon: "security"
            }
          ]
        },
        {
          name: "company",
          route: "/",
          text: "Company"
        },
        {
          name: "pricing",
          route: "/",
          text: "Pricing"
        }
      ]
    };
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link;
    },
    hide() {
      this.activeLink = "";
    }
  }
};
</script>
