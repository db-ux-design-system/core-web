import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBInfotext/Density`,component:`db-infotext`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"data-density":`functional`},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`Functional`)}</db-infotext>`},l={args:{"data-density":`regular`},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`(Default) Regular`)}</db-infotext>`},u={args:{"data-density":`expressive`},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`Expressive`)}</db-infotext>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-infotext>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-infotext>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-infotext>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};