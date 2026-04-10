import{n as e}from"./chunk-BneVvdWh.js";import{D as t,_ as n,j as r,k as i,t as a}from"./src-CHVqXqQZ.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBadge/Placement`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{size:`small`,emphasis:`strong`,semantic:`critical`,default:`Label`},render:e=>({components:{DBBadge:r,DBButton:i,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div class="badge-inline-container"   ><span data-icon="x_placeholder"   >(Default) Inline</span><DBBadge v-bind="args"   >${e.default}</DBBadge><DBIcon icon="error"   ></DBIcon></div>`})},l={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-left`,default:``},render:e=>({components:{DBBadge:r,DBButton:i,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Top - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Top - Left
                </DBInfotext></div>`})},u={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-left`,default:``},render:e=>({components:{DBBadge:r,DBButton:i,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Center - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Center - Left
                </DBInfotext></div>`})},d={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-left`,default:``},render:e=>({components:{DBBadge:r,DBButton:i,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Bottom- Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Bottom- Left
                </DBInfotext></div>`})},f={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-right`,default:``},render:e=>({components:{DBBadge:r,DBButton:i,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Top - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Top - Right
                </DBInfotext></div>`})},p={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-right`,default:``},render:e=>({components:{DBBadge:r,DBButton:i,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Center - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Center - Right
                </DBInfotext></div>`})},m={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-right`,default:``},render:e=>({components:{DBBadge:r,DBButton:i,DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" :noText="true"  ><DBBadge v-bind="args"   >${e.default}</DBBadge>
                    Corner - Bottom- Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none"   >
                    Corner - Bottom- Right
                </DBInfotext></div>`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`DefaultInline`,`CornerTopLeft`,`CornerCenterLeft`,`CornerBottomLeft`,`CornerTopRight`,`CornerCenterRight`,`CornerBottomRight`]}))();export{d as CornerBottomLeft,m as CornerBottomRight,u as CornerCenterLeft,p as CornerCenterRight,l as CornerTopLeft,f as CornerTopRight,c as DefaultInline,h as __namedExportsOrder,s as default};