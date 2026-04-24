import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,b as n,t as r}from"./src-C6Gn60iG.js";var i,a,o,s,c,l;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBDivider/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{width:`full`,default:``},render:e=>({components:{DBDivider:n,DBInfotext:t},setup(){return{args:e}},template:`<div data-density="functional" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},s={args:{width:`full`,default:``},render:e=>({components:{DBDivider:n,DBInfotext:t},setup(){return{args:e}},template:`<div data-density="regular" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},c={args:{width:`full`,default:``},render:e=>({components:{DBDivider:n,DBInfotext:t},setup(){return{args:e}},template:`<div data-density="expressive" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    template: \`<div data-density="expressive" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{s as DefaultRegular,c as Expressive,o as Functional,l as __namedExportsOrder,a as default};