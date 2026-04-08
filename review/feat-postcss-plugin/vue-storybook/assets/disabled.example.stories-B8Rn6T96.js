import{n as e}from"./chunk-BneVvdWh.js";import{D as t,T as n,t as r}from"./src-BQlAOnTN.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBCustomButton/Disabled`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},noText:{control:`boolean`},wrap:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{default:`<button type="button">Button</button>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},s={args:{default:`<label for="checkbox06"
  ><input type="checkbox" id="checkbox06" />
  Checkbox
</label>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},c={args:{default:`<a href="#">Link</a>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},l={args:{default:`<button type="button" :disabled="true"> Button </button>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},u={args:{default:`<label for="checkbox07"
  ><input type="checkbox" id="checkbox07" :disabled="true" />
  Checkbox
</label>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},d={args:{default:`<a href="#" aria-disabled="true" :tabIndex="-1"> Link </a>`},render:e=>({components:{DBCustomButton:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
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
    "default": \`<label for="checkbox06"
  ><input type="checkbox" id="checkbox06" />
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
    "default": \`<button type="button" :disabled="true"> Button </button>\`
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label for="checkbox07"
  ><input type="checkbox" id="checkbox07" :disabled="true" />
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#" aria-disabled="true" :tabIndex="-1"> Link </a>\`
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
}`,...d.parameters?.docs?.source}}},f=[`DefaultFalseButton`,`DefaultFalseCheckbox`,`DefaultFalseLink`,`TrueButton`,`TrueCheckbox`,`TrueLink`]}))();export{o as DefaultFalseButton,s as DefaultFalseCheckbox,c as DefaultFalseLink,l as TrueButton,u as TrueCheckbox,d as TrueLink,f as __namedExportsOrder,a as default};