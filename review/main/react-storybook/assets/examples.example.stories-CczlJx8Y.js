import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{s as n,t as r}from"./src-Dg0IbgPT.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBSwitch/Examples`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},visualAid:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},variant:{control:`select`,options:[`leading`,`trailing`]},showLabel:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},iconLeading:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},iconTrailing:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},showMessage:{control:`boolean`},message:{control:`text`},autocomplete:{control:`text`},messageIcon:{control:`text`},name:{control:`text`},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{icon:`cross_circle`,iconTrailing:`clock`,visualAid:!0,children:`Custom Icons`},render:e=>(0,i.jsx)(n,{...e})},c={args:{validMessage:`Valid`,visualAid:!0,required:!0,children:`Required + Visual Aid`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "cross_circle",
    "iconTrailing": "clock",
    "visualAid": true,
    "children": "Custom Icons"
  },
  render: (properties: any) => <DBSwitch {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "validMessage": "Valid",
    "visualAid": true,
    "required": true,
    "children": "Required + Visual Aid"
  },
  render: (properties: any) => <DBSwitch {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`CustomIcons`,`RequiredVisualAid`]}))();export{s as CustomIcons,c as RequiredVisualAid,l as __namedExportsOrder,o as default};