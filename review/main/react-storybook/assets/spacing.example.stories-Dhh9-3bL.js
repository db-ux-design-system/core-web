import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{O as n,t as r}from"./src-Dg0IbgPT.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Spacing`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{spacing:`small`,children:(0,i.jsx)(`strong`,{children:`(Default) Small`})},render:e=>(0,i.jsx)(n,{...e})},c={args:{spacing:`medium`,children:(0,i.jsx)(`strong`,{children:`Medium`})},render:e=>(0,i.jsx)(n,{...e})},l={args:{spacing:`large`,children:(0,i.jsx)(`strong`,{children:`Large`})},render:e=>(0,i.jsx)(n,{...e})},u={args:{spacing:`none`,children:(0,i.jsx)(`strong`,{children:`None`})},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "children": <strong>(Default) Small</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "medium",
    "children": <strong>Medium</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "children": <strong>Large</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "children": <strong>None</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...u.parameters?.docs?.source}}},d=[`DefaultSmall`,`Medium`,`Large`,`None`]}))();export{s as DefaultSmall,l as Large,c as Medium,u as None,d as __namedExportsOrder,o as default};