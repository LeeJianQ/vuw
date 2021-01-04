import VwSteps from "./src/steps.vue";

VwSteps.install = (Vue) => {
  Vue.component(VwSteps.name, VwSteps);
};

export default VwSteps;
