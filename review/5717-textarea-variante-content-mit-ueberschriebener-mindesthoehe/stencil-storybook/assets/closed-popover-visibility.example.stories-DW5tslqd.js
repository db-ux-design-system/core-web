import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-xWuVYIXT.js";import{i,n as a,t as o}from"./apply-web-component-args-DjVuTJbw.js";var s=t({Checkbox:()=>m,Input:()=>p,Switch:()=>u,SwitchVisualAid:()=>d,SwitchVisualAidClosed:()=>f,Textarea:()=>h,__namedExportsOrder:()=>g,default:()=>l}),c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBPopover/Closed Popover Visibility`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},u={args:{id:`popover-closed-visibility-switch`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Switch</db-button><db-switch>Switch me</db-switch>`)}</db-popover>`},d={args:{id:`popover-closed-visibility-switch-visual-aid`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Switch Visual Aid</db-button><db-switch visual-aid>Switch me</db-switch>`)}</db-popover>`},f={args:{id:`popover-closed-visibility-switch-visual-aid-closed`,open:!1},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Switch Visual Aid Closed</db-button><db-switch visual-aid>Switch me</db-switch>`)}</db-popover>`},p={args:{id:`popover-closed-visibility-input`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Input</db-button><db-input label="Input" icon="search"></db-input>`)}</db-popover>`},m={args:{id:`popover-closed-visibility-checkbox`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Checkbox</db-button><db-checkbox>Check me</db-checkbox>`)}</db-popover>`},h={args:{id:`popover-closed-visibility-textarea`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Textarea</db-button><db-textarea label="Textarea"></db-textarea>`)}</db-popover>`},g=[`Switch`,`SwitchVisualAid`,`SwitchVisualAidClosed`,`Input`,`Checkbox`,`Textarea`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Switch</db-button><db-switch>Switch me</db-switch>\`)}</db-popover>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Switch Visual Aid</db-button><db-switch visual-aid>Switch me</db-switch>\`)}</db-popover>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid-closed",
    "open": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Switch Visual Aid Closed</db-button><db-switch visual-aid>Switch me</db-switch>\`)}</db-popover>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-input"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Input</db-button><db-input label="Input" icon="search"></db-input>\`)}</db-popover>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-checkbox"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Checkbox</db-button><db-checkbox>Check me</db-checkbox>\`)}</db-popover>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-textarea"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Textarea</db-button><db-textarea label="Textarea"></db-textarea>\`)}</db-popover>\`
}`,...h.parameters?.docs?.source}}}})))()}export{f as a,_ as c,d as i,p as n,h as o,u as r,s,m as t};