import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-CJErxTeS.js";import{n as r,t as i}from"./checkbox-BsXc7WWj.js";import{n as a,t as o}from"./input-WBNmJt6E.js";import{n as s,t as c}from"./popover-Ckj6dAOp.js";import{n as l,t as u}from"./switch-D9o-mvk1.js";import{n as d,t as f}from"./textarea-CPEucxLQ.js";var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),r(),o(),u(),f(),c(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBPopover/Closed Popover Visibility`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},h={args:{id:`popover-closed-visibility-switch`,default:`<DBSwitch>Switch me</DBSwitch
><template v-slot:trigger><DBButton>Switch</DBButton></template>`},render:e=>({components:{DBPopover:s,DBButton:n,DBCheckbox:i,DBInput:a,DBSwitch:l,DBTextarea:d},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},g={args:{id:`popover-closed-visibility-switch-visual-aid`,default:`<DBSwitch :visualAid="true">Switch me</DBSwitch
><template v-slot:trigger><DBButton>Switch Visual Aid</DBButton></template>`},render:e=>({components:{DBPopover:s,DBButton:n,DBCheckbox:i,DBInput:a,DBSwitch:l,DBTextarea:d},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},_={args:{id:`popover-closed-visibility-switch-visual-aid-closed`,open:!1,default:`<DBSwitch :visualAid="true">Switch me</DBSwitch
><template v-slot:trigger
  ><DBButton>Switch Visual Aid Closed</DBButton></template
>`},render:e=>({components:{DBPopover:s,DBButton:n,DBCheckbox:i,DBInput:a,DBSwitch:l,DBTextarea:d},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},v={args:{id:`popover-closed-visibility-input`,default:`<DBInput label="Input" icon="search"></DBInput
><template v-slot:trigger><DBButton>Input</DBButton></template>`},render:e=>({components:{DBPopover:s,DBButton:n,DBCheckbox:i,DBInput:a,DBSwitch:l,DBTextarea:d},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},y={args:{id:`popover-closed-visibility-checkbox`,default:`<DBCheckbox>Check me</DBCheckbox
><template v-slot:trigger><DBButton>Checkbox</DBButton></template>`},render:e=>({components:{DBPopover:s,DBButton:n,DBCheckbox:i,DBInput:a,DBSwitch:l,DBTextarea:d},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},b={args:{id:`popover-closed-visibility-textarea`,default:`<DBTextarea label="Textarea"></DBTextarea
><template v-slot:trigger><DBButton>Textarea</DBButton></template>`},render:e=>({components:{DBPopover:s,DBButton:n,DBCheckbox:i,DBInput:a,DBSwitch:l,DBTextarea:d},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch",
    "default": \`<DBSwitch>Switch me</DBSwitch
><template v-slot:trigger><DBButton>Switch</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton,
      DBCheckbox,
      DBInput,
      DBSwitch,
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid",
    "default": \`<DBSwitch :visualAid="true">Switch me</DBSwitch
><template v-slot:trigger><DBButton>Switch Visual Aid</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton,
      DBCheckbox,
      DBInput,
      DBSwitch,
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid-closed",
    "open": false,
    "default": \`<DBSwitch :visualAid="true">Switch me</DBSwitch
><template v-slot:trigger
  ><DBButton>Switch Visual Aid Closed</DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton,
      DBCheckbox,
      DBInput,
      DBSwitch,
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-input",
    "default": \`<DBInput label="Input" icon="search"></DBInput
><template v-slot:trigger><DBButton>Input</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton,
      DBCheckbox,
      DBInput,
      DBSwitch,
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-checkbox",
    "default": \`<DBCheckbox>Check me</DBCheckbox
><template v-slot:trigger><DBButton>Checkbox</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton,
      DBCheckbox,
      DBInput,
      DBSwitch,
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-textarea",
    "default": \`<DBTextarea label="Textarea"></DBTextarea
><template v-slot:trigger><DBButton>Textarea</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton,
      DBCheckbox,
      DBInput,
      DBSwitch,
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...b.parameters?.docs?.source}}},x=[`Switch`,`SwitchVisualAid`,`SwitchVisualAidClosed`,`Input`,`Checkbox`,`Textarea`]})))()}S();export{y as Checkbox,v as Input,h as Switch,g as SwitchVisualAid,_ as SwitchVisualAidClosed,b as Textarea,x as __namedExportsOrder,m as default};