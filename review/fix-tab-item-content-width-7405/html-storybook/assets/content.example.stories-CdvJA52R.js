import{n as e}from"./iframe-DZjT5Htc.js";import{n as t,t as n}from"./badge-C6GUn8Rn.js";import{n as r,t as i}from"./icon-D021MJCL.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f;function p(){return(p=a((()=>{r(),t(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBadge/Content`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{children:`(Default) Text`},render:e=>(0,o.jsx)(n,{...e})},u={args:{},render:e=>(0,o.jsx)(n,{...e})},d={args:{semantic:`critical`,emphasis:`strong`,children:(0,o.jsx)(i,{icon:`x_placeholder`,children:`Icon - Small`})},render:e=>(0,o.jsx)(n,{...e})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Text"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: (properties: any) => <DBBadge {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong",
    "children": <DBIcon icon="x_placeholder">Icon - Small</DBIcon>
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...d.parameters?.docs?.source}}},f=[`DefaultText`,`DotSmall`,`IconSmall`]})))()}p();export{l as DefaultText,u as DotSmall,d as IconSmall,f as __namedExportsOrder,c as default};