import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-DYev2iXL.js";import{i as r,n as i,t as a}from"./apply-web-component-args-CKmtM0Bb.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBStack/Density`,component:`db-stack`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{style:{padding:`var(--db-spacing-fixed-xs)`}},render:({children:e,...n})=>t`<div data-density="functional" style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">Functional</db-infotext><db-stack ${i(n)}>${r(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},l={args:{"data-density":`regular`,style:{padding:`var(--db-spacing-fixed-xs)`}},render:({children:e,...n})=>t`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">(Default) Regular</db-infotext><db-stack ${i(n)}>${r(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},u={args:{style:{padding:`var(--db-spacing-fixed-xs)`}},render:({children:e,...n})=>t`<div data-density="expressive" style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">Expressive</db-infotext><db-stack ${i(n)}>${r(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="functional" style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">Functional</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">(Default) Regular</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="expressive" style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">Expressive</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};