import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTooltip/Interaction`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},c={args:{animation:`disabled`,id:`interaction-tooltip`,"data-testid":`tooltip`},render:({children:e,...n})=>t`<db-button aria-describedby="interaction-tooltip" data-testid="button">Button<db-tooltip ${i(n)}>${r(`Test`)}</db-tooltip></db-button>`},l=[`Interaction`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "id": "interaction-tooltip",
    "data-testid": "tooltip"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button aria-describedby="interaction-tooltip" data-testid="button">Button<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-tooltip></db-button>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Interaction,l as __namedExportsOrder,s as default};