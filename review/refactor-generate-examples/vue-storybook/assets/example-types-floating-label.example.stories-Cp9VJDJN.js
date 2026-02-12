import{_ as n}from"./input-DCt77RAB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:L}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBInput/Example - Types - Floating Label",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},minLength:{control:"number"},maxLength:{control:"number"},type:{control:"select",options:["color","date","datetime-local","email","file","hidden","month","number","password","range","search","tel","text","time","url","week"]},min:{control:"text"},max:{control:"text"},step:{control:"text"},dataList:{control:"object"},dataListId:{control:"text"},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},pattern:{control:"text"},accept:{control:"text"},multiple:{control:"boolean"},enterkeyhint:{control:"select",options:["enter","done","go","next","previous","search","send"]},inputmode:{control:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},autocomplete:{control:"text"},messageIcon:{control:"text"},messageSize:{control:"select",options:["small","medium"]},validMessageSize:{control:"select",options:["small","medium"]},invalidMessageSize:{control:"select",options:["small","medium"]},fieldSizing:{control:"select",options:["fixed","content"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Label",variant:"floating",placeholder:"(Default) Text",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},a={args:{label:"Label",type:"password",variant:"floating",placeholder:"Password",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},r={args:{label:"Label",type:"search",variant:"floating",placeholder:"Search",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},o={args:{label:"Label",type:"email",variant:"floating",placeholder:"E-Mail",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},l={args:{label:"Label",type:"tel",variant:"floating",placeholder:"Tel",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},s={args:{label:"Label",type:"url",variant:"floating",placeholder:"URL",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},p={args:{label:"Label",type:"date",variant:"floating",placeholder:"Date",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},u={args:{label:"Label",type:"datetime-local",variant:"floating",placeholder:"Datetime Local",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},c={args:{label:"Label",type:"month",variant:"floating",placeholder:"Month",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},d={args:{label:"Label",type:"time",variant:"floating",placeholder:"Time",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},i={args:{label:"Label",type:"week",variant:"floating",placeholder:"Week",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},m={args:{label:"Label",variant:"floating",placeholder:"Datalist",dataList:["Test 1","Test 2"],default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},g={args:{label:"Label",type:"file",variant:"floating",placeholder:"File",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Text",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "password",
    "variant": "floating",
    "placeholder": "Password",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "search",
    "variant": "floating",
    "placeholder": "Search",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "email",
    "variant": "floating",
    "placeholder": "E-Mail",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "tel",
    "variant": "floating",
    "placeholder": "Tel",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "url",
    "variant": "floating",
    "placeholder": "URL",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "date",
    "variant": "floating",
    "placeholder": "Date",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "datetime-local",
    "variant": "floating",
    "placeholder": "Datetime Local",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "month",
    "variant": "floating",
    "placeholder": "Month",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "time",
    "variant": "floating",
    "placeholder": "Time",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "week",
    "variant": "floating",
    "placeholder": "Week",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "Datalist",
    "dataList": ['Test 1', 'Test 2'],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "file",
    "variant": "floating",
    "placeholder": "File",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...g.parameters?.docs?.source}}};const x=["DefaultText","Password","Search","EMail","Tel","URL","Date","DatetimeLocal","Month","Time","Week","Datalist","File"];export{m as Datalist,p as Date,u as DatetimeLocal,t as DefaultText,o as EMail,g as File,c as Month,a as Password,r as Search,l as Tel,d as Time,s as URL,i as Week,x as __namedExportsOrder,y as default};
