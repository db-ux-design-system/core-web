import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./heading-h2-BQI7zgPp.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),r(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBHeadingH2/Paragraph spacing`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{children:`Omitted: no margin`},render:e=>(0,o.jsx)(a,{...e})},u={args:{paragraphSpacing:!0,children:`True: 1lh block-end`},render:e=>(0,o.jsx)(a,{...e})},d={args:{paragraphSpacing:!1,children:`False: no margin`},render:e=>(0,o.jsx)(a,{...e})},f={args:{semanticLevel:2,children:(0,o.jsx)(`span`,{children:`Custom omitted: no margin`})},render:e=>(0,o.jsx)(i,{...e})},p={args:{semanticLevel:2,paragraphSpacing:!0,children:(0,o.jsx)(`span`,{children:`Custom true: 1lh block-end`})},render:e=>(0,o.jsx)(i,{...e})},m={args:{semanticLevel:2,paragraphSpacing:!1,children:(0,o.jsx)(`span`,{children:`Custom false: no margin`})},render:e=>(0,o.jsx)(i,{...e})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "Omitted: no margin"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "paragraphSpacing": true,
    "children": "True: 1lh block-end"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "paragraphSpacing": false,
    "children": "False: no margin"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semanticLevel": 2,
    "children": <span>Custom omitted: no margin</span>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "semanticLevel": 2,
    "paragraphSpacing": true,
    "children": <span>Custom true: 1lh block-end</span>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "semanticLevel": 2,
    "paragraphSpacing": false,
    "children": <span>Custom false: no margin</span>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...m.parameters?.docs?.source}}},h=[`NativeOmitted`,`NativeTrue1lhblockend`,`NativeFalse`,`CustomOmitted`,`CustomTrue1lhblockend`,`CustomFalse`]})))()}g();export{m as CustomFalse,f as CustomOmitted,p as CustomTrue1lhblockend,d as NativeFalse,l as NativeOmitted,u as NativeTrue1lhblockend,h as __namedExportsOrder,c as default};