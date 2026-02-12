import{_ as n}from"./badge-CzEzPOtp.js";import{_ as t}from"./icon-D-Az7Vp_.js";import{_ as r}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBBadge/Placement",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{size:"small",emphasis:"strong",semantic:"critical",default:"Label"},render:e=>({components:{DBBadge:n,DBButton:r,DBIcon:t},setup(){return{args:e}},template:`<div class="badge-inline-container"   ><span data-icon="x_placeholder"   >(Default) Inline</span><DBBadge v-bind="args"   >${e.default}</DBBadge><DBIcon icon="error"   ></DBIcon></div>`})},o={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-top-left",default:""},render:e=>({components:{DBBadge:n,DBButton:r,DBIcon:t},setup(){return{args:e}},template:`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                Corner - Top - Left
            </DBButton>`})},s={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-center-left",default:""},render:e=>({components:{DBBadge:n,DBButton:r,DBIcon:t},setup(){return{args:e}},template:`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                Corner - Center - Left
            </DBButton>`})},c={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-bottom-left",default:""},render:e=>({components:{DBBadge:n,DBButton:r,DBIcon:t},setup(){return{args:e}},template:`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                Corner - Bottom- Left
            </DBButton>`})},i={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-top-right",default:""},render:e=>({components:{DBBadge:n,DBButton:r,DBIcon:t},setup(){return{args:e}},template:`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                Corner - Top - Right
            </DBButton>`})},l={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-center-right",default:""},render:e=>({components:{DBBadge:n,DBButton:r,DBIcon:t},setup(){return{args:e}},template:`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                Corner - Center - Right
            </DBButton>`})},B={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-bottom-right",default:""},render:e=>({components:{DBBadge:n,DBButton:r,DBIcon:t},setup(){return{args:e}},template:`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                Corner - Bottom- Right
            </DBButton>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "default": \`Label\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBButton,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="badge-inline-container"   ><span data-icon="x_placeholder"   >(Default) Inline</span><DBBadge v-bind="args"   >\${args.default}</DBBadge><DBIcon icon="error"   ></DBIcon></div>\`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-left",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBButton,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                Corner - Top - Left
            </DBButton>\`
  })
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-left",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBButton,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                Corner - Center - Left
            </DBButton>\`
  })
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-left",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBButton,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                Corner - Bottom- Left
            </DBButton>\`
  })
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-right",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBButton,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                Corner - Top - Right
            </DBButton>\`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-right",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBButton,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                Corner - Center - Right
            </DBButton>\`
  })
}`,...l.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-right",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBButton,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"   ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                Corner - Bottom- Right
            </DBButton>\`
  })
}`,...B.parameters?.docs?.source}}};const C=["DefaultInline","CornerTopLeft","CornerCenterLeft","CornerBottomLeft","CornerTopRight","CornerCenterRight","CornerBottomRight"];export{c as CornerBottomLeft,B as CornerBottomRight,s as CornerCenterLeft,l as CornerCenterRight,o as CornerTopLeft,i as CornerTopRight,a as DefaultInline,C as __namedExportsOrder,b as default};
