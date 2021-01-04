import VwStepItem from "../src/step-item.vue";

export default {
  title: "VwStepItem",
  component: VwStepItem,
};

// const Template = (args, { argTypes }) => ({
//   components: { VwStepItem },
//   props: Object.keys(argTypes),
//   template: "<vw-step-item>+5</vw-step-item>",
// });

// /* 复制模版函数 */
// export const StepItem = Template.bind({});

// /* props 属性 */
// StepItem.args = {};

export const StepItem = () => ({
  components: { VwStepItem },
  template: "<vw-step-item>+5</vw-step-item>",
});

export const ActiveStepItem = () => ({
  components: { VwStepItem },
  template: '<vw-step-item class="active">+5</vw-step-item>',
});

export const FinishStepItem = () => ({
  components: { VwStepItem },
  template: '<vw-step-item class="finish">+5</vw-step-item>',
});
