import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTooltip/Delay`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},c={args:{id:`tooltip-144`,delay:`none`},render:({children:e,...n})=>t`<db-button>(Default) None<db-tooltip ${i(n)}>${r(`Tooltip`)}</db-tooltip></db-button>`},l={args:{delay:`slow`,id:`tooltip-15`},render:({children:e,...n})=>t`<db-button>Slow<db-tooltip ${i(n)}>${r(`Tooltip`)}</db-tooltip></db-button>`},u={args:{delay:`fast`,id:`tooltip-16`},render:({children:e,...n})=>t`<db-button>Fast<db-tooltip ${i(n)}>${r(`Tooltip`)}</db-tooltip></db-button>`},d=[`DefaultNone`,`Slow`,`Fast`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-144",
    "delay": "none"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>(Default) None<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "tooltip-15"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>Slow<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "tooltip-16"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>Fast<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as DefaultNone,u as Fast,l as Slow,d as __namedExportsOrder,s as default};