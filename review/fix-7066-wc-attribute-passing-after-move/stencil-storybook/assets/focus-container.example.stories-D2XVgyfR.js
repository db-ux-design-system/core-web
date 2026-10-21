import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-DlgC8ppm.js";import{i as r,n as i,t as a}from"./apply-web-component-args-BFT3uh4k.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBStack/Focus Container`,component:`db-stack`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"data-testid":`default-stack`},render:({children:e,...n})=>t`<div><db-stack ${i(n)}>${r(`<db-button data-focus="default">Focusable</db-button><span>Content 2</span>`)}</db-stack></div>`},l={args:{"data-testid":`wrap-stack`,wrap:!0},render:({children:e,...n})=>t`<div><db-stack ${i(n)}>${r(`<db-button data-focus="default">Focusable</db-button><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},u={args:{"data-testid":`focus-container-stack`,"data-focus-container":`true`,wrap:!0},render:({children:e,...n})=>t`<div><db-stack ${i(n)}>${r(`<db-button data-focus="default">Focusable</db-button><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},d=[`DefaultNoClipping`,`Wrap`,`WrapFocusContainer`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "default-stack"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<db-button data-focus="default">Focusable</db-button><span>Content 2</span>\`)}</db-stack></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "wrap-stack",
    "wrap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<db-button data-focus="default">Focusable</db-button><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "focus-container-stack",
    "data-focus-container": "true",
    "wrap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<db-button data-focus="default">Focusable</db-button><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as DefaultNoClipping,l as Wrap,u as WrapFocusContainer,d as __namedExportsOrder,s as default};