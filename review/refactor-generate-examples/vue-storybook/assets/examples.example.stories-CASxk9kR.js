import{_ as c}from"./switch-DviyY-71.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSwitch/Examples",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"boolean"},size:{control:"select",options:["small","medium"]},label:{control:"text"},variant:{control:"select",options:["leading","trailing"]},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconLeading:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconTrailing:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},autocomplete:{control:"text"},messageIcon:{control:"text"},name:{control:"text"},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{icon:"cross_circle",iconTrailing:"clock",visualAid:!0,default:"Custom Icons"},render:r=>({components:{DBSwitch:c},setup(){return{args:r}},template:`<DBSwitch v-bind="args"   >${r.default}</DBSwitch>`})},o={args:{validMessage:"Valid",visualAid:!0,required:!0,default:"Required + Visual Aid"},render:r=>({components:{DBSwitch:c},setup(){return{args:r}},template:`<DBSwitch v-bind="args"   >${r.default}</DBSwitch>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "cross_circle",
    "iconTrailing": "clock",
    "visualAid": true,
    "default": \`Custom Icons\`
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "validMessage": "Valid",
    "visualAid": true,
    "required": true,
    "default": \`Required + Visual Aid\`
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
}`,...o.parameters?.docs?.source}}};const m=["CustomIcons","RequiredVisualAid"];export{e as CustomIcons,o as RequiredVisualAid,m as __namedExportsOrder,u as default};
