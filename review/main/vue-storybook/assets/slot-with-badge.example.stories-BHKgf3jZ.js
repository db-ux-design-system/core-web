import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-BghvIZd5.js";import{i,n as a,r as o,t as s}from"./tab-list-BR7wmIdc.js";var c=t({MessageswithBadge:()=>d,NotificationswithBadge:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{n(),s(),o(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabItem/Slot with Badge`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`}}},d={args:{label:`Messages`,default:`<DBBadge semantic="informational">134</DBBadge>`},render:e=>({components:{DBTabItem:i,DBBadge:r,DBTabList:a},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},f={args:{label:`Notifications`,default:`<DBBadge semantic="neutral">433</DBBadge>`},render:e=>({components:{DBTabItem:i,DBBadge:r,DBTabList:a},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},p=[`MessageswithBadge`,`NotificationswithBadge`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Messages",
    "default": \`<DBBadge semantic="informational">134</DBBadge>\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBBadge,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Notifications",
    "default": \`<DBBadge semantic="neutral">433</DBBadge>\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBBadge,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...f.parameters?.docs?.source}}}})))()}export{c as i,f as n,m as r,d as t};