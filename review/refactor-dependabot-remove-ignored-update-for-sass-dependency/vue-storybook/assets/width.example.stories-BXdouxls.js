import{n as e}from"./chunk-BneVvdWh.js";import{D as t,T as n,t as r}from"./src-D8ePn3Ki.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBCustomButton/Width`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},noText:{control:`boolean`},wrap:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{width:`auto`,default:`<button type="button">Button</button>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},s={args:{width:`auto`,default:`<label for="checkbox23"
  ><input type="checkbox" id="checkbox23" />
  Checkbox
</label>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},c={args:{width:`auto`,default:`<a href="#">Link</a>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},l={args:{width:`full`,default:`<button type="button">Button</button>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >${e.default}</DBCustomButton></div>`})},u={args:{width:`full`,default:`<label for="checkbox24"
  ><input type="checkbox" id="checkbox24" />
  Checkbox
</label>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >${e.default}</DBCustomButton></div>`})},d={args:{width:`full`,default:`<a href="#">Link</a>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >${e.default}</DBCustomButton></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "default": \`<button type="button">Button</button>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "default": \`<label for="checkbox23"
  ><input type="checkbox" id="checkbox23" />
  Checkbox
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "default": \`<a href="#">Link</a>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<button type="button">Button</button>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<label for="checkbox24"
  ><input type="checkbox" id="checkbox24" />
  Checkbox
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<a href="#">Link</a>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`DefaultAutoButton`,`DefaultAutoCheckbox`,`DefaultAutoLink`,`FullButton`,`FullCheckbox`,`FullLink`]}))();export{o as DefaultAutoButton,s as DefaultAutoCheckbox,c as DefaultAutoLink,l as FullButton,u as FullCheckbox,d as FullLink,f as __namedExportsOrder,a as default};