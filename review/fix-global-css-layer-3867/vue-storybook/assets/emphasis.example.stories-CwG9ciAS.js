import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-okKkuLs-.js";import{n as r,t as i}from"./divider-qfSer_1v.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDivider/Emphasis`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{width:`full`,default:``},render:e=>({components:{DBDivider:i,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Weak
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},c={args:{emphasis:`strong`,width:`full`,default:``},render:e=>({components:{DBDivider:i,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Strong
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
    template: \`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Weak
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`DefaultWeak`,`Strong`]})))()}u();export{s as DefaultWeak,c as Strong,l as __namedExportsOrder,o as default};