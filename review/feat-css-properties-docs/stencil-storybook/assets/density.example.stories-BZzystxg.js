import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-Bx5_R3ll.js";import{n as i,t as a}from"./apply-web-component-args-K6-38IKB.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabItem/Density`,component:`db-tab-item`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`}}},l={args:{label:`Functional`},render:({children:e,...t})=>n`<db-tab-list data-density="functional"><db-tab-item ${i(t)}></db-tab-item></db-tab-list>`},u={args:{label:`(Default) Regular`},render:({children:e,...t})=>n`<db-tab-list><db-tab-item ${i(t)}></db-tab-item></db-tab-list>`},d={args:{label:`Expressive`},render:({children:e,...t})=>n`<db-tab-list data-density="expressive"><db-tab-item ${i(t)}></db-tab-item></db-tab-list>`},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list data-density="functional"><db-tab-item \${spreadArgs(args)}></db-tab-item></db-tab-list>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}></db-tab-item></db-tab-list>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list data-density="expressive"><db-tab-item \${spreadArgs(args)}></db-tab-item></db-tab-list>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};