import VwSteps from "../src/steps";
import { mount } from "@vue/test-utils";

describe("vw-steps", () => {
  test("vw-steps-demo", () => {
    const wrapper = mount(VwSteps);
    expect(wrapper.html()).toContain('class="vw-steps-line"');
  });

  test("vw-steps-snapshot", () => {
    const wrapper = mount(VwSteps);
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
