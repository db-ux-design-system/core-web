import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-DmJFERDz.js";import{n as i,t as a}from"./control-panel-brand-DrRCiPH_.js";var o=t({AsLink:()=>d,DefaultWithLogo:()=>l,LogoVariant:()=>u,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBControlPanelBrand/Variants`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{default:`Functional`},render:e=>({components:{DBControlPanelBrand:a,DBInfotext:r},setup(){return{args:e}},template:`<div    ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) With Logo
                </DBInfotext><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},u={args:{"data-logo":`db-systel`,default:``},render:e=>({components:{DBControlPanelBrand:a,DBInfotext:r},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},d={args:{default:`As Link`},render:e=>({components:{DBControlPanelBrand:a,DBInfotext:r},setup(){return{args:e}},template:`<div    ><a href="#"   ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></a></div>`})},f=[`DefaultWithLogo`,`LogoVariant`,`AsLink`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{o as a,p as i,l as n,u as r,d as t};