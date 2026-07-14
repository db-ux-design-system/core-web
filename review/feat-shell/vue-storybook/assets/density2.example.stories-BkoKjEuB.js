import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{Ht as t,Rt as n,t as r}from"./src-Duq55lQ1.js";var i,a,o,s,c,l;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBControlPanelBrand/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{"data-density":`functional`,default:``},render:e=>({components:{DBControlPanelBrand:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Functional
                </DBInfotext><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},s={args:{"data-density":`regular`,default:``},render:e=>({components:{DBControlPanelBrand:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},c={args:{"data-density":`expressive`,default:``},render:e=>({components:{DBControlPanelBrand:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Expressive
                </DBInfotext><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
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
                    Functional
                </DBInfotext><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
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
                    (Default) Regular
                </DBInfotext><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
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
                    Expressive
                </DBInfotext><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{s as DefaultRegular,c as Expressive,o as Functional,l as __namedExportsOrder,a as default};