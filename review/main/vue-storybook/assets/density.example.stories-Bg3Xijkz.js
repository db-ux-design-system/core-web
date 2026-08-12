import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-mLLcm2xu.js";import{n as r,t as i}from"./divider-DFlvwfFC.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDivider/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{width:`full`,default:``},render:e=>({components:{DBDivider:i,DBInfotext:n},setup(){return{args:e}},template:`<div data-density="functional" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},c={args:{width:`full`,default:``},render:e=>({components:{DBDivider:i,DBInfotext:n},setup(){return{args:e}},template:`<div data-density="regular" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},l={args:{width:`full`,default:``},render:e=>({components:{DBDivider:i,DBInfotext:n},setup(){return{args:e}},template:`<div data-density="expressive" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBDivider,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="functional" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBDivider,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="regular" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBDivider,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="expressive" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]})))()}d();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};