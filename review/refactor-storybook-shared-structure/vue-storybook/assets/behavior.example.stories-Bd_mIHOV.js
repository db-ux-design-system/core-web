import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./tab-list-BdNoTDVN.js";var o=t({DefaultAutoWidth:()=>l,Widthfull:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{a(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabItem/Behavior`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`}}},l={args:{label:`(Default) Auto Width`,default:``},render:e=>({components:{DBTabItem:n,DBTabList:r},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},u={args:{label:`Width full`,default:``},render:e=>({components:{DBTabItem:n,DBTabList:r},setup(){return{args:e}},template:`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},d=[`DefaultAutoWidth`,`Widthfull`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Auto Width",
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Width full",
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
    template: \`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,o as r,l as t};