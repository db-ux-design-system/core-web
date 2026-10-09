import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBIcon/Variant`,component:`db-icon`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{icon:`exclamation_mark_triangle`,weight:`32`},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Default</db-infotext><db-icon ${r(n)}></db-icon></div>`},c={args:{icon:`exclamation_mark_triangle`,variant:`filled`,weight:`32`},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">Filled</db-infotext><db-icon ${r(n)}></db-icon></div>`},l=[`DefaultDefault`,`Filled`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "exclamation_mark_triangle",
    "weight": "32"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Default</db-infotext><db-icon \${spreadArgs(args)}></db-icon></div>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "exclamation_mark_triangle",
    "variant": "filled",
    "weight": "32"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Filled</db-infotext><db-icon \${spreadArgs(args)}></db-icon></div>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultDefault,c as Filled,l as __namedExportsOrder,o as default};