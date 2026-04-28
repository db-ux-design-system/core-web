import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,_ as n,j as r,t as i}from"./src-IA1wsRkd.js";var a,o,s,c,l,u;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBadge/Content`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`(Default) Text`},render:e=>({components:{DBBadge:r,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},c={args:{default:``},render:e=>({components:{DBBadge:r,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},l={args:{semantic:`critical`,emphasis:`strong`,default:`<DBIcon icon="x_placeholder">Icon - Small</DBIcon>`},render:e=>({components:{DBBadge:r,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`DefaultText`,`DotSmall`,`IconSmall`]}))();export{s as DefaultText,c as DotSmall,l as IconSmall,u as __namedExportsOrder,o as default};