import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./heading-h2-DeI_xX_p.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeadingH2/Paragraph spacing`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{children:`Omitted: no margin`},render:e=>(0,i.jsx)(r,{...e})},c={args:{paragraphSpacing:!0,children:`True: 1lh block-end`},render:e=>(0,i.jsx)(r,{...e})},l={args:{paragraphSpacing:!1,children:`False: no margin`},render:e=>(0,i.jsx)(r,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "Omitted: no margin"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "paragraphSpacing": true,
    "children": "True: 1lh block-end"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "paragraphSpacing": false,
    "children": "False: no margin"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`Omitted`,`True1lhblockend`,`False`]})))()}d();export{l as False,s as Omitted,c as True1lhblockend,u as __namedExportsOrder,o as default};