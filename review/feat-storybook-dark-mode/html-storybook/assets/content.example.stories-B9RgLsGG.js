import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./badge-DjgFuiB1.js";import{n as a,t as o}from"./icon-CWm84KeR.js";var s=t({DefaultText:()=>d,DotSmall:()=>f,IconSmall:()=>p,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{a(),r(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBadge/Content`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{children:`(Default) Text`},render:e=>(0,c.jsx)(i,{...e})},f={args:{},render:e=>(0,c.jsx)(i,{...e})},p={args:{semantic:`critical`,emphasis:`strong`,children:(0,c.jsx)(o,{icon:`x_placeholder`,children:`Icon - Small`})},render:e=>(0,c.jsx)(i,{...e})},m=[`DefaultText`,`DotSmall`,`IconSmall`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Text"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render: (properties: any) => <DBBadge {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong",
    "children": <DBIcon icon="x_placeholder">Icon - Small</DBIcon>
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,s as i,f as n,p as r,d as t};