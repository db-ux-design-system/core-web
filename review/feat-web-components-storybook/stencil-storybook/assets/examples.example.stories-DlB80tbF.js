import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDialog/Examples`,component:`db-dialog`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o(),onCancel:o()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},c={args:{propOverrides:{id:`dialog-events`},onClose:o(),onCancel:o()},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="dialog-events">Cancel and close Events in console</db-button><db-dialog ${i(n)}>${r(`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>`)}</db-dialog></div>`},l={args:{propOverrides:{id:`dialog-events-form`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="dialog-events-form">Buttons type dialog event in console</db-button><db-dialog ${i(n)}>${r(`<form id="dialog-events-form-content"><p>Submitting reaches the form in the dialog content.</p></form>`)}</db-dialog></div>`},u={args:{propOverrides:{id:`dialog-nested-overlays`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="dialog-nested-overlays">Open: Nested overlays</db-button><db-dialog ${i(n)}>${r(`<p>The tooltip and the custom-select dropdown must line up with their trigger and must not be clipped by the dialog.</p><db-button>Hover for a tooltip<db-tooltip placement="top" id="dialog-nested-tooltip">I position against the viewport</db-tooltip></db-button><db-custom-select label="Pick an option" list-label="dialog-nested-select-list"></db-custom-select>`)}</db-dialog></div>`},d={args:{propOverrides:{id:`dialog-areas-text`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="dialog-areas-text">Open: With text prop</db-button><db-dialog ${i(n)}>${r(`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>`)}</db-dialog></div>`},f={args:{propOverrides:{id:`dialog-areas-start`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="dialog-areas-start">Open: With header start slot</db-button><db-dialog ${i(n)}>${r(`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>`)}</db-dialog></div>`},p={args:{propOverrides:{id:`dialog-areas-end`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="dialog-areas-end">Open: With header end slot</db-button><db-dialog ${i(n)}>${r(`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>`)}</db-dialog></div>`},m={args:{propOverrides:{id:`dialog-areas-no-footer`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="dialog-areas-no-footer">Open: Without footer</db-button><db-dialog ${i(n)}>${r(`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>`)}</db-dialog></div>`},h={args:{propOverrides:{id:`dialog-areas-subtitle`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="dialog-areas-subtitle">Open: With header subtitle</db-button><db-dialog ${i(n)}>${r(`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>`)}</db-dialog></div>`},g=[`CloseandCancel`,`Submitformincontent`,`Nestedoverlays`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withoutfooter`,`Withheadersubtitle`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-events'
    },
    "onClose": fn(),
    "onCancel": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="dialog-events">Cancel and close Events in console</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>\`)}</db-dialog></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-events-form'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="dialog-events-form">Buttons type dialog event in console</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<form id="dialog-events-form-content"><p>Submitting reaches the form in the dialog content.</p></form>\`)}</db-dialog></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-nested-overlays'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="dialog-nested-overlays">Open: Nested overlays</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<p>The tooltip and the custom-select dropdown must line up with their trigger and must not be clipped by the dialog.</p><db-button>Hover for a tooltip<db-tooltip placement="top" id="dialog-nested-tooltip">I position against the viewport</db-tooltip></db-button><db-custom-select label="Pick an option" list-label="dialog-nested-select-list"></db-custom-select>\`)}</db-dialog></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-text'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="dialog-areas-text">Open: With text prop</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>\`)}</db-dialog></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-start'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="dialog-areas-start">Open: With header start slot</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>\`)}</db-dialog></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-end'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="dialog-areas-end">Open: With header end slot</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>\`)}</db-dialog></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-no-footer'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="dialog-areas-no-footer">Open: Without footer</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>\`)}</db-dialog></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-subtitle'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="dialog-areas-subtitle">Open: With header subtitle</db-button><db-dialog \${spreadArgs(args)}>\${unsafeHTML(\`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>\`)}</db-dialog></div>\`
}`,...h.parameters?.docs?.source}}}})))()}_();export{c as CloseandCancel,u as Nestedoverlays,l as Submitformincontent,p as Withheaderendslot,f as Withheaderstartslot,h as Withheadersubtitle,m as Withoutfooter,d as Withtextprop,g as __namedExportsOrder,s as default};