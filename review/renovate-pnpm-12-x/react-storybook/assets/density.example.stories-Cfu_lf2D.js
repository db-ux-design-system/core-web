import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./link-I3nqCvO0.js";var a=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLink/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{href:{control:`text`},variant:{control:`select`,options:[`adaptive`,`brand`,`inline`]},disabled:{control:`boolean`},size:{control:`select`,options:[`medium`,`small`]},content:{control:`select`,options:[`external`,`internal`]},showIcon:{control:`boolean`},wrap:{control:`boolean`},text:{control:`text`},target:{control:`select`,options:[`_self`,`_blank`,`_parent`,`_top`]},rel:{control:`text`},hreflang:{control:`text`},referrerPolicy:{control:`select`,options:[`no-referrer`,`no-referrer-when-downgrade`,`origin`,`origin-when-cross-origin`,`same-origin`,`strict-origin`,`strict-origin-when-cross-origin`,`unsafe-url`]},role:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{"data-density":`functional`,href:`#`,text:`Functional`},render:e=>(0,o.jsx)(i,{...e})},u={args:{"data-density":`regular`,href:`#`,text:`(Default) Regular`},render:e=>(0,o.jsx)(i,{...e})},d={args:{"data-density":`expressive`,href:`#`,text:`Expressive`},render:e=>(0,o.jsx)(i,{...e})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "href": "#",
    "text": "Functional"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "href": "#",
    "text": "(Default) Regular"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "href": "#",
    "text": "Expressive"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,a as i,d as n,l as r,u as t};