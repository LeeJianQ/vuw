import VwSteps from "./src/steps";

VwSteps.install = (Vue) => {
  Vue.component(VwSteps.name, VwSteps);
};

export default VwSteps;
