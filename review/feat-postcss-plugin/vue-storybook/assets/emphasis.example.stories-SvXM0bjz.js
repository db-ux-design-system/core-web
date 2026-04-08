import{n as e}from"./chunk-BneVvdWh.js";import{D as t,b as n,t as r}from"./src-BQlAOnTN.js";var i,a,o,s,c;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBDivider/Emphasis`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{width:`full`,default:``},render:e=>({components:{DBDivider:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Weak
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},s={args:{emphasis:`strong`,width:`full`,default:``},render:e=>({components:{DBDivider:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Strong
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
    template: \`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Weak
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
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
    template: \`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Strong
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`DefaultWeak`,`Strong`]}))();export{o as DefaultWeak,s as Strong,c as __namedExportsOrder,a as default};