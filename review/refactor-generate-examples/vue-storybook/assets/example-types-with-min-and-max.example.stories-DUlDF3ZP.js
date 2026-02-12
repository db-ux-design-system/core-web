import{_ as n}from"./input-DCt77RAB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBInput/Example - Types with min and max",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},minLength:{control:"number"},maxLength:{control:"number"},type:{control:"select",options:["color","date","datetime-local","email","file","hidden","month","number","password","range","search","tel","text","time","url","week"]},min:{control:"text"},max:{control:"text"},step:{control:"text"},dataList:{control:"object"},dataListId:{control:"text"},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},pattern:{control:"text"},accept:{control:"text"},multiple:{control:"boolean"},enterkeyhint:{control:"select",options:["enter","done","go","next","previous","search","send"]},inputmode:{control:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},autocomplete:{control:"text"},messageIcon:{control:"text"},messageSize:{control:"select",options:["small","medium"]},validMessageSize:{control:"select",options:["small","medium"]},invalidMessageSize:{control:"select",options:["small","medium"]},fieldSizing:{control:"select",options:["fixed","content"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Label",placeholder:"(Default) Text",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},a={args:{label:"Label",type:"password",placeholder:"Password",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},r={args:{label:"Label",type:"search",placeholder:"Search",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},o={args:{label:"Label",type:"email",placeholder:"E-Mail",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},l={args:{label:"Label",type:"tel",placeholder:"Tel",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},s={args:{label:"Label",type:"url",placeholder:"URL",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},p={args:{label:"Label",type:"date",min:"2023-01-01",max:"2030-12-31",placeholder:"Date",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},u={args:{label:"Label",type:"datetime-local",min:"2023-01-01T00:00",max:"2030-12-31T23:59",placeholder:"Datetime Local",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},c={args:{label:"Label",type:"month",min:"2023-01",max:"2030-12",placeholder:"Month",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},d={args:{label:"Label",type:"time",min:"00:00",max:"23:59",placeholder:"Time",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},m={args:{label:"Label",type:"week",min:"2023-W01",max:"2030-W52",placeholder:"Week",default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
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
    "min": "2023-01-01",
    "max": "2030-12-31",
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
    "min": "2023-01-01T00:00",
    "max": "2030-12-31T23:59",
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
    "min": "2023-01",
    "max": "2030-12",
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
    "min": "00:00",
    "max": "23:59",
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "week",
    "min": "2023-W01",
    "max": "2030-W52",
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
}`,...m.parameters?.docs?.source}}};const y=["DefaultText","Password","Search","EMail","Tel","URL","Date","DatetimeLocal","Month","Time","Week"];export{p as Date,u as DatetimeLocal,t as DefaultText,o as EMail,c as Month,a as Password,r as Search,l as Tel,d as Time,s as URL,m as Week,y as __namedExportsOrder,x as default};
