import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{Et as n,Q as r,Xt as i,t as a}from"./src-DoBU-6Jr.js";var o,s,c,l,u,d;e((()=>{a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawerHeader/Slots`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`},closeButtonText:{control:`text`},closeButtonId:{control:`text`},id:{control:`text`}}},l={args:{endSlot:(0,o.jsx)(i,{children:`New`}),children:`With end slot`},render:e=>(0,o.jsx)(`div`,{children:(0,o.jsx)(n,{...e})})},u={args:{startSlot:(0,o.jsx)(r,{icon:`account`}),children:`With start slot`},render:e=>(0,o.jsx)(`div`,{children:(0,o.jsx)(n,{...e})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "endSlot": <DBBadge>New</DBBadge>,
    "children": "With end slot"
  },
  render: (properties: any) => <div><DBDrawerHeader {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "startSlot": <DBIcon icon="account" />,
    "children": "With start slot"
  },
  render: (properties: any) => <div><DBDrawerHeader {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`Withendslot`,`Withstartslot`]}))();export{l as Withendslot,u as Withstartslot,d as __namedExportsOrder,c as default};