import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBStack/Alignment Column`,component:`db-stack`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{alignment:`stretch`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`}},render:({children:e,...n})=>t`<div><db-infotext size="small" icon="none" semantic="informational">(Default) Stretch</db-infotext><db-stack ${i(n)}>${r(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},l={args:{alignment:`start`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`}},render:({children:e,...n})=>t`<div><db-infotext size="small" icon="none" semantic="informational">Start</db-infotext><db-stack ${i(n)}>${r(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},u={args:{alignment:`center`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`}},render:({children:e,...n})=>t`<div><db-infotext size="small" icon="none" semantic="informational">Center</db-infotext><db-stack ${i(n)}>${r(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},d={args:{alignment:`end`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`}},render:({children:e,...n})=>t`<div><db-infotext size="small" icon="none" semantic="informational">End</db-infotext><db-stack ${i(n)}>${r(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},f=[`DefaultStretch`,`Start`,`Center`,`End`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "stretch",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" icon="none" semantic="informational">(Default) Stretch</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" icon="none" semantic="informational">Start</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" icon="none" semantic="informational">Center</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" icon="none" semantic="informational">End</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Center,c as DefaultStretch,d as End,l as Start,f as __namedExportsOrder,s as default};