import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-6dzo3qU4.js";import{n as i,t as a}from"./apply-web-component-args-WLmUBxRd.js";var o=t({DefaultDefault:()=>l,Filled:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBIcon/Variant`,component:`db-icon`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{icon:`exclamation_mark_triangle`,weight:`32`},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Default</db-infotext><db-icon ${i(t)}></db-icon></div>`},u={args:{icon:`exclamation_mark_triangle`,variant:`filled`,weight:`32`},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">Filled</db-infotext><db-icon ${i(t)}></db-icon></div>`},d=[`DefaultDefault`,`Filled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "exclamation_mark_triangle",
    "weight": "32"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Default</db-infotext><db-icon \${spreadArgs(args)}></db-icon></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "exclamation_mark_triangle",
    "variant": "filled",
    "weight": "32"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Filled</db-infotext><db-icon \${spreadArgs(args)}></db-icon></div>\`
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,u as n,f as r,l as t};