import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-Cr6zPwdc.js";import{i as r,n as i,t as a}from"./apply-web-component-args-BWDmT0qv.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPopover/Closed Popover Visibility`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{id:`popover-closed-visibility-switch`},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<db-button slot="trigger">Switch</db-button><db-switch>Switch me</db-switch>`)}</db-popover>`},l={args:{id:`popover-closed-visibility-switch-visual-aid`},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<db-button slot="trigger">Switch Visual Aid</db-button><db-switch visual-aid>Switch me</db-switch>`)}</db-popover>`},u={args:{id:`popover-closed-visibility-switch-visual-aid-closed`,open:!1},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<db-button slot="trigger">Switch Visual Aid Closed</db-button><db-switch visual-aid>Switch me</db-switch>`)}</db-popover>`},d={args:{id:`popover-closed-visibility-input`},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<db-button slot="trigger">Input</db-button><db-input label="Input" icon="search"></db-input>`)}</db-popover>`},f={args:{id:`popover-closed-visibility-checkbox`},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<db-button slot="trigger">Checkbox</db-button><db-checkbox>Check me</db-checkbox>`)}</db-popover>`},p={args:{id:`popover-closed-visibility-textarea`},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<db-button slot="trigger">Textarea</db-button><db-textarea label="Textarea"></db-textarea>`)}</db-popover>`},m=[`Switch`,`SwitchVisualAid`,`SwitchVisualAidClosed`,`Input`,`Checkbox`,`Textarea`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Switch</db-button><db-switch>Switch me</db-switch>\`)}</db-popover>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Switch Visual Aid</db-button><db-switch visual-aid>Switch me</db-switch>\`)}</db-popover>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid-closed",
    "open": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Switch Visual Aid Closed</db-button><db-switch visual-aid>Switch me</db-switch>\`)}</db-popover>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-input"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Input</db-button><db-input label="Input" icon="search"></db-input>\`)}</db-popover>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-checkbox"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Checkbox</db-button><db-checkbox>Check me</db-checkbox>\`)}</db-popover>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-textarea"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Textarea</db-button><db-textarea label="Textarea"></db-textarea>\`)}</db-popover>\`
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Checkbox,d as Input,c as Switch,l as SwitchVisualAid,u as SwitchVisualAidClosed,p as Textarea,m as __namedExportsOrder,s as default};