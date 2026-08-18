import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./heading-h2-CHk0oW6m.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),r(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBHeadingH2/Logical alignment`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{alignment:`start`,children:`(Default) Start`},render:e=>(0,o.jsx)(a,{...e})},u={args:{alignment:`center`,children:`Center`},render:e=>(0,o.jsx)(a,{...e})},d={args:{alignment:`end`,children:`End`},render:e=>(0,o.jsx)(a,{...e})},f={args:{alignment:`start`,semanticLevel:2,children:(0,o.jsx)(`span`,{children:`Custom: Start`})},render:e=>(0,o.jsx)(i,{...e})},p={args:{alignment:`center`,semanticLevel:2,children:(0,o.jsx)(`span`,{children:`Custom: Center`})},render:e=>(0,o.jsx)(i,{...e})},m={args:{alignment:`end`,semanticLevel:2,children:(0,o.jsx)(`span`,{children:`Custom: End`})},render:e=>(0,o.jsx)(i,{...e})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "children": "(Default) Start"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "children": "Center"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "children": "End"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "semanticLevel": 2,
    "children": <span>Custom: Start</span>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "semanticLevel": 2,
    "children": <span>Custom: Center</span>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "semanticLevel": 2,
    "children": <span>Custom: End</span>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...m.parameters?.docs?.source}}},h=[`DefaultStart`,`Center`,`End`,`CustomStart`,`CustomCenter`,`CustomEnd`]})))()}g();export{u as Center,p as CustomCenter,m as CustomEnd,f as CustomStart,l as DefaultStart,d as End,h as __namedExportsOrder,c as default};