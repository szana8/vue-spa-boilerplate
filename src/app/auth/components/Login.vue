<template>
  <div>
    This is the login page.
  </div>
</template>

<script>
import { isEmpty } from "lodash";
import { mapActions } from "vuex";
import localforage from "localforage";

export default {
  data() {
    return {
      email: null,
      password: null,
      errors: []
    };
  },
  mounted() {
    //console.log(this.$http.get('http://dummy.restapiexample.com/api/v1/employees'));
  },
  methods: {
    ...mapActions({
      login: "auth/login"
    }),
    submit: function() {
      this.login({
        payload: {
          email: this.email,
          password: this.password
        },
        context: this
      })
        .then(() => {
          localforage.getItem("intended").then(name => {
            if (isEmpty(name)) {
              this.$router.replace({ name: "home" });
              return;
            }
            this.$router.replace({ name: name });
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    register: function() {
      this.$router.replace({ name: "register" });
    }
  }
};
</script>
