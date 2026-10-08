import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-BuqE0Psb.js";import{i as r,n as i,r as a,t as o}from"./dialog-header-2IoJs0Ne.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDialog/Interaction`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s(),onCancel:s()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},l={args:{propOverrides:{id:`interaction-dialog-text`},default:`<span data-testid="text-content">Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogHeader:o},setup(){return{args:e}},template:`<div data-testid="text-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-text"   >
                    Open: text and heading
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},u={args:{"aria-labelledby":`consumer-label`,propOverrides:{id:`interaction-dialog-labelledby`},default:`<span>Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogHeader:o},setup(){return{args:e}},template:`<div data-testid="labelledby-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-labelledby"   >
                    Open: aria-labelledby composition
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},d={args:{propOverrides:{id:`interaction-dialog-header-id`},default:`<span>Test</span
><template v-slot:header
  ><DBDialogHeader id="interaction-my-header" text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogHeader:o},setup(){return{args:e}},template:`<div data-testid="header-id-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-header-id"   >
                    Open: derived heading id
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},f={args:{"aria-label":`Consumer name`,propOverrides:{id:`interaction-dialog-aria-label`},default:`<span>Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogHeader:o},setup(){return{args:e}},template:`<div data-testid="aria-label-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-aria-label"   >
                    Open: aria-label override
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},p={args:{propOverrides:{id:`interaction-dialog-commandfor`},default:`<span>Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogHeader:o},setup(){return{args:e}},template:`<div data-testid="commandfor-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-commandfor"   >
                    Open: close button commandfor
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},m={args:{propOverrides:{id:`interaction-dialog-events`},onClose:s(),onCancel:s(),onClick:s(),default:`<span data-testid="events-content">Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogHeader:o},setup(){return{args:e}},template:`<div data-testid="events-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-events"   >
                    Open: events
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog>close: 0cancel: 0click: 0</div>`})},h=[`Interaction`,`DialogInteraction1`,`DialogInteraction2`,`DialogInteraction3`,`DialogInteraction4`,`DialogInteraction5`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-text'
    },
    "default": \`<span data-testid="text-content">Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="text-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-text"   >
                    Open: text and heading
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "consumer-label",
    "propOverrides": {
      id: 'interaction-dialog-labelledby'
    },
    "default": \`<span>Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="labelledby-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-labelledby"   >
                    Open: aria-labelledby composition
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-header-id'
    },
    "default": \`<span>Test</span
><template v-slot:header
  ><DBDialogHeader id="interaction-my-header" text="Title"></DBDialogHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="header-id-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-header-id"   >
                    Open: derived heading id
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Consumer name",
    "propOverrides": {
      id: 'interaction-dialog-aria-label'
    },
    "default": \`<span>Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="aria-label-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-aria-label"   >
                    Open: aria-label override
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-commandfor'
    },
    "default": \`<span>Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="commandfor-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-commandfor"   >
                    Open: close button commandfor
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-events'
    },
    "onClose": fn(),
    "onCancel": fn(),
    "onClick": fn(),
    "default": \`<span data-testid="events-content">Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="events-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-events"   >
                    Open: events
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog>close: 0cancel: 0click: 0</div>\`
  })
}`,...m.parameters?.docs?.source}}}})))()}g();export{u as DialogInteraction1,d as DialogInteraction2,f as DialogInteraction3,p as DialogInteraction4,m as DialogInteraction5,l as Interaction,h as __namedExportsOrder,c as default};