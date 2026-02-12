import{_ as o}from"./switch-DviyY-71.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSwitch/Validation",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"boolean"},size:{control:"select",options:["small","medium"]},label:{control:"text"},variant:{control:"select",options:["leading","trailing"]},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconLeading:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconTrailing:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},autocomplete:{control:"text"},messageIcon:{control:"text"},name:{control:"text"},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{default:"(Default) No validation"},render:e=>({components:{DBSwitch:o},setup(){return{args:e}},template:`<DBSwitch v-bind="args"   >${e.default}</DBSwitch>`})},a={args:{validation:"invalid",invalidMessage:"Invalid Message",default:"Invalid"},render:e=>({components:{DBSwitch:o},setup(){return{args:e}},template:`<DBSwitch v-bind="args"   >${e.default}</DBSwitch>`})},n={args:{validation:"valid",validMessage:"Valid message",checked:!0,default:"Valid"},render:e=>({components:{DBSwitch:o},setup(){return{args:e}},template:`<DBSwitch v-bind="args"   >${e.default}</DBSwitch>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) No validation\`
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "default": \`Invalid\`
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "validation": "valid",
    "validMessage": "Valid message",
    "checked": true,
    "default": \`Valid\`
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
}`,...n.parameters?.docs?.source}}};const p=["DefaultNovalidation","Invalid","Valid"];export{r as DefaultNovalidation,a as Invalid,n as Valid,p as __namedExportsOrder,u as default};
