import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTooltip/Width`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},c={args:{id:`tooltip-12`},render:({children:e,...n})=>t`<db-button>(Default) Auto<db-tooltip ${i(n)}>${r(`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`)}</db-tooltip></db-button>`},l={args:{width:`fixed`,id:`tooltip-13`},render:({children:e,...n})=>t`<db-button>Fixed<db-tooltip ${i(n)}>${r(`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`)}</db-tooltip></db-button>`},u=[`DefaultAuto`,`Fixed`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-12"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>(Default) Auto<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`)}</db-tooltip></db-button>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "tooltip-13"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>Fixed<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`)}</db-tooltip></db-button>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultAuto,l as Fixed,u as __namedExportsOrder,s as default};