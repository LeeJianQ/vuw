import VwWxLink from '../src/wx-link.vue'

export default {
title: 'VwWxLink',
component: VwWxLink
}

const Template = (args, { argTypes }) => ({
components: { VwWxLink },
props: Object.keys(argTypes),
template:
'<vw-wx-link></vw-wx-link>',
});

/* 复制模版函数 */
export const WxLink = Template.bind({});

/* props 属性 */
WxLink.args = {};