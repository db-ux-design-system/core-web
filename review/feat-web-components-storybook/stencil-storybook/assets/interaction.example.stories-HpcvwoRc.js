import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDialog/Interaction`,component:`db-dialog`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o(),onCancel:o()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},c={args:{propOverrides:{id:`interaction-dialog-text`}},render:({children:e,...n})=>t`<div data-testid="text-dialog"><db-button command="show-modal" commandfor="interaction-dialog-text">Open: text and heading</db-button><db-dialog ${i(n)}>${r(`<span data-testid="text-content">Test</span>`)}</db-dialog></div>`},l={args:{"aria-labelledby":`consumer-label`,propOverrides:{id:`interaction-dialog-labelledby`}},render:({children:e,...n})=>t`<div data-testid="labelledby-dialog"><db-button command="show-modal" commandfor="interaction-dialog-labelledby">Open: aria-labelledby composition</db-button><db-dialog ${i(n)}>${r(`<span>Test</span>`)}</db-dialog></div>`},u={args:{propOverrides:{id:`interaction-dialog-header-id`}},render:({children:e,...n})=>t`<div data-testid="header-id-dialog"><db-button command="show-modal" commandfor="interaction-dialog-header-id">Open: derived heading id</db-button><db-dialog ${i(n)}>${r(`<span>Test</span>`)}</db-dialog></div>`},d={args:{"aria-label":`Consumer name`,propOverrides:{id:`interaction-dialog-aria-label`}},render:({children:e,...n})=>t`<div data-testid="aria-label-dialog"><db-button command="show-modal" commandfor="interaction-dialog-aria-label">Open: aria-label override</db-button><db-dialog ${i(n)}>${r(`<span>Test</span>`)}</db-dialog></div>`},f={args:{propOverrides:{id:`interaction-dialog-commandfor`}},render:({children:e,...n})=>t`<div data-testid="commandfor-dialog"><db-button command="show-modal" commandfor="interaction-dialog-commandfor">Open: close button commandfor</db-button><db-dialog ${i(n)}>${r(`<span>Test</span>`)}</db-dialog></div>`},p={args:{propOverrides:{id:`interaction-dialog-events`},onClose:o(),onCancel:o(),onClick:o()},render:({children:e,...n})=>t`<div data-testid="events-dialog"><db-button command="show-modal" commandfor="interaction-dialog-events">Open: events</db-button><db-dialog ${i(n)}>${r(`<span data-testid="events-content">Test</span>`)}</db-dialog>close: 0cancel: 0click: 0</div>`},m=[`Interaction`,`DialogInteraction1`,`DialogInteraction2`,`DialogInteraction3`,`DialogInteraction4`,`DialogInteraction5`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-text'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="text-dialog"><db-button command="show-modal" commandfor="interaction-dialog-text">Open: text and heading</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<span data-testid="text-content">Test</span>\`)}</db-dialog></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "consumer-label",
    "propOverrides": {
      id: 'interaction-dialog-labelledby'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="labelledby-dialog"><db-button command="show-modal" commandfor="interaction-dialog-labelledby">Open: aria-labelledby composition</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<span>Test</span>\`)}</db-dialog></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-header-id'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="header-id-dialog"><db-button command="show-modal" commandfor="interaction-dialog-header-id">Open: derived heading id</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<span>Test</span>\`)}</db-dialog></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Consumer name",
    "propOverrides": {
      id: 'interaction-dialog-aria-label'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="aria-label-dialog"><db-button command="show-modal" commandfor="interaction-dialog-aria-label">Open: aria-label override</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<span>Test</span>\`)}</db-dialog></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-commandfor'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="commandfor-dialog"><db-button command="show-modal" commandfor="interaction-dialog-commandfor">Open: close button commandfor</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<span>Test</span>\`)}</db-dialog></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-events'
    },
    "onClose": fn(),
    "onCancel": fn(),
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="events-dialog"><db-button command="show-modal" commandfor="interaction-dialog-events">Open: events</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<span data-testid="events-content">Test</span>\`)}</db-dialog>close: 0cancel: 0click: 0</div>\`
}`,...p.parameters?.docs?.source}}}})))()}h();export{l as DialogInteraction1,u as DialogInteraction2,d as DialogInteraction3,f as DialogInteraction4,p as DialogInteraction5,c as Interaction,m as __namedExportsOrder,s as default};