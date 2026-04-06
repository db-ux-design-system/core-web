import{_ as t,a as o}from"./tab-list-Dvp7QESV.js";import"./iframe-B_8YGBdU.js";import"./preload-helper-COvGWKxX.js";import"./index-CggTMVtt.js";import"./form-components-K9dL8jr8.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTabItem/Show Icon Trailing",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"(Default) False",icon:"x_placeholder",iconTrailing:"x_placeholder",showIcon:!1,showIconTrailing:!1,default:""},render:e=>({components:{DBTabItem:o,DBTabList:t},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},n={args:{label:"True",icon:"x_placeholder",iconTrailing:"x_placeholder",showIcon:!0,showIconTrailing:!0,default:""},render:e=>({components:{DBTabItem:o,DBTabList:t},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "icon": "x_placeholder",
    "iconTrailing": "x_placeholder",
    "showIcon": false,
    "showIconTrailing": false,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "icon": "x_placeholder",
    "iconTrailing": "x_placeholder",
    "showIcon": true,
    "showIconTrailing": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...n.parameters?.docs?.source}}};const m=["DefaultFalse","True"];export{a as DefaultFalse,n as True,m as __namedExportsOrder,b as default};
