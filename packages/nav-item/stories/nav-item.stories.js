import VwNavItem from '../src/nav-item.vue'

export default {
title: 'VwNavItem',
component: VwNavItem
}

const Template = (args, { argTypes }) => ({
components: { VwNavItem },
props: Object.keys(argTypes),
template:
'<vw-nav-item></vw-nav-item>',
});

/* 复制模版函数 */
export const NavItem = Template.bind({});

/* props 属性 */
NavItem.args = {
  img: 'http://f1.baiee.cn/ssds/tab_icons/sn2020xuanzkec.png',
  url: 'https://h5.baiyibao.cn',
  size: '75px',
  borderRadius: '0%'
};