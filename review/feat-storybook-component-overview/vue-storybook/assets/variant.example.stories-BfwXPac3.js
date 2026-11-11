import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-DLg9aPpW.js";import{n as i,t as a}from"./divider-OcCteQHB.js";var o=t({AdaptiveVertical:()=>u,DefaultAdaptiveHorizontal:()=>l,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDivider/Variant`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{width:`full`,default:``},render:e=>({components:{DBDivider:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Adaptive - Horizontal
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},u={args:{variant:`vertical`,width:`full`,default:``},render:e=>({components:{DBDivider:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  height: '100px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Adaptive - Vertical
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},d=[`DefaultAdaptiveHorizontal`,`AdaptiveVertical`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Adaptive - Horizontal
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "vertical",
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
  height: '100px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Adaptive - Vertical
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{o as a,c as i,l as n,f as r,u as t};