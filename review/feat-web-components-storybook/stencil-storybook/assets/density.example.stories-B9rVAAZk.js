import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTooltip/Density`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},c={args:{id:`tooltip-01`},render:({children:e,...n})=>t`<db-button data-density="functional">Functional<db-tooltip ${i(n)}>${r(`Tooltip`)}</db-tooltip></db-button>`},l={args:{id:`tooltip-02`},render:({children:e,...n})=>t`<db-button data-density="regular">(Default) Regular<db-tooltip ${i(n)}>${r(`Tooltip`)}</db-tooltip></db-button>`},u={args:{id:`tooltip-03`},render:({children:e,...n})=>t`<db-button data-density="expressive">Expressive<db-tooltip ${i(n)}>${r(`Tooltip`)}</db-tooltip></db-button>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-01"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button data-density="functional">Functional<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-02"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button data-density="regular">(Default) Regular<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-03"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button data-density="expressive">Expressive<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};