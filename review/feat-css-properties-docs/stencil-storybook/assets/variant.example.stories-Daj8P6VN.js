import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CG73KG2K.js";import{n as i,t as a}from"./apply-web-component-args-e6TUK5Dk.js";var o=t({Brand:()=>u,DefaultAdaptive:()=>l,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLink/Variant`,component:`db-link`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{href:{control:`text`},variant:{control:`select`,options:[`adaptive`,`brand`,`inline`]},disabled:{control:`boolean`},size:{control:`select`,options:[`medium`,`small`]},content:{control:`select`,options:[`external`,`internal`]},showIcon:{control:`boolean`},wrap:{control:`boolean`},text:{control:`text`},target:{control:`select`,options:[`_self`,`_blank`,`_parent`,`_top`]},rel:{control:`text`},hreflang:{control:`text`},referrerPolicy:{control:`select`,options:[`no-referrer`,`no-referrer-when-downgrade`,`origin`,`origin-when-cross-origin`,`same-origin`,`strict-origin`,`strict-origin-when-cross-origin`,`unsafe-url`]},role:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{href:`#`,text:`(Default) Adaptive`},render:({children:e,...t})=>n`<db-link ${i(t)}></db-link>`},u={args:{href:`#`,variant:`brand`,text:`Brand`},render:({children:e,...t})=>n`<db-link ${i(t)}></db-link>`},d=[`DefaultAdaptive`,`Brand`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "(Default) Adaptive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-link \${spreadArgs(args)}></db-link>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "variant": "brand",
    "text": "Brand"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-link \${spreadArgs(args)}></db-link>\`
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,l as n,f as r,u as t};