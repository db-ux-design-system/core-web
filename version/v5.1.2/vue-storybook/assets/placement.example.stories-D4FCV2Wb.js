import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-Di_9SbEC.js";import{n as r,t as i}from"./button-CIRI-koV.js";import{n as a,t as o}from"./infotext-BGeHsxWg.js";import{n as s,t as c}from"./icon-B-1BKrZp.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),s(),a(),t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBadge/Placement`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{size:`small`,emphasis:`strong`,semantic:`critical`,default:`Label`},render:e=>({components:{DBBadge:n,DBButton:i,DBIcon:c,DBInfotext:o},setup(){return{args:e}},template:`<div class="badge-inline-container"   ><span data-icon="x_placeholder"   >(Default) Inline</span><DBBadge v-bind="args"   >${e.default}</DBBadge><DBIcon icon="error"   ></DBIcon></div>`})},f={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-left`,default:``},render:e=>({components:{DBBadge:n,DBButton:i,DBIcon:c,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Top - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Top - Left
                </DBInfotext></div>`})},p={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-left`,default:``},render:e=>({components:{DBBadge:n,DBButton:i,DBIcon:c,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Center - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Center - Left
                </DBInfotext></div>`})},m={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-left`,default:``},render:e=>({components:{DBBadge:n,DBButton:i,DBIcon:c,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Bottom- Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Bottom- Left
                </DBInfotext></div>`})},h={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-right`,default:``},render:e=>({components:{DBBadge:n,DBButton:i,DBIcon:c,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Top - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Top - Right
                </DBInfotext></div>`})},g={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-right`,default:``},render:e=>({components:{DBBadge:n,DBButton:i,DBIcon:c,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Center - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Center - Right
                </DBInfotext></div>`})},_={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-right`,default:``},render:e=>({components:{DBBadge:n,DBButton:i,DBIcon:c,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Bottom- Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Bottom- Right
                </DBInfotext></div>`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`DefaultInline`,`CornerTopLeft`,`CornerCenterLeft`,`CornerBottomLeft`,`CornerTopRight`,`CornerCenterRight`,`CornerBottomRight`]})))()}y();export{m as CornerBottomLeft,_ as CornerBottomRight,p as CornerCenterLeft,g as CornerCenterRight,f as CornerTopLeft,h as CornerTopRight,d as DefaultInline,v as __namedExportsOrder,u as default};