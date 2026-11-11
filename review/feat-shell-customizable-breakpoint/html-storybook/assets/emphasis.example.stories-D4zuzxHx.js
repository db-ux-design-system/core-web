import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./badge-DjgFuiB1.js";var a=t({DefaultWeak:()=>l,Strong:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBadge/Emphasis`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{children:`(Default) Weak`},render:e=>(0,o.jsx)(i,{...e})},u={args:{emphasis:`strong`,children:`Strong`},render:e=>(0,o.jsx)(i,{...e})},d=[`DefaultWeak`,`Strong`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Weak"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "children": "Strong"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,a as r,l as t};