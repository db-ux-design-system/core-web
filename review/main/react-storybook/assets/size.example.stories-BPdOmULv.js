import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{j as n,t as r}from"./src-FlJ3DuBk.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBadge/Size`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{children:`(Default) Small`},render:e=>(0,i.jsx)(n,{...e})},c={args:{size:`medium`,children:`Medium`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Small"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "children": "Medium"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`DefaultSmall`,`Medium`]}))();export{s as DefaultSmall,c as Medium,l as __namedExportsOrder,o as default};