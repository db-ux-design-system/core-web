import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{D as n,t as r}from"./src-FlJ3DuBk.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBInfotext/Show Icon`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{showIcon:!0,children:`(Default) True`},render:e=>(0,i.jsx)(n,{...e})},c={args:{showIcon:!1,children:`False`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": false,
    "children": "False"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`DefaultTrue`,`False`]}))();export{s as DefaultTrue,c as False,l as __namedExportsOrder,o as default};