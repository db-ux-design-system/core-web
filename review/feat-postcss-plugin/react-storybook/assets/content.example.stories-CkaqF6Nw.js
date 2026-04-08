import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{_ as n,j as r,t as i}from"./src-C7TXoUjo.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBadge/Content`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{children:`(Default) Text`},render:e=>(0,a.jsx)(r,{...e})},l={args:{},render:e=>(0,a.jsx)(r,{...e})},u={args:{semantic:`critical`,emphasis:`strong`,children:(0,a.jsx)(n,{icon:`x_placeholder`,children:`Icon - Small`})},render:e=>(0,a.jsx)(r,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Text"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: (properties: any) => <DBBadge {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong",
    "children": <DBIcon icon="x_placeholder">Icon - Small</DBIcon>
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...u.parameters?.docs?.source}}},d=[`DefaultText`,`DotSmall`,`IconSmall`]}))();export{c as DefaultText,l as DotSmall,u as IconSmall,d as __namedExportsOrder,s as default};