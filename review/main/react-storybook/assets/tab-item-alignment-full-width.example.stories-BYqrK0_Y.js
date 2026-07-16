import{i as e}from"./preload-helper-BsSOtF0W.js";import{t}from"./jsx-runtime-C5VDaNxI.js";import{S as n,t as r,w as i}from"./src-CloloTYY.js";var a,o,s,c,l,u;e((()=>{r(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabItem/Tab-Item Alignment Full Width`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{label:`Left`},render:e=>(0,a.jsx)(n,{style:{blockSize:`100%`},children:(0,a.jsx)(i,{...e})})},l={args:{label:`Centered`},render:e=>(0,a.jsx)(n,{style:{blockSize:`100%`},children:(0,a.jsx)(i,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Left"
  },
  render: (properties: any) => <DBTabList style={{
    blockSize: '100%'
  }}><DBTabItem {...properties} /></DBTabList>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Centered"
  },
  render: (properties: any) => <DBTabList style={{
    blockSize: '100%'
  }}><DBTabItem {...properties} /></DBTabList>
}`,...l.parameters?.docs?.source}}},u=[`Start`,`Centered`]}))();export{l as Centered,c as Start,u as __namedExportsOrder,s as default};