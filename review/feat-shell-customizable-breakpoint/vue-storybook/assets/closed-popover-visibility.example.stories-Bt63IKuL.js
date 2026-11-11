import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-B84jE1k4.js";import{n as i,t as a}from"./checkbox-CO2DADrn.js";import{n as o,t as s}from"./input-C6mEWP8Y.js";import{n as c,t as l}from"./popover-B4vHOhQD.js";import{n as u,t as d}from"./switch-Ces8oyPC.js";import{n as f,t as p}from"./textarea-BTMY4_Vo.js";var m=t({Checkbox:()=>x,Input:()=>b,Switch:()=>_,SwitchVisualAid:()=>v,SwitchVisualAidClosed:()=>y,Textarea:()=>S,__namedExportsOrder:()=>C,default:()=>g}),h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),s(),d(),p(),l(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBPopover/Closed Popover Visibility`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},_={args:{id:`popover-closed-visibility-switch`,default:`<DBSwitch>Switch me</DBSwitch
><template v-slot:trigger><DBButton>Switch</DBButton></template>`},render:e=>({components:{DBPopover:c,DBButton:r,DBCheckbox:a,DBInput:o,DBSwitch:u,DBTextarea:f},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},v={args:{id:`popover-closed-visibility-switch-visual-aid`,default:`<DBSwitch :visualAid="true">Switch me</DBSwitch
><template v-slot:trigger><DBButton>Switch Visual Aid</DBButton></template>`},render:e=>({components:{DBPopover:c,DBButton:r,DBCheckbox:a,DBInput:o,DBSwitch:u,DBTextarea:f},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},y={args:{id:`popover-closed-visibility-switch-visual-aid-closed`,open:!1,default:`<DBSwitch :visualAid="true">Switch me</DBSwitch
><template v-slot:trigger
  ><DBButton>Switch Visual Aid Closed</DBButton></template
>`},render:e=>({components:{DBPopover:c,DBButton:r,DBCheckbox:a,DBInput:o,DBSwitch:u,DBTextarea:f},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},b={args:{id:`popover-closed-visibility-input`,default:`<DBInput label="Input" icon="search"></DBInput
><template v-slot:trigger><DBButton>Input</DBButton></template>`},render:e=>({components:{DBPopover:c,DBButton:r,DBCheckbox:a,DBInput:o,DBSwitch:u,DBTextarea:f},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},x={args:{id:`popover-closed-visibility-checkbox`,default:`<DBCheckbox>Check me</DBCheckbox
><template v-slot:trigger><DBButton>Checkbox</DBButton></template>`},render:e=>({components:{DBPopover:c,DBButton:r,DBCheckbox:a,DBInput:o,DBSwitch:u,DBTextarea:f},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},S={args:{id:`popover-closed-visibility-textarea`,default:`<DBTextarea label="Textarea"></DBTextarea
><template v-slot:trigger><DBButton>Textarea</DBButton></template>`},render:e=>({components:{DBPopover:c,DBButton:r,DBCheckbox:a,DBInput:o,DBSwitch:u,DBTextarea:f},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},C=[`Switch`,`SwitchVisualAid`,`SwitchVisualAidClosed`,`Input`,`Checkbox`,`Textarea`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}export{y as a,w as c,v as i,b as n,S as o,_ as r,m as s,x as t};