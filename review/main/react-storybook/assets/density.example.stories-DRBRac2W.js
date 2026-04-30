import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{g as n,t as r}from"./src-FlJ3DuBk.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLink/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{href:{control:`text`},variant:{control:`select`,options:[`adaptive`,`brand`,`inline`]},disabled:{control:`boolean`},size:{control:`select`,options:[`medium`,`small`]},content:{control:`select`,options:[`external`,`internal`]},showIcon:{control:`boolean`},wrap:{control:`boolean`},text:{control:`text`},target:{control:`select`,options:[`_self`,`_blank`,`_parent`,`_top`]},rel:{control:`text`},hreflang:{control:`text`},referrerPolicy:{control:`select`,options:[`no-referrer`,`no-referrer-when-downgrade`,`origin`,`origin-when-cross-origin`,`same-origin`,`strict-origin`,`strict-origin-when-cross-origin`,`unsafe-url`]},role:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-density":`functional`,href:`#`,text:`Functional`},render:e=>(0,i.jsx)(n,{...e})},c={args:{"data-density":`regular`,href:`#`,text:`(Default) Regular`},render:e=>(0,i.jsx)(n,{...e})},l={args:{"data-density":`expressive`,href:`#`,text:`Expressive`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "href": "#",
    "text": "Functional"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "href": "#",
    "text": "(Default) Regular"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "href": "#",
    "text": "Expressive"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};