<template>
  <div>
    This is the register form.
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      valid: false,
      name: null,
      email: null,
      password: null,
      checkbox: false,
      errors: []
    };
  },
  computed: mapGetters({
    user: "auth/user"
  }),
  methods: {
    ...mapActions({
      register: "auth/register"
    }),
    submit: function() {
      this.register({
        payload: {
          name: this.name,
          email: this.email,
          password: this.password
        },
        context: this
      })
        .then(() => {
          this.$router.replace({ name: "home" });
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancel: function() {
      this.$router.replace({ name: "login" });
    }
  }
};
</script>
