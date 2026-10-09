import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTooltip/Show Arrow`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},c={args:{id:`tooltip-04`,showArrow:!0},render:({children:e,...n})=>t`<db-button>(Default) True<db-tooltip ${i(n)}>${r(`Tooltip`)}</db-tooltip></db-button>`},l={args:{id:`tooltip-05`,showArrow:!1},render:({children:e,...n})=>t`<db-button>False<db-tooltip ${i(n)}>${r(`Tooltip`)}</db-tooltip></db-button>`},u=[`DefaultTrue`,`False`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-04",
    "showArrow": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>(Default) True<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-05",
    "showArrow": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>False<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultTrue,l as False,u as __namedExportsOrder,s as default};