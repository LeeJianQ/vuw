import VwSteps from "../src/steps.vue";

export default {
  title: "VwSteps",
  component: VwSteps,
};

const Template = (args, { argTypes }) => ({
  components: { VwSteps },
  props: Object.keys(argTypes),
  template:
    '<vw-steps :steps="steps" :schedule-line-color="scheduleLineColor"></vw-steps>',
});

export const Demo = Template.bind({});
Demo.args = {
  steps: [
    { value: "+5", highlight: false, status: "finish" },
    { value: "+10", highlight: true, status: "active" },
    { value: "+10", highlight: false, status: "" },
    { value: "+15", highlight: true, status: "" },
  ],
  scheduleLineColor: "green",
};
