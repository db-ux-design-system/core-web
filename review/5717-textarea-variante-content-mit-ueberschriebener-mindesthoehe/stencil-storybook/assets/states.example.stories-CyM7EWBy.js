import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-xWuVYIXT.js";import{n as i,t as a}from"./apply-web-component-args-DjVuTJbw.js";var o=t({DefaultEnabled:()=>l,__namedExportsOrder:()=>f,active:()=>u,default:()=>c,disabled:()=>d}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabItem/States`,component:`db-tab-item`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`}}},l={args:{label:`(Default) Enabled`},render:({children:e,...t})=>n`<db-tab-list><db-tab-item ${i(t)}></db-tab-item></db-tab-list>`},u={args:{label:`active`,active:!0},render:({children:e,...t})=>n`<db-tab-list><db-tab-item ${i(t)}></db-tab-item></db-tab-list>`},d={args:{label:`disabled`,disabled:!0},render:({children:e,...t})=>n`<db-tab-list><db-tab-item ${i(t)}></db-tab-item></db-tab-list>`},f=[`DefaultEnabled`,`active`,`disabled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Enabled"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}></db-tab-item></db-tab-list>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "active",
    "active": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}></db-tab-item></db-tab-list>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "disabled",
    "disabled": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}></db-tab-item></db-tab-list>\`
}`,...d.parameters?.docs?.source}}}})))()}export{o as a,p as i,u as n,d as r,l as t};