import{n as e}from"./iframe-DkZpK5gF.js";import{n as t,t as n}from"./button-7VFJzHUQ.js";import{i as r,n as i,r as a,t as o}from"./dialog-header-U_r2Iv4w.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=s((()=>{t(),i(),r(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDialog/Interaction`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{propOverrides:{id:`interaction-dialog-text`},header:(0,c.jsx)(o,{text:`Title`}),children:(0,c.jsx)(`span`,{"data-testid":`text-content`,children:`Test`})},render:e=>(0,c.jsxs)(`div`,{"data-testid":`text-dialog`,children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`interaction-dialog-text`,children:`Open: text and heading`}),(0,c.jsx)(a,{...e})]})},f={args:{"aria-labelledby":`consumer-label`,propOverrides:{id:`interaction-dialog-labelledby`},header:(0,c.jsx)(o,{text:`Title`}),children:(0,c.jsx)(`span`,{children:`Test`})},render:e=>(0,c.jsxs)(`div`,{"data-testid":`labelledby-dialog`,children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`interaction-dialog-labelledby`,children:`Open: aria-labelledby composition`}),(0,c.jsx)(a,{...e})]})},p={args:{propOverrides:{id:`interaction-dialog-header-id`},header:(0,c.jsx)(o,{id:`interaction-my-header`,text:`Title`}),children:(0,c.jsx)(`span`,{children:`Test`})},render:e=>(0,c.jsxs)(`div`,{"data-testid":`header-id-dialog`,children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`interaction-dialog-header-id`,children:`Open: derived heading id`}),(0,c.jsx)(a,{...e})]})},m={args:{"aria-label":`Consumer name`,propOverrides:{id:`interaction-dialog-aria-label`},header:(0,c.jsx)(o,{text:`Title`}),children:(0,c.jsx)(`span`,{children:`Test`})},render:e=>(0,c.jsxs)(`div`,{"data-testid":`aria-label-dialog`,children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`interaction-dialog-aria-label`,children:`Open: aria-label override`}),(0,c.jsx)(a,{...e})]})},h={args:{propOverrides:{id:`interaction-dialog-commandfor`},header:(0,c.jsx)(o,{text:`Title`}),children:(0,c.jsx)(`span`,{children:`Test`})},render:e=>(0,c.jsxs)(`div`,{"data-testid":`commandfor-dialog`,children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`interaction-dialog-commandfor`,children:`Open: close button commandfor`}),(0,c.jsx)(a,{...e})]})},g={args:{propOverrides:{id:`interaction-dialog-events`},onClose:l(),onCancel:l(),onClick:l(),header:(0,c.jsx)(o,{text:`Title`}),children:(0,c.jsx)(`span`,{"data-testid":`events-content`,children:`Test`})},render:e=>(0,c.jsxs)(`div`,{"data-testid":`events-dialog`,children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`interaction-dialog-events`,children:`Open: events`}),(0,c.jsx)(a,{...e}),`close: 0cancel: 0click: 0`]})},_=[`Interaction`,`DialogInteraction1`,`DialogInteraction2`,`DialogInteraction3`,`DialogInteraction4`,`DialogInteraction5`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-text'
    },
    "header": <DBDialogHeader text="Title" />,
    "children": <span data-testid="text-content">Test</span>
  },
  render: (properties: any) => <div data-testid="text-dialog"><DBButton command="show-modal" commandfor="interaction-dialog-text">
                    Open: text and heading
                </DBButton><DBDialog {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "consumer-label",
    "propOverrides": {
      id: 'interaction-dialog-labelledby'
    },
    "header": <DBDialogHeader text="Title" />,
    "children": <span>Test</span>
  },
  render: (properties: any) => <div data-testid="labelledby-dialog"><DBButton command="show-modal" commandfor="interaction-dialog-labelledby">
                    Open: aria-labelledby composition
                </DBButton><DBDialog {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-header-id'
    },
    "header": <DBDialogHeader id="interaction-my-header" text="Title" />,
    "children": <span>Test</span>
  },
  render: (properties: any) => <div data-testid="header-id-dialog"><DBButton command="show-modal" commandfor="interaction-dialog-header-id">
                    Open: derived heading id
                </DBButton><DBDialog {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Consumer name",
    "propOverrides": {
      id: 'interaction-dialog-aria-label'
    },
    "header": <DBDialogHeader text="Title" />,
    "children": <span>Test</span>
  },
  render: (properties: any) => <div data-testid="aria-label-dialog"><DBButton command="show-modal" commandfor="interaction-dialog-aria-label">
                    Open: aria-label override
                </DBButton><DBDialog {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-commandfor'
    },
    "header": <DBDialogHeader text="Title" />,
    "children": <span>Test</span>
  },
  render: (properties: any) => <div data-testid="commandfor-dialog"><DBButton command="show-modal" commandfor="interaction-dialog-commandfor">
                    Open: close button commandfor
                </DBButton><DBDialog {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'interaction-dialog-events'
    },
    "onClose": fn(),
    "onCancel": fn(),
    "onClick": fn(),
    "header": <DBDialogHeader text="Title" />,
    "children": <span data-testid="events-content">Test</span>
  },
  render: (properties: any) => <div data-testid="events-dialog"><DBButton command="show-modal" commandfor="interaction-dialog-events">
                    Open: events
                </DBButton><DBDialog {...properties} />close: 0cancel: 0click: 0</div>
}`,...g.parameters?.docs?.source}}}})))()}v();export{f as DialogInteraction1,p as DialogInteraction2,m as DialogInteraction3,h as DialogInteraction4,g as DialogInteraction5,d as Interaction,_ as __namedExportsOrder,u as default};