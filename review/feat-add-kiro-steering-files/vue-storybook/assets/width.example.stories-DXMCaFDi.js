import{i as e}from"./preload-helper-CtQb1xDs.js";import{ft as t,s as n,t as r}from"./src-DpNkPUzX.js";import{a as i,t as a}from"./data-_lRaHWwJ.js";var o,s,c,l,u;e((()=>{r(),i(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTable/Width`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},c={args:{width:`full`,captionPlain:`(Default) Full`,data:a,default:``},render:e=>({components:{DBTable:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Full
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},l={args:{width:`auto`,captionPlain:`Auto`,data:a,default:``},render:e=>({components:{DBTable:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Auto
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "captionPlain": "(Default) Full",
    "data": defaultTable,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Full
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "captionPlain": "Auto",
    "data": defaultTable,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Auto
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`DefaultFull`,`Auto`]}))();export{l as Auto,c as DefaultFull,u as __namedExportsOrder,s as default};