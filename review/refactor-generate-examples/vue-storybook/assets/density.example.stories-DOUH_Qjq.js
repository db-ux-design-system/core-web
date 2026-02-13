import{_ as a}from"./icon-0mls5vVL.js";import{_ as r}from"./infotext-fAUKZdVL.js";import"./iframe-YOpS_vkW.js";import"./preload-helper-_n2GBM2K.js";import"./index-nMDAkmV1.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBIcon/Density",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},variant:{control:"text"},weight:{control:"select",options:["16","20","24","32","48","64"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{icon:"x_placeholder",default:"Functional"},render:n=>({components:{DBIcon:a,DBInfotext:r},setup(){return{args:n}},template:`<div data-density="functional"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBIcon v-bind="args"   >${n.default}</DBIcon></div>`})},t={args:{icon:"x_placeholder",default:"(Default) Regular"},render:n=>({components:{DBIcon:a,DBInfotext:r},setup(){return{args:n}},template:`<div data-density="regular"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBIcon v-bind="args"   >${n.default}</DBIcon></div>`})},o={args:{icon:"x_placeholder",default:"Expressive"},render:n=>({components:{DBIcon:a,DBInfotext:r},setup(){return{args:n}},template:`<div data-density="expressive"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBIcon v-bind="args"   >${n.default}</DBIcon></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "default": \`Functional\`
  },
  render: (args: any) => ({
    components: {
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="functional"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBIcon v-bind="args"   >\${args.default}</DBIcon></div>\`
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "default": \`(Default) Regular\`
  },
  render: (args: any) => ({
    components: {
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="regular"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBIcon v-bind="args"   >\${args.default}</DBIcon></div>\`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "default": \`Expressive\`
  },
  render: (args: any) => ({
    components: {
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="expressive"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBIcon v-bind="args"   >\${args.default}</DBIcon></div>\`
  })
}`,...o.parameters?.docs?.source}}};const p=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,o as Expressive,e as Functional,p as __namedExportsOrder,m as default};
