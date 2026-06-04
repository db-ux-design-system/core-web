import{i as e}from"./preload-helper-CD2viebt.js";import{t}from"./jsx-runtime-BVcvVmAf.js";import{t as n,ut as r}from"./src-D8vMMfSW.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBAccordionItem/Disabled`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{headlinePlain:{control:`text`},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},text:{control:`text`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{headlinePlain:`(Default) False`,disabled:!1,children:`(Default) False`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(r,{...e})})},c={args:{headlinePlain:`True`,disabled:!0,children:`True`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(r,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "(Default) False",
    "disabled": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <div><DBAccordionItem {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "True",
    "disabled": true,
    "children": "True"
  },
  render: (properties: any) => <div><DBAccordionItem {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l=[`DefaultFalse`,`True`]}))();export{s as DefaultFalse,c as True,l as __namedExportsOrder,o as default};