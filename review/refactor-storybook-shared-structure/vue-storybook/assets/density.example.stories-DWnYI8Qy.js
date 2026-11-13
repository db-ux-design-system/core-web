import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-CnZj_xRa.js";import{n as i,t as a}from"./divider-DoGgRti7.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDivider/Density`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{width:`full`,default:``},render:e=>({components:{DBDivider:a,DBInfotext:r},setup(){return{args:e}},template:`<div data-density="functional" :style="{
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},u={args:{width:`full`,default:``},render:e=>({components:{DBDivider:a,DBInfotext:r},setup(){return{args:e}},template:`<div data-density="regular" :style="{
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},d={args:{width:`full`,default:``},render:e=>({components:{DBDivider:a,DBInfotext:r},setup(){return{args:e}},template:`<div data-density="expressive" :style="{
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  width: '200px',
  height: '200px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};