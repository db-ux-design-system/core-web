import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLink/Density`,component:`db-link`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{href:{control:`text`},variant:{control:`select`,options:[`adaptive`,`brand`,`inline`]},disabled:{control:`boolean`},size:{control:`select`,options:[`medium`,`small`]},content:{control:`select`,options:[`external`,`internal`]},showIcon:{control:`boolean`},wrap:{control:`boolean`},text:{control:`text`},target:{control:`select`,options:[`_self`,`_blank`,`_parent`,`_top`]},rel:{control:`text`},hreflang:{control:`text`},referrerPolicy:{control:`select`,options:[`no-referrer`,`no-referrer-when-downgrade`,`origin`,`origin-when-cross-origin`,`same-origin`,`strict-origin`,`strict-origin-when-cross-origin`,`unsafe-url`]},role:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-density":`functional`,href:`#`,text:`Functional`},render:({children:e,...n})=>t`<db-link ${r(n)}></db-link>`},c={args:{"data-density":`regular`,href:`#`,text:`(Default) Regular`},render:({children:e,...n})=>t`<db-link ${r(n)}></db-link>`},l={args:{"data-density":`expressive`,href:`#`,text:`Expressive`},render:({children:e,...n})=>t`<db-link ${r(n)}></db-link>`},u=[`Functional`,`DefaultRegular`,`Expressive`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "href": "#",
    "text": "Functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-link \${spreadArgs(args)}></db-link>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "href": "#",
    "text": "(Default) Regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-link \${spreadArgs(args)}></db-link>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "href": "#",
    "text": "Expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-link \${spreadArgs(args)}></db-link>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};