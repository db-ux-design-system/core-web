import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./link-B7BFlEUK.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLink/Content`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{href:{control:`text`},variant:{control:`select`,options:[`adaptive`,`brand`,`inline`]},disabled:{control:`boolean`},size:{control:`select`,options:[`medium`,`small`]},content:{control:`select`,options:[`external`,`internal`]},showIcon:{control:`boolean`},wrap:{control:`boolean`},text:{control:`text`},target:{control:`select`,options:[`_self`,`_blank`,`_parent`,`_top`]},rel:{control:`text`},hreflang:{control:`text`},referrerPolicy:{control:`select`,options:[`no-referrer`,`no-referrer-when-downgrade`,`origin`,`origin-when-cross-origin`,`same-origin`,`strict-origin`,`strict-origin-when-cross-origin`,`unsafe-url`]},role:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{href:`#`,text:`(Default) Internal`},render:e=>(0,i.jsx)(r,{...e})},c={args:{href:`#`,content:`external`,text:`External`},render:e=>(0,i.jsx)(r,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "(Default) Internal"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "content": "external",
    "text": "External"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`DefaultInternal`,`External`]})))()}u();export{s as DefaultInternal,c as External,l as __namedExportsOrder,o as default};