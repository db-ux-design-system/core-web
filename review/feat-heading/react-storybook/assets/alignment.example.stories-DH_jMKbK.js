import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./heading-BoN0DQZL.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeading/Logical alignment`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{as:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]},size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},startSlot:{control:!1},endSlot:{control:!1},className:{control:`text`},id:{control:`text`}}},s={args:{as:`h2`,alignment:`start`,children:`(Default) Start`},render:e=>(0,i.jsx)(r,{...e})},c={args:{as:`h2`,alignment:`center`,children:`Center`},render:e=>(0,i.jsx)(r,{...e})},l={args:{as:`h2`,alignment:`end`,children:`End`},render:e=>(0,i.jsx)(r,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "as": "h2",
    "alignment": "start",
    "children": "(Default) Start"
  },
  render: (properties: any) => <DBHeading {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "as": "h2",
    "alignment": "center",
    "children": "Center"
  },
  render: (properties: any) => <DBHeading {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "as": "h2",
    "alignment": "end",
    "children": "End"
  },
  render: (properties: any) => <DBHeading {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`DefaultStart`,`Center`,`End`]})))()}d();export{c as Center,s as DefaultStart,l as End,u as __namedExportsOrder,o as default};