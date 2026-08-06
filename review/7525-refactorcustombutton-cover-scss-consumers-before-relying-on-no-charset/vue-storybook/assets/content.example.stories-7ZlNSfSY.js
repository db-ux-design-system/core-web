import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-DQzMcdVr.js";import{n as r,t as i}from"./infotext-CVJbPCOq.js";import{n as a,t as o}from"./icon-OSi88PpI.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{a(),r(),t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBadge/Content`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{default:`(Default) Text`},render:e=>({components:{DBBadge:n,DBIcon:o,DBInfotext:i},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},u={args:{default:``},render:e=>({components:{DBBadge:n,DBIcon:o,DBInfotext:i},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},d={args:{semantic:`critical`,emphasis:`strong`,default:`<DBIcon icon="x_placeholder">Icon - Small</DBIcon>`},render:e=>({components:{DBBadge:n,DBIcon:o,DBInfotext:i},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`DefaultText`,`DotSmall`,`IconSmall`]})))()}p();export{l as DefaultText,u as DotSmall,d as IconSmall,f as __namedExportsOrder,c as default};