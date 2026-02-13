import{_ as e}from"./badge-C_pHzJZG.js";import{_ as t}from"./infotext-fAUKZdVL.js";import{_ as o}from"./icon-0mls5vVL.js";import{_ as r}from"./button-iJle6MaW.js";import"./iframe-YOpS_vkW.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-nMDAkmV1.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBBadge/Placement",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{size:"small",emphasis:"strong",semantic:"critical",default:"Label"},render:n=>({components:{DBBadge:e,DBButton:r,DBIcon:o,DBInfotext:t},setup(){return{args:n}},template:`<div class="badge-inline-container"   ><span data-icon="x_placeholder"   >(Default) Inline</span><DBBadge v-bind="args"   >${n.default}</DBBadge><DBIcon icon="error"   ></DBIcon></div>`})},s={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-top-left",default:""},render:n=>({components:{DBBadge:e,DBButton:r,DBIcon:o,DBInfotext:t},setup(){return{args:n}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${n.default}</DBBadge>
                    Corner - Top - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Top - Left
                </DBInfotext></div>`})},i={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-center-left",default:""},render:n=>({components:{DBBadge:e,DBButton:r,DBIcon:o,DBInfotext:t},setup(){return{args:n}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${n.default}</DBBadge>
                    Corner - Center - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Center - Left
                </DBInfotext></div>`})},c={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-bottom-left",default:""},render:n=>({components:{DBBadge:e,DBButton:r,DBIcon:o,DBInfotext:t},setup(){return{args:n}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${n.default}</DBBadge>
                    Corner - Bottom- Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Bottom- Left
                </DBInfotext></div>`})},B={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-top-right",default:""},render:n=>({components:{DBBadge:e,DBButton:r,DBIcon:o,DBInfotext:t},setup(){return{args:n}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${n.default}</DBBadge>
                    Corner - Top - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Top - Right
                </DBInfotext></div>`})},l={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-center-right",default:""},render:n=>({components:{DBBadge:e,DBButton:r,DBIcon:o,DBInfotext:t},setup(){return{args:n}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${n.default}</DBBadge>
                    Corner - Center - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Center - Right
                </DBInfotext></div>`})},d={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-bottom-right",default:""},render:n=>({components:{DBBadge:e,DBButton:r,DBIcon:o,DBInfotext:t},setup(){return{args:n}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${n.default}</DBBadge>
                    Corner - Bottom- Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Bottom- Right
                </DBInfotext></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="badge-inline-container"   ><span data-icon="x_placeholder"   >(Default) Inline</span><DBBadge v-bind="args"   >\${args.default}</DBBadge><DBIcon icon="error"   ></DBIcon></div>\`
  })
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                    Corner - Top - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Top - Left
                </DBInfotext></div>\`
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                    Corner - Center - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Center - Left
                </DBInfotext></div>\`
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                    Corner - Bottom- Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Bottom- Left
                </DBInfotext></div>\`
  })
}`,...c.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                    Corner - Top - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Top - Right
                </DBInfotext></div>\`
  })
}`,...B.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                    Corner - Center - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Center - Right
                </DBInfotext></div>\`
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >\${args.default}</DBBadge>
                    Corner - Bottom- Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Bottom- Right
                </DBInfotext></div>\`
  })
}`,...d.parameters?.docs?.source}}};const C=["DefaultInline","CornerTopLeft","CornerCenterLeft","CornerBottomLeft","CornerTopRight","CornerCenterRight","CornerBottomRight"];export{c as CornerBottomLeft,d as CornerBottomRight,i as CornerCenterLeft,l as CornerCenterRight,s as CornerTopLeft,B as CornerTopRight,a as DefaultInline,C as __namedExportsOrder,v as default};
