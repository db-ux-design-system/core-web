import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-Bzk_MOcW.js";import{n as r,t as i}from"./control-panel-brand-DgYTkWST.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBControlPanelBrand/Variants`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`Functional`},render:e=>({components:{DBControlPanelBrand:i,DBInfotext:n},setup(){return{args:e}},template:`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) With Logo
                </DBInfotext><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},c={args:{"data-logo":`db-systel`,default:``},render:e=>({components:{DBControlPanelBrand:i,DBInfotext:n},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},l={args:{default:`As Link`},render:e=>({components:{DBControlPanelBrand:i,DBInfotext:n},setup(){return{args:e}},template:`<div    ><a href="#"   ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></a></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`Functional\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelBrand,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) With Logo
                </DBInfotext><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-logo": "db-systel",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelBrand,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`As Link\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelBrand,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><a href="#"   ><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></a></div>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`DefaultWithLogo`,`LogoVariant`,`AsLink`]})))()}d();export{l as AsLink,s as DefaultWithLogo,c as LogoVariant,u as __namedExportsOrder,o as default};