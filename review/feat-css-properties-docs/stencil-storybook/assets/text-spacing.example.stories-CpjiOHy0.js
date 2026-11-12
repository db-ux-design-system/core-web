import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CG73KG2K.js";import{i,n as a,t as o}from"./apply-web-component-args-e6TUK5Dk.js";var s=t({DefaultUnsetinherited:()=>f,Falsewithoutspacing:()=>u,Truewithspacing:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTextGroup/Text spacing`,component:`db-text-group`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},u={args:{textSpacing:!1},render:({children:e,...t})=>n`<db-text-group ${a(t)}>${i(`<db-paragraph>False: the paragraphs sit directly on top of each other.</db-paragraph><db-paragraph>Nothing has to be set on the paragraphs themselves.</db-paragraph>`)}</db-text-group>`},d={args:{textSpacing:!0},render:({children:e,...t})=>n`<db-text-group ${a(t)}>${i(`<db-paragraph>True: every child gets half a line height above and below.</db-paragraph><db-paragraph>Two adjacent children are a full line height apart, and the group keeps half of one at its outer edges.</db-paragraph>`)}</db-text-group>`},f={args:{},render:({children:e,...t})=>n`<div data-text-spacing="true"><db-text-group ${a(t)}>${i(`<db-paragraph>Unset: this group sets nothing, so it follows the surrounding element that opted in.</db-paragraph><db-paragraph>Use false to switch the spacing off for certain.</db-paragraph>`)}</db-text-group></div>`},p=[`Falsewithoutspacing`,`Truewithspacing`,`DefaultUnsetinherited`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>False: the paragraphs sit directly on top of each other.</db-paragraph><db-paragraph>Nothing has to be set on the paragraphs themselves.</db-paragraph>\`)}</db-text-group>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>True: every child gets half a line height above and below.</db-paragraph><db-paragraph>Two adjacent children are a full line height apart, and the group keeps half of one at its outer edges.</db-paragraph>\`)}</db-text-group>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div data-text-spacing="true"><db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>Unset: this group sets nothing, so it follows the surrounding element that opted in.</db-paragraph><db-paragraph>Use false to switch the spacing off for certain.</db-paragraph>\`)}</db-text-group></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{s as a,m as i,u as n,d as r,f as t};