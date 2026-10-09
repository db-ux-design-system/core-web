import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBSwitch/Visual Aid`,component:`db-switch`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},visualAid:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},variant:{control:`select`,options:[`leading`,`trailing`]},showLabel:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},iconLeading:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},iconTrailing:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},showMessage:{control:`boolean`},message:{control:`text`},autocomplete:{control:`text`},messageIcon:{control:`text`},name:{control:`text`},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{visualAid:!1},render:({children:e,...n})=>t`<db-switch ${i(n)}>${r(`(Default) False (Unchecked)`)}</db-switch>`},l={args:{visualAid:!1,checked:!0},render:({children:e,...n})=>t`<db-switch ${i(n)}>${r(`(Default) False (Checked)`)}</db-switch>`},u={args:{iconLeading:`moon`,iconTrailing:`sun`,visualAid:!0},render:({children:e,...n})=>t`<db-switch ${i(n)}>${r(`True (Unchecked)`)}</db-switch>`},d={args:{iconLeading:`moon`,iconTrailing:`sun`,visualAid:!0,checked:!0},render:({children:e,...n})=>t`<db-switch ${i(n)}>${r(`True (Checked)`)}</db-switch>`},f=[`DefaultFalseUnchecked`,`DefaultFalseChecked`,`TrueUnchecked`,`TrueChecked`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "visualAid": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-switch \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False (Unchecked)\`)}</db-switch>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "visualAid": false,
    "checked": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-switch \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False (Checked)\`)}</db-switch>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "iconLeading": "moon",
    "iconTrailing": "sun",
    "visualAid": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-switch \${spreadArgs(args)}>\${unsafeHTML(\`True (Unchecked)\`)}</db-switch>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "iconLeading": "moon",
    "iconTrailing": "sun",
    "visualAid": true,
    "checked": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-switch \${spreadArgs(args)}>\${unsafeHTML(\`True (Checked)\`)}</db-switch>\`
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as DefaultFalseChecked,c as DefaultFalseUnchecked,d as TrueChecked,u as TrueUnchecked,f as __namedExportsOrder,s as default};