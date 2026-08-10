import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-WT8f0fHH.js";import{n as r,t as i}from"./table-D1BP2Qom.js";import{a,t as o}from"./data-CA6wTzZB.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),i(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTable/ShowCaption`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},l={args:{captionPlain:`(Default) False`,data:o,default:``},render:e=>({components:{DBTable:r,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) False
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},u={args:{captionPlain:`True`,data:o,showCaption:!0,default:``},render:e=>({components:{DBTable:r,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) False",
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
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) False
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "True",
    "data": defaultTable,
    "showCaption": true,
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
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`DefaultFalse`,`True`]})))()}f();export{l as DefaultFalse,u as True,d as __namedExportsOrder,c as default};