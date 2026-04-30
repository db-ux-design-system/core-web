import{n as e}from"./chunk-DnJy8xQt.js";import{s as t,t as n}from"./src-CwgarGln.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBSwitch/Show Required Asterisk`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},visualAid:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},variant:{control:`select`,options:[`leading`,`trailing`]},showLabel:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},iconLeading:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},iconTrailing:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},showMessage:{control:`boolean`},message:{control:`text`},autocomplete:{control:`text`},messageIcon:{control:`text`},name:{control:`text`},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{required:!0,showRequiredAsterisk:!0,default:`(Default) True`},render:e=>({components:{DBSwitch:t},setup(){return{args:e}},template:`<DBSwitch v-bind="args"   >${e.default}</DBSwitch>`})},o={args:{required:!0,showRequiredAsterisk:!1,default:`False`},render:e=>({components:{DBSwitch:t},setup(){return{args:e}},template:`<DBSwitch v-bind="args"   >${e.default}</DBSwitch>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "required": true,
    "showRequiredAsterisk": true,
    "default": \`(Default) True\`
  },
  render: (args: any) => ({
    components: {
      DBSwitch
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBSwitch v-bind="args"   >\${args.default}</DBSwitch>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "required": true,
    "showRequiredAsterisk": false,
    "default": \`False\`
  },
  render: (args: any) => ({
    components: {
      DBSwitch
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBSwitch v-bind="args"   >\${args.default}</DBSwitch>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultTrue`,`False`]}))();export{a as DefaultTrue,o as False,s as __namedExportsOrder,i as default};