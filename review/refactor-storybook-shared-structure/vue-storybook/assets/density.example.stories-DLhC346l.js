import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./tab-list-CuuLIdEF.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{a(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabItem/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`}}},l={args:{label:`Functional`,default:``},render:e=>({components:{DBTabItem:n,DBTabList:r},setup(){return{args:e}},template:`<DBTabList data-density="functional"   ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},u={args:{label:`(Default) Regular`,default:``},render:e=>({components:{DBTabItem:n,DBTabList:r},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},d={args:{label:`Expressive`,default:``},render:e=>({components:{DBTabItem:n,DBTabList:r},setup(){return{args:e}},template:`<DBTabList data-density="expressive"   ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Functional",
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
    template: \`<DBTabList data-density="functional"   ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Regular",
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Expressive",
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
    template: \`<DBTabList data-density="expressive"   ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};