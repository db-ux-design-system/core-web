import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-C7oEarRC.js";import{n as i,t as a}from"./custom-button-DnhdJM1P.js";import{n as o,t as s}from"./custom-heading-4SixtiaG.js";import{n as c,t as l}from"./icon-DTw7uab-.js";var u=t({Bothslotswithanaction:()=>m,Endslotwithabadge:()=>p,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),c(),o(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBCustomHeading/Start and end slot`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},p={args:{default:`<h2>Current disruptions</h2
><template v-slot:end-slot
  ><DBBadge semantic="critical" emphasis="strong"> 3 </DBBadge></template
>`},render:e=>({components:{DBCustomHeading:s,DBBadge:r,DBCustomButton:a,DBIcon:l},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},m={args:{default:`<h2>Installation</h2
><template v-slot:start-slot><DBIcon icon="x_placeholder"></DBIcon></template
><template v-slot:end-slot
  ><DBCustomButton variant="ghost" icon="more_vertical" :noText="true"
    ><button type="button">More options</button></DBCustomButton
  ></template
>`},render:e=>({components:{DBCustomHeading:s,DBBadge:r,DBCustomButton:a,DBIcon:l},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},h=[`Endslotwithabadge`,`Bothslotswithanaction`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<h2>Current disruptions</h2
><template v-slot:end-slot
  ><DBBadge semantic="critical" emphasis="strong"> 3 </DBBadge></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomHeading,
      DBBadge,
      DBCustomButton,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<h2>Installation</h2
><template v-slot:start-slot><DBIcon icon="x_placeholder"></DBIcon></template
><template v-slot:end-slot
  ><DBCustomButton variant="ghost" icon="more_vertical" :noText="true"
    ><button type="button">More options</button></DBCustomButton
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomHeading,
      DBBadge,
      DBCustomButton,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...m.parameters?.docs?.source}}}})))()}export{u as i,p as n,g as r,m as t};