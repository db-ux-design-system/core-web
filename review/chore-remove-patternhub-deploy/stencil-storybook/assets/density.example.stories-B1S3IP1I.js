import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{i,n as a,t as o}from"./apply-web-component-args-BtUnDguQ.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBIcon/Density`,component:`db-icon`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{icon:`x_placeholder`},render:({children:e,...t})=>n`<div data-density="functional"><db-infotext icon="none" size="small" semantic="informational">Functional</db-infotext><db-icon ${a(t)}>${i(`Functional`)}</db-icon></div>`},d={args:{icon:`x_placeholder`},render:({children:e,...t})=>n`<div data-density="regular"><db-infotext icon="none" size="small" semantic="informational">(Default) Regular</db-infotext><db-icon ${a(t)}>${i(`(Default) Regular`)}</db-icon></div>`},f={args:{icon:`x_placeholder`},render:({children:e,...t})=>n`<div data-density="expressive"><db-infotext icon="none" size="small" semantic="informational">Expressive</db-infotext><db-icon ${a(t)}>${i(`Expressive`)}</db-icon></div>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="functional"><db-infotext icon="none" size="small" semantic="informational">Functional</db-infotext><db-icon \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-icon></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="regular"><db-infotext icon="none" size="small" semantic="informational">(Default) Regular</db-infotext><db-icon \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-icon></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="expressive"><db-infotext icon="none" size="small" semantic="informational">Expressive</db-infotext><db-icon \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-icon></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};