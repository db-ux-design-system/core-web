import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-LYtL2xrD.js";import{i,n as a,t as o}from"./apply-web-component-args-QiJXFgM3.js";var s=t({DialogInteraction1:()=>d,DialogInteraction2:()=>f,DialogInteraction3:()=>p,DialogInteraction4:()=>m,DialogInteraction5:()=>h,Interaction:()=>u,__namedExportsOrder:()=>g,default:()=>l}),c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDialog/Interaction`,component:`db-dialog`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c(),onCancel:c()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},u={args:{propOverrides:{id:`interaction-dialog-text`}},render:({children:e,...t})=>n`<div data-testid="text-dialog"><db-button command="show-modal" commandfor="interaction-dialog-text">Open: text and heading</db-button><db-dialog ${a(t)}>${i(`<db-dialog-header slot="header" text="Title"></db-dialog-header><span data-testid="text-content">Test</span>`)}</db-dialog></div>`},d={args:{"aria-labelledby":`consumer-label`,propOverrides:{id:`interaction-dialog-labelledby`}},render:({children:e,...t})=>n`<div data-testid="labelledby-dialog"><db-button command="show-modal" commandfor="interaction-dialog-labelledby">Open: aria-labelledby composition</db-button><db-dialog ${a(t)}>${i(`<db-dialog-header slot="header" text="Title"></db-dialog-header><span>Test</span>`)}</db-dialog></div>`},f={args:{propOverrides:{id:`interaction-dialog-header-id`}},render:({children:e,...t})=>n`<div data-testid="header-id-dialog"><db-button command="show-modal" commandfor="interaction-dialog-header-id">Open: derived heading id</db-button><db-dialog ${a(t)}>${i(`<db-dialog-header slot="header" id="interaction-my-header" text="Title"></db-dialog-header><span>Test</span>`)}</db-dialog></div>`},p={args:{"aria-label":`Consumer name`,propOverrides:{id:`interaction-dialog-aria-label`}},render:({children:e,...t})=>n`<div data-testid="aria-label-dialog"><db-button command="show-modal" commandfor="interaction-dialog-aria-label">Open: aria-label override</db-button><db-dialog ${a(t)}>${i(`<db-dialog-header slot="header" text="Title"></db-dialog-header><span>Test</span>`)}</db-dialog></div>`},m={args:{propOverrides:{id:`interaction-dialog-commandfor`}},render:({children:e,...t})=>n`<div data-testid="commandfor-dialog"><db-button command="show-modal" commandfor="interaction-dialog-commandfor">Open: close button commandfor</db-button><db-dialog ${a(t)}>${i(`<db-dialog-header slot="header" text="Title"></db-dialog-header><span>Test</span>`)}</db-dialog></div>`},h={args:{propOverrides:{id:`interaction-dialog-events`},onClose:c(),onCancel:c(),onClick:c()},render:({children:e,...t})=>n`<div data-testid="events-dialog"><db-button command="show-modal" commandfor="interaction-dialog-events">Open: events</db-button><db-dialog ${a(t)}>${i(`<db-dialog-header slot="header" text="Title"></db-dialog-header><span data-testid="events-content">Test</span>`)}</db-dialog><div>close: 0</div><div>cancel: 0</div><div>click: 0</div></div>`},g=[`Interaction`,`DialogInteraction1`,`DialogInteraction2`,`DialogInteraction3`,`DialogInteraction4`,`DialogInteraction5`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-text'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="text-dialog"><db-button command="show-modal" commandfor="interaction-dialog-text">Open: text and heading</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<db-dialog-header slot="header" text="Title"></db-dialog-header><span data-testid="text-content">Test</span>\`)}</db-dialog></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "consumer-label",
    "propOverrides": {
      id: 'interaction-dialog-labelledby'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="labelledby-dialog"><db-button command="show-modal" commandfor="interaction-dialog-labelledby">Open: aria-labelledby composition</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<db-dialog-header slot="header" text="Title"></db-dialog-header><span>Test</span>\`)}</db-dialog></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-header-id'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="header-id-dialog"><db-button command="show-modal" commandfor="interaction-dialog-header-id">Open: derived heading id</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<db-dialog-header slot="header" id="interaction-my-header" text="Title"></db-dialog-header><span>Test</span>\`)}</db-dialog></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Consumer name",
    "propOverrides": {
      id: 'interaction-dialog-aria-label'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="aria-label-dialog"><db-button command="show-modal" commandfor="interaction-dialog-aria-label">Open: aria-label override</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<db-dialog-header slot="header" text="Title"></db-dialog-header><span>Test</span>\`)}</db-dialog></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-commandfor'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="commandfor-dialog"><db-button command="show-modal" commandfor="interaction-dialog-commandfor">Open: close button commandfor</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<db-dialog-header slot="header" text="Title"></db-dialog-header><span>Test</span>\`)}</db-dialog></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div data-testid="events-dialog"><db-button command="show-modal" commandfor="interaction-dialog-events">Open: events</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<db-dialog-header slot="header" text="Title"></db-dialog-header><span data-testid="events-content">Test</span>\`)}</db-dialog><div>close: 0</div><div>cancel: 0</div><div>click: 0</div></div>\`
}`,...h.parameters?.docs?.source}}}})))()}export{h as a,s as c,m as i,f as n,u as o,p as r,_ as s,d as t};