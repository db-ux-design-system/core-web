import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-BrLL_gwP.js";import{n as i,t as a}from"./divider-DeNa7Aqy.js";var o=t({DefaultWeak:()=>l,Strong:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDivider/Emphasis`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{width:`full`,default:``},render:e=>({components:{DBDivider:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Weak
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},u={args:{emphasis:`strong`,width:`full`,default:``},render:e=>({components:{DBDivider:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Strong
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},d=[`DefaultWeak`,`Strong`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
                    (Default) Weak
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Strong
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,o as r,l as t};