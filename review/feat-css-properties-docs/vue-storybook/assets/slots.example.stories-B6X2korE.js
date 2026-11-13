import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-BOKRFaN4.js";import{n as i,t as a}from"./drawer-header-CKk0cAVY.js";import{n as o,t as s}from"./icon-CvT7wopt.js";var c=t({Withendslot:()=>d,Withstartslot:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{n(),o(),i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawerHeader/Slots`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`},closeButtonText:{control:`text`},closeButtonId:{control:`text`},id:{control:`text`}}},d={args:{default:`<h2>With end slot</h2
><template v-slot:end-slot><DBBadge>New</DBBadge></template>`},render:e=>({components:{DBDrawerHeader:a,DBBadge:r,DBIcon:s},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},f={args:{default:`<h2>With start slot</h2
><template v-slot:start-slot><DBIcon icon="account"></DBIcon></template>`},render:e=>({components:{DBDrawerHeader:a,DBBadge:r,DBIcon:s},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},p=[`Withendslot`,`Withstartslot`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<h2>With end slot</h2
><template v-slot:end-slot><DBBadge>New</DBBadge></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawerHeader,
      DBBadge,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBDrawerHeader v-bind="args"   >\${args.default}</DBDrawerHeader></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<h2>With start slot</h2
><template v-slot:start-slot><DBIcon icon="account"></DBIcon></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawerHeader,
      DBBadge,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBDrawerHeader v-bind="args"   >\${args.default}</DBDrawerHeader></div>\`
  })
}`,...f.parameters?.docs?.source}}}})))()}export{c as i,f as n,m as r,d as t};