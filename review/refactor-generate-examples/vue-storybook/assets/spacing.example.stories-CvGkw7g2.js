import{_ as o}from"./popover-C-glpjqY.js";import{_ as a}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBPopover/Spacing",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},spacing:{control:"select",options:["medium","small","large","none"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},gap:{control:"boolean"},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},width:{control:"select",options:["auto","fixed"]},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{spacing:"small",id:"popover-04",default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>(Default) Small</DBButton></template>`},render:t=>({components:{DBPopover:o,DBButton:a},setup(){return{args:t}},template:`<DBPopover v-bind="args"   >${t.default}</DBPopover>`})},n={args:{spacing:"medium",id:"popover-05",default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Medium</DBButton></template>`},render:t=>({components:{DBPopover:o,DBButton:a},setup(){return{args:t}},template:`<DBPopover v-bind="args"   >${t.default}</DBPopover>`})},r={args:{spacing:"large",id:"popover-055",default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Large</DBButton></template>`},render:t=>({components:{DBPopover:o,DBButton:a},setup(){return{args:t}},template:`<DBPopover v-bind="args"   >${t.default}</DBPopover>`})},s={args:{spacing:"none",id:"popover-06",default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>None</DBButton></template>`},render:t=>({components:{DBPopover:o,DBButton:a},setup(){return{args:t}},template:`<DBPopover v-bind="args"   >${t.default}</DBPopover>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "id": "popover-04",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>(Default) Small</DBButton></template>\`
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
    "spacing": "medium",
    "id": "popover-05",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Medium</DBButton></template>\`
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "id": "popover-055",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Large</DBButton></template>\`
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "id": "popover-06",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>None</DBButton></template>\`
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
}`,...s.parameters?.docs?.source}}};const D=["DefaultSmall","Medium","Large","None"];export{e as DefaultSmall,r as Large,n as Medium,s as None,D as __namedExportsOrder,d as default};
