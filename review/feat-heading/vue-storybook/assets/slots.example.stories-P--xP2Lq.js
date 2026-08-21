import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-CGtoBMxh.js";import{n as r,t as i}from"./custom-button-nbnV7jNP.js";import{n as a,t as o}from"./custom-heading-CMDyHzGU.js";import{n as s,t as c}from"./icon-BlsRLFmr.js";var l,u,d,f,p;function m(){return(m=e((()=>{t(),r(),s(),a(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBCustomHeading/Start and end slot`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},d={args:{default:`<h2>Current disruptions</h2
><template v-slot:end-slot
  ><DBBadge semantic="critical" emphasis="strong"> 3 </DBBadge></template
>`},render:e=>({components:{DBCustomHeading:o,DBBadge:n,DBCustomButton:i,DBIcon:c},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},f={args:{default:`<h2>Installation</h2
><template v-slot:start-slot><DBIcon icon="x_placeholder"></DBIcon></template
><template v-slot:end-slot
  ><DBCustomButton variant="ghost" icon="more_vertical" :noText="true"
    ><button type="button">More options</button></DBCustomButton
  ></template
>`},render:e=>({components:{DBCustomHeading:o,DBBadge:n,DBCustomButton:i,DBIcon:c},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Endslotwithabadge`,`Bothslotswithanaction`]})))()}m();export{f as Bothslotswithanaction,d as Endslotwithabadge,p as __namedExportsOrder,u as default};