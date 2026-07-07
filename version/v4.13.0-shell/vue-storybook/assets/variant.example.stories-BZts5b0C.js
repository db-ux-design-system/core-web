import{i as e}from"./preload-helper-BfXGMw9-.js";import{It as t,Mt as n,t as r}from"./src-D7kPOHCd.js";var i,a,o,s,c,l;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBControlPanelBrand/Variants`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{default:``},render:e=>({components:{DBControlPanelBrand:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) With Logo
                </DBInfotext><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},s={args:{"data-logo":`db-systel`,default:``},render:e=>({components:{DBControlPanelBrand:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Logo Variant
                </DBInfotext><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},c={args:{default:`<a href="#">Home</a>`},render:e=>({components:{DBControlPanelBrand:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    As Link
                </DBInfotext><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
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
    template: \`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) With Logo
                </DBInfotext><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    template: \`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Logo Variant
                </DBInfotext><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#">Home</a>\`
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
                    As Link
                </DBInfotext><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`DefaultWithLogo`,`LogoVariant`,`AsLink`]}))();export{c as AsLink,o as DefaultWithLogo,s as LogoVariant,l as __namedExportsOrder,a as default};