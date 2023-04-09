/* eslint-disable no-undef */
const app = {
  data() {
    return {
      title: "Title",
      item: "",
      items: [
        {
          id: 1,
          avatar: `https://avatars.dicebear.com/api/male/1.svg`,
          body: "body",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.items.push({
        id: this.items.length + 1,
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        body: this.item,
        date: new Date(Date.now().toLocaleString()),
      });
      this.item = "";
    },
  },
};

Vue.createApp(app).mount("#app");
