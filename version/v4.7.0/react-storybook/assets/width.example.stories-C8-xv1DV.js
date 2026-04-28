import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{k as n,t as r}from"./src-DlEUsYnd.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Width`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{width:`auto`,onClick:a(),children:`(Default) Auto`},render:e=>(0,i.jsx)(n,{...e})},c={args:{width:`full`,onClick:a(),children:`Width`},render:e=>(0,i.jsx)(`div`,{style:{width:`500px`},children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "onClick": fn(),
    "children": "(Default) Auto"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "children": "Width"
  },
  render: (properties: any) => <div style={{
    width: '500px'
  }}><DBButton {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l=[`Auto`,`Full`]}))();export{s as Auto,c as Full,l as __namedExportsOrder,o as default};