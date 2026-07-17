import{i as e}from"./preload-helper-CS4hpNwm.js";import{t}from"./iframe-YqbMSRtl.js";import{t as n,vt as r}from"./src-BQrJLMGI.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Spacing`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{spacing:`small`,children:(0,i.jsx)(`strong`,{children:`(Default) Small`})},render:e=>(0,i.jsx)(r,{...e})},c={args:{spacing:`medium`,children:(0,i.jsx)(`strong`,{children:`Medium`})},render:e=>(0,i.jsx)(r,{...e})},l={args:{spacing:`large`,children:(0,i.jsx)(`strong`,{children:`Large`})},render:e=>(0,i.jsx)(r,{...e})},u={args:{spacing:`none`,children:(0,i.jsx)(`strong`,{children:`None`})},render:e=>(0,i.jsx)(r,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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