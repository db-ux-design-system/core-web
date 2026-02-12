import{_ as o}from"./icon-D-Az7Vp_.js";import{_ as r}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBIcon/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},variant:{control:"text"},weight:{control:"select",options:["16","20","24","32","48","64"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{"data-density":"functional",icon:"x_placeholder",default:"Functional"},render:n=>({components:{DBIcon:o,DBInfotext:r},setup(){return{args:n}},template:`<div data-density="functional"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBIcon v-bind="args"   >${n.default}</DBIcon></div>`})},t={args:{"data-density":"regular",icon:"x_placeholder",default:"(Default) Regular"},render:n=>({components:{DBIcon:o,DBInfotext:r},setup(){return{args:n}},template:`<div data-density="regular"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBIcon v-bind="args"   >${n.default}</DBIcon></div>`})},a={args:{"data-density":"expressive",icon:"x_placeholder",default:"Expressive"},render:n=>({components:{DBIcon:o,DBInfotext:r},setup(){return{args:n}},template:`<div data-density="expressive"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBIcon v-bind="args"   >${n.default}</DBIcon></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
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
    "data-density": "regular",
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
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
}`,...a.parameters?.docs?.source}}};const p=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,a as Expressive,e as Functional,p as __namedExportsOrder,m as default};
