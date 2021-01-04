import VwToast from "../src/toast.vue";

export default {
  title: "VwToast",
  component: VwToast,
};

const Template = (args, { argTypes }) => ({
  components: { VwToast },
  props: Object.keys(argTypes),
  template:
    '<vw-toast :is-show="isShow" style="width: 300px; height: 200px; padding: 20px">123</vw-toast>',
});

/* 复制模版函数 */
export const Toast = Template.bind({});

/* props 属性 */
Toast.args = {
  isShow: false,
};
