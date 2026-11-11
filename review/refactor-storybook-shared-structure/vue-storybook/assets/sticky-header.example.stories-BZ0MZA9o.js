import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-DWgsTjUQ.js";import{n as i,t as a}from"./table-beUl42Id.js";import{c as o,s}from"./data-DTwDjW8k.js";var c=t({Both:()=>p,BothSpaced:()=>m,DefaultNone:()=>d,Horizontal:()=>h,HorizontalSpaced:()=>g,NoneSpaced:()=>f,Vertical:()=>_,VerticalSpaced:()=>v,__namedExportsOrder:()=>y,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),a(),s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Sticky Header`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{captionPlain:`(Default) None`,data:o,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) None
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},f={args:{variant:`spaced`,captionPlain:`None Spaced`,data:o,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    None Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},p={args:{captionPlain:`Both`,stickyHeader:`both`,data:o,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Both
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},m={args:{variant:`spaced`,captionPlain:`Both Spaced`,stickyHeader:`both`,data:o,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Both Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},h={args:{stickyHeader:`horizontal`,captionPlain:`Horizontal`,data:o,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Horizontal
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},g={args:{variant:`spaced`,stickyHeader:`horizontal`,captionPlain:`Horizontal Spaced`,data:o,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Horizontal Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},_={args:{stickyHeader:`vertical`,captionPlain:`Vertical`,data:o,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Vertical
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},v={args:{variant:`spaced`,stickyHeader:`vertical`,captionPlain:`Vertical Spaced`,data:o,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Vertical Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},y=[`DefaultNone`,`NoneSpaced`,`Both`,`BothSpaced`,`Horizontal`,`HorizontalSpaced`,`Vertical`,`VerticalSpaced`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) None",
    "data": overflowTable,
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
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) None
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "None Spaced",
    "data": overflowTable,
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
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    None Spaced
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Both",
    "stickyHeader": "both",
    "data": overflowTable,
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
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Both
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "Both Spaced",
    "stickyHeader": "both",
    "data": overflowTable,
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
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Both Spaced
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "horizontal",
    "captionPlain": "Horizontal",
    "data": overflowTable,
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
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Horizontal
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "stickyHeader": "horizontal",
    "captionPlain": "Horizontal Spaced",
    "data": overflowTable,
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
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Horizontal Spaced
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "vertical",
    "captionPlain": "Vertical",
    "data": overflowTable,
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
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Vertical
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "stickyHeader": "vertical",
    "captionPlain": "Vertical Spaced",
    "data": overflowTable,
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
  display: 'block',
  textAlign: 'center',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Vertical Spaced
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...v.parameters?.docs?.source}}}})))()}export{g as a,v as c,h as i,b as l,m as n,f as o,d as r,_ as s,p as t,c as u};