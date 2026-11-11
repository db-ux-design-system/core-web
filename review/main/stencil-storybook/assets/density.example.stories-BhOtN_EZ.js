import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BQPE-Z7b.js";import{n as i,t as a}from"./apply-web-component-args-B09ukjNm.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLink/Density`,component:`db-link`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{href:{control:`text`},variant:{control:`select`,options:[`adaptive`,`brand`,`inline`]},disabled:{control:`boolean`},size:{control:`select`,options:[`medium`,`small`]},content:{control:`select`,options:[`external`,`internal`]},showIcon:{control:`boolean`},wrap:{control:`boolean`},text:{control:`text`},target:{control:`select`,options:[`_self`,`_blank`,`_parent`,`_top`]},rel:{control:`text`},hreflang:{control:`text`},referrerPolicy:{control:`select`,options:[`no-referrer`,`no-referrer-when-downgrade`,`origin`,`origin-when-cross-origin`,`same-origin`,`strict-origin`,`strict-origin-when-cross-origin`,`unsafe-url`]},role:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{"data-density":`functional`,href:`#`,text:`Functional`},render:({children:e,...t})=>n`<db-link ${i(t)}></db-link>`},u={args:{"data-density":`regular`,href:`#`,text:`(Default) Regular`},render:({children:e,...t})=>n`<db-link ${i(t)}></db-link>`},d={args:{"data-density":`expressive`,href:`#`,text:`Expressive`},render:({children:e,...t})=>n`<db-link ${i(t)}></db-link>`},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "href": "#",
    "text": "Functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-link \${spreadArgs(args)}></db-link>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "href": "#",
    "text": "(Default) Regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-link \${spreadArgs(args)}></db-link>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "href": "#",
    "text": "Expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-link \${spreadArgs(args)}></db-link>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};