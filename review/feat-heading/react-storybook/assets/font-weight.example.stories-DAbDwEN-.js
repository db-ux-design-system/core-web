import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./heading-h2-CHk0oW6m.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),r(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBHeadingH2/Font weight`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{fontWeight:`black`,children:`(Default) Black`},render:e=>(0,o.jsx)(a,{...e})},u={args:{fontWeight:`light`,children:`Light`},render:e=>(0,o.jsx)(a,{...e})},d={args:{fontWeight:`black`,semanticLevel:2,children:(0,o.jsx)(`span`,{children:`Custom: (Default) Black`})},render:e=>(0,o.jsx)(i,{...e})},f={args:{fontWeight:`light`,semanticLevel:2,children:(0,o.jsx)(`span`,{children:`Custom: Light`})},render:e=>(0,o.jsx)(i,{...e})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "black",
    "children": "(Default) Black"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "light",
    "children": "Light"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "black",
    "semanticLevel": 2,
    "children": <span>Custom: (Default) Black</span>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "light",
    "semanticLevel": 2,
    "children": <span>Custom: Light</span>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...f.parameters?.docs?.source}}},p=[`NativeDefaultBlack`,`NativeLight`,`CustomDefaultBlack`,`CustomLight`]})))()}m();export{d as CustomDefaultBlack,f as CustomLight,l as NativeDefaultBlack,u as NativeLight,p as __namedExportsOrder,c as default};