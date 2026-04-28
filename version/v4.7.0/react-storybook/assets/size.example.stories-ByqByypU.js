import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{k as n,t as r}from"./src-DlEUsYnd.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Size`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{size:`medium`,onClick:a(),children:`(Default) Medium`},render:e=>(0,i.jsx)(n,{...e})},c={args:{size:`small`,onClick:a(),children:`Small`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "onClick": fn(),
    "children": "(Default) Medium"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn(),
    "children": "Small"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`Medium`,`Small`]}))();export{s as Medium,c as Small,l as __namedExportsOrder,o as default};