import{_ as e}from"./tag-mPlBKPvT.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./tooltip-bsw76Umn.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTag/Example Strong",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},t={args:{emphasis:"strong",icon:"x_placeholder",behavior:"removable",default:"<button>Interactive Strong Button with Icon</button>"},render:n=>({components:{DBTag:e},setup(){return{args:n}},template:`<DBTag v-bind="args"   >${n.default}</DBTag>`})},a={args:{emphasis:"strong",icon:"x_placeholder",default:'<a href="#">Interactive Strong Link with Icon</a>'},render:n=>({components:{DBTag:e},setup(){return{args:n}},template:`<DBTag v-bind="args"   >${n.default}</DBTag>`})},o={args:{emphasis:"strong",icon:"x_placeholder",default:`<label
  ><input type="checkbox" />
  Interactive Strong Checkbox with Icon
</label>`},render:n=>({components:{DBTag:e},setup(){return{args:n}},template:`<DBTag v-bind="args"   >${n.default}</DBTag>`})},r={args:{emphasis:"strong",icon:"x_placeholder",default:`<label
  ><input type="radio" name="radio03" />
  Interactive Strong Radio 1 with Icon
</label>`},render:n=>({components:{DBTag:e},setup(){return{args:n}},template:`<DBTag v-bind="args"   >${n.default}</DBTag>`})},s={args:{emphasis:"strong",icon:"x_placeholder",default:`<label
  ><input type="radio" name="radio03" />
  Interactive Strong Radio 2 with Icon
</label>`},render:n=>({components:{DBTag:e},setup(){return{args:n}},template:`<DBTag v-bind="args"   >${n.default}</DBTag>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "behavior": "removable",
    "default": \`<button>Interactive Strong Button with Icon</button>\`
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "default": \`<a href="#">Interactive Strong Link with Icon</a>\`
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "default": \`<label
  ><input type="checkbox" />
  Interactive Strong Checkbox with Icon
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "default": \`<label
  ><input type="radio" name="radio03" />
  Interactive Strong Radio 1 with Icon
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "default": \`<label
  ><input type="radio" name="radio03" />
  Interactive Strong Radio 2 with Icon
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
}`,...s.parameters?.docs?.source}}};const v=["InteractiveStrongButtonwithIcon","InteractiveStrongLinkwithIcon","InteractiveStrongCheckboxwithIcon","InteractiveStrongRadio1withIcon","InteractiveStrongRadio2withIcon"];export{t as InteractiveStrongButtonwithIcon,o as InteractiveStrongCheckboxwithIcon,a as InteractiveStrongLinkwithIcon,r as InteractiveStrongRadio1withIcon,s as InteractiveStrongRadio2withIcon,v as __namedExportsOrder,b as default};
