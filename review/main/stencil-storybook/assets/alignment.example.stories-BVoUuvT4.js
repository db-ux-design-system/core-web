import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DdTBnHTV.js";import{i,n as a,t as o}from"./apply-web-component-args-v7OxqSTB.js";var s=t({Center:()=>d,DefaultStart:()=>u,End:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTextGroup/Logical alignment`,component:`db-text-group`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},u={args:{alignment:`start`,textSpacing:!0},render:({children:e,...t})=>n`<db-text-group ${a(t)}>${i(`<db-paragraph>(Default) Start</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>`)}</db-text-group>`},d={args:{alignment:`center`,textSpacing:!0},render:({children:e,...t})=>n`<db-text-group ${a(t)}>${i(`<db-paragraph>Center</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>`)}</db-text-group>`},f={args:{alignment:`end`,textSpacing:!0},render:({children:e,...t})=>n`<db-text-group ${a(t)}>${i(`<db-paragraph>End</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>`)}</db-text-group>`},p=[`DefaultStart`,`Center`,`End`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>(Default) Start</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>\`)}</db-text-group>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>Center</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>\`)}</db-text-group>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>End</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>\`)}</db-text-group>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,u as n,f as r,d as t};