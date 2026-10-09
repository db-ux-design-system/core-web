import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBInfotext/Semantic`,component:`db-infotext`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`(Default) Adaptive`)}</db-infotext>`},l={args:{semantic:`neutral`},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`Neutral`)}</db-infotext>`},u={args:{semantic:`critical`},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`Critical`)}</db-infotext>`},d={args:{semantic:`informational`},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`Informational`)}</db-infotext>`},f={args:{semantic:`successful`},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`Successful`)}</db-infotext>`},p={args:{semantic:`warning`},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`Warning`)}</db-infotext>`},m=[`DefaultAdaptive`,`Neutral`,`Critical`,`Informational`,`Successful`,`Warning`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Adaptive\`)}</db-infotext>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Neutral\`)}</db-infotext>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Critical\`)}</db-infotext>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Informational\`)}</db-infotext>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Successful\`)}</db-infotext>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Warning\`)}</db-infotext>\`
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as Critical,c as DefaultAdaptive,d as Informational,l as Neutral,f as Successful,p as Warning,m as __namedExportsOrder,s as default};