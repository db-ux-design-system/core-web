import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./heading-h2-CHk0oW6m.js";import{n as o,t as s}from"./heading-h6-B6GuUUK5.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),r(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBHeadingH2/Semantic and visual decoupling`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},d={args:{size:`2xl`,children:`Semantic h6, visual 2xl`},render:e=>(0,c.jsx)(s,{...e})},f={args:{size:`3xs`,children:`Semantic h2, visual 3xs`},render:e=>(0,c.jsx)(a,{...e})},p={args:{size:`3xl`,semanticLevel:3,children:(0,c.jsx)(`span`,{children:`Custom semantic level 3, visual 3xl`})},render:e=>(0,c.jsx)(i,{...e})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "2xl",
    "children": "Semantic h6, visual 2xl"
  },
  render: (properties: any) => <DBHeadingH6 {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "3xs",
    "children": "Semantic h2, visual 3xs"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "3xl",
    "semanticLevel": 3,
    "children": <span>Custom semantic level 3, visual 3xl</span>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...p.parameters?.docs?.source}}},m=[`h6renderedat2xl`,`h2renderedat3xs`,`Customlevel3renderedat3xl`]})))()}h();export{p as Customlevel3renderedat3xl,m as __namedExportsOrder,u as default,f as h2renderedat3xs,d as h6renderedat2xl};