import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{k as n,t as r}from"./src-CXJdFFf7.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Multi Line Text`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{width:`full`,onClick:a(),children:`Multi-line Text With Automatic Line Breaks`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(n,{...e})})},c={args:{width:`full`,icon:`x_placeholder`,onClick:a(),children:`Multi-line Text With Automatic Line Breaks and Icon`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(n,{...e})})},l={args:{size:`small`,onClick:a(),children:`Button Small Multi-line Text With Automatic Line Breaks`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "children": "Multi-line Text With Automatic Line Breaks"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBButton {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "onClick": fn(),
    "children": "Multi-line Text With Automatic Line Breaks and Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBButton {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn(),
    "children": "Button Small Multi-line Text With Automatic Line Breaks"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBButton {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u=[`AutomaticLineBreaks`,`AutomaticLineBreaksandIcon`,`SmallAutomaticLineBreaks`]}))();export{s as AutomaticLineBreaks,c as AutomaticLineBreaksandIcon,l as SmallAutomaticLineBreaks,u as __namedExportsOrder,o as default};