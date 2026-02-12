import{_ as a}from"./tag-mPlBKPvT.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./tooltip-bsw76Umn.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTag/Behavior",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},n={args:{default:"(Default) Static"},render:e=>({components:{DBTag:a},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},t={args:{behavior:"removable",default:"Removable"},render:e=>({components:{DBTag:a},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},r={args:{default:"<button>Interactive (Button)</button>"},render:e=>({components:{DBTag:a},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},o={args:{default:'<a href="#">Interactive (Link)</a>'},render:e=>({components:{DBTag:a},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},s={args:{default:`<label
  ><input type="checkbox" />
  Interactive (Checkbox)
</label>`},render:e=>({components:{DBTag:a},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},c={args:{default:`<label
  ><input type="radio" name="radio01" />
  Interactive (Radio)
</label>`},render:e=>({components:{DBTag:a},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},l={args:{default:`<label
  ><input type="radio" name="radio01" />
  Interactive Radio 2
</label>`},render:e=>({components:{DBTag:a},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Static\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "removable",
    "default": \`Removable\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<button>Interactive (Button)</button>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#">Interactive (Link)</a>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="checkbox" />
  Interactive (Checkbox)
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="radio" name="radio01" />
  Interactive (Radio)
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="radio" name="radio01" />
  Interactive Radio 2
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...l.parameters?.docs?.source}}};const T=["DefaultStatic","Removable","InteractiveButton","InteractiveLink","InteractiveCheckbox","InteractiveRadio","InteractiveRadio2"];export{n as DefaultStatic,r as InteractiveButton,s as InteractiveCheckbox,o as InteractiveLink,c as InteractiveRadio,l as InteractiveRadio2,t as Removable,T as __namedExportsOrder,D as default};
