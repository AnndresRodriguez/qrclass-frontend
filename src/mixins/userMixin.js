let userMixin = {
  data() {
    return {
      fullName: "",
      name: "",
      lastName: "",
      email: "",
      photo: ""
    };
  },

  mounted() {
    setTimeout(() => {
      this.initializeData();
    }, 3000);
  },

  methods: {
    initializeData() {
      console.log(this.$store.getters.getInfoUser);
      this.fullName = this.$store.getters.getInfoUser.fullName;
      this.name = this.$store.getters.getInfoUser.name;
      this.lastName = this.$store.getters.getInfoUser.lastName;
      this.email = this.$store.getters.getInfoUser.email;
      this.photo = this.$store.getters.getInfoUser.photo;
    }
  }
};

export default userMixin;
