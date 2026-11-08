import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-BPKio8UX.js";import{i,n as a,r as o,t as s}from"./dialog-header-B1C7H-su.js";var c=t({DialogInteraction1:()=>f,DialogInteraction2:()=>p,DialogInteraction3:()=>m,DialogInteraction4:()=>h,DialogInteraction5:()=>g,Interaction:()=>d,__namedExportsOrder:()=>_,default:()=>u}),l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),a(),i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDialog/Interaction`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{propOverrides:{id:`interaction-dialog-text`},default:`<span data-testid="text-content">Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:o,DBButton:r,DBDialogHeader:s},setup(){return{args:e}},template:`<div data-testid="text-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-text"   >
                    Open: text and heading
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},f={args:{"aria-labelledby":`consumer-label`,propOverrides:{id:`interaction-dialog-labelledby`},default:`<span>Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:o,DBButton:r,DBDialogHeader:s},setup(){return{args:e}},template:`<div data-testid="labelledby-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-labelledby"   >
                    Open: aria-labelledby composition
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},p={args:{propOverrides:{id:`interaction-dialog-header-id`},default:`<span>Test</span
><template v-slot:header
  ><DBDialogHeader id="interaction-my-header" text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:o,DBButton:r,DBDialogHeader:s},setup(){return{args:e}},template:`<div data-testid="header-id-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-header-id"   >
                    Open: derived heading id
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},m={args:{"aria-label":`Consumer name`,propOverrides:{id:`interaction-dialog-aria-label`},default:`<span>Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:o,DBButton:r,DBDialogHeader:s},setup(){return{args:e}},template:`<div data-testid="aria-label-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-aria-label"   >
                    Open: aria-label override
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},h={args:{propOverrides:{id:`interaction-dialog-commandfor`},default:`<span>Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:o,DBButton:r,DBDialogHeader:s},setup(){return{args:e}},template:`<div data-testid="commandfor-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-commandfor"   >
                    Open: close button commandfor
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},g={args:{propOverrides:{id:`interaction-dialog-events`},onClose:l(),onCancel:l(),onClick:l(),default:`<span data-testid="events-content">Test</span
><template v-slot:header
  ><DBDialogHeader text="Title"></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:o,DBButton:r,DBDialogHeader:s},setup(){return{args:e}},template:`<div data-testid="events-dialog"   ><DBButton command="show-modal" commandfor="interaction-dialog-events"   >
                    Open: events
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog>close: 0cancel: 0click: 0</div>`})},_=[`Interaction`,`DialogInteraction1`,`DialogInteraction2`,`DialogInteraction3`,`DialogInteraction4`,`DialogInteraction5`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}export{g as a,c,h as i,p as n,d as o,m as r,v as s,f as t};