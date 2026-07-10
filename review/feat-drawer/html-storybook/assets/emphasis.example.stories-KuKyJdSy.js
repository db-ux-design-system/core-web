import{i as e}from"./preload-helper-Dvc_-dbk.js";import{t}from"./iframe-BXbuCZV6.js";import{t as n,wt as r}from"./src-D7ZxMJcg.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBadge/Emphasis`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{children:`(Default) Weak`},render:e=>(0,i.jsx)(r,{...e})},c={args:{emphasis:`strong`,children:`Strong`},render:e=>(0,i.jsx)(r,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Weak"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "children": "Strong"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`DefaultWeak`,`Strong`]}))();export{s as DefaultWeak,c as Strong,l as __namedExportsOrder,o as default};