import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{m as n,t as r}from"./src-Dg0IbgPT.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigationItem/Disabled`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{disabled:!1,children:(0,i.jsx)(`a`,{href:`#`,children:`(Default) False`})},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(n,{...e})})},c={args:{disabled:!0,children:(0,i.jsx)(`a`,{href:`#`,children:`True`})},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": false,
    "children": <a href="#">(Default) False</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": true,
    "children": <a href="#">True</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...c.parameters?.docs?.source}}},l=[`DefaultFalse`,`True`]}))();export{s as DefaultFalse,c as True,l as __namedExportsOrder,o as default};