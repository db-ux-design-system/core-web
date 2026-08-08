import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-nPvTOwbu.js";import{n as r,t as i}from"./popover-kzUAotLK.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPopover/Spacing`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},s={args:{spacing:`small`,id:`popover-04`,default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>(Default) Small</DBButton></template>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},c={args:{spacing:`medium`,id:`popover-05`,default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Medium</DBButton></template>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},l={args:{spacing:`large`,id:`popover-055`,default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Large</DBButton></template>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},u={args:{spacing:`none`,id:`popover-06`,default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>None</DBButton></template>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`DefaultSmall`,`Medium`,`Large`,`None`]})))()}f();export{s as DefaultSmall,l as Large,c as Medium,u as None,d as __namedExportsOrder,o as default};