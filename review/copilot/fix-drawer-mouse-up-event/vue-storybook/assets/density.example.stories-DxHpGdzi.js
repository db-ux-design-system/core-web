import{i as e}from"./preload-helper-aO_JuOA3.js";import{ft as t,s as n,t as r}from"./src-ClWTRa6R.js";import{a as i,t as a}from"./data-ByKoj2qL.js";var o,s,c,l,u,d;e((()=>{r(),i(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTable/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},c={args:{"data-density":`functional`,captionPlain:`Functional`,data:a,default:``},render:e=>({components:{DBTable:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Functional
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},l={args:{"data-density":`regular`,captionPlain:`(Default) Regular`,data:a,default:``},render:e=>({components:{DBTable:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},u={args:{"data-density":`expressive`,captionPlain:`Expressive`,data:a,default:``},render:e=>({components:{DBTable:n,DBInfotext:t},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Expressive
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "captionPlain": "Functional",
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
                    Functional
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "captionPlain": "(Default) Regular",
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
                    (Default) Regular
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "captionPlain": "Expressive",
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
                    Expressive
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`Functional`,`Regular`,`Expressive`]}))();export{u as Expressive,c as Functional,l as Regular,d as __namedExportsOrder,s as default};