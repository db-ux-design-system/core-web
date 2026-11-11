import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-D2D6-vWC.js";import{n as i,t as a}from"./infotext-DNBAwHgm.js";import{n as o,t as s}from"./icon-DONy6D05.js";var c=t({DefaultText:()=>d,DotSmall:()=>f,IconSmall:()=>p,__namedExportsOrder:()=>m,default:()=>u}),l,u,d,f,p,m;function h(){return(h=e((()=>{o(),i(),n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBadge/Content`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{default:`(Default) Text`},render:e=>({components:{DBBadge:r,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},f={args:{default:``},render:e=>({components:{DBBadge:r,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},p={args:{semantic:`critical`,emphasis:`strong`,default:`<DBIcon icon="x_placeholder">Icon - Small</DBIcon>`},render:e=>({components:{DBBadge:r,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},m=[`DefaultText`,`DotSmall`,`IconSmall`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Text\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong",
    "default": \`<DBIcon icon="x_placeholder">Icon - Small</DBIcon>\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,c as i,f as n,u as o,p as r,d as t};