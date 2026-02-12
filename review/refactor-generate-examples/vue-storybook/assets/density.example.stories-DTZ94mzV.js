import{_ as r}from"./popover-C-glpjqY.js";import{_ as s}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBPopover/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},spacing:{control:"select",options:["medium","small","large","none"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},gap:{control:"boolean"},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},width:{control:"select",options:["auto","fixed"]},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{"data-density":"functional",id:"popover-01",default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Functional</DBButton></template>`},render:t=>({components:{DBPopover:r,DBButton:s},setup(){return{args:t}},template:`<DBPopover v-bind="args"   >${t.default}</DBPopover>`})},e={args:{"data-density":"regular",id:"popover-02",default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>(Default) Regular</DBButton></template>`},render:t=>({components:{DBPopover:r,DBButton:s},setup(){return{args:t}},template:`<DBPopover v-bind="args"   >${t.default}</DBPopover>`})},n={args:{"data-density":"expressive",id:"popover-03",default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Expressive</DBButton></template>`},render:t=>({components:{DBPopover:r,DBButton:s},setup(){return{args:t}},template:`<DBPopover v-bind="args"   >${t.default}</DBPopover>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "id": "popover-01",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Functional</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "id": "popover-02",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>(Default) Regular</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "id": "popover-03",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Expressive</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...n.parameters?.docs?.source}}};const c=["Functional","DefaultRegular","Expressive"];export{e as DefaultRegular,n as Expressive,o as Functional,c as __namedExportsOrder,d as default};
