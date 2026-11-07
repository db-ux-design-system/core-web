import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-HiccZljf.js";import{n as a,t as o}from"./dialog-ChC35A-x.js";import{n as s,t as c}from"./dialog-header-DqK5JkgF.js";var l=t({DialogInteraction1:()=>m,DialogInteraction2:()=>h,DialogInteraction3:()=>g,DialogInteraction4:()=>_,DialogInteraction5:()=>v,Interaction:()=>p,__namedExportsOrder:()=>y,default:()=>f}),u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),s(),a(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDialog/Interaction`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d(),onCancel:d()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},p={args:{propOverrides:{id:`interaction-dialog-text`},header:(0,u.jsx)(c,{text:`Title`}),children:(0,u.jsx)(`span`,{"data-testid":`text-content`,children:`Test`})},render:e=>(0,u.jsxs)(`div`,{"data-testid":`text-dialog`,children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`interaction-dialog-text`,children:`Open: text and heading`}),(0,u.jsx)(o,{...e})]})},m={args:{"aria-labelledby":`consumer-label`,propOverrides:{id:`interaction-dialog-labelledby`},header:(0,u.jsx)(c,{text:`Title`}),children:(0,u.jsx)(`span`,{children:`Test`})},render:e=>(0,u.jsxs)(`div`,{"data-testid":`labelledby-dialog`,children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`interaction-dialog-labelledby`,children:`Open: aria-labelledby composition`}),(0,u.jsx)(o,{...e})]})},h={args:{propOverrides:{id:`interaction-dialog-header-id`},header:(0,u.jsx)(c,{id:`interaction-my-header`,text:`Title`}),children:(0,u.jsx)(`span`,{children:`Test`})},render:e=>(0,u.jsxs)(`div`,{"data-testid":`header-id-dialog`,children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`interaction-dialog-header-id`,children:`Open: derived heading id`}),(0,u.jsx)(o,{...e})]})},g={args:{"aria-label":`Consumer name`,propOverrides:{id:`interaction-dialog-aria-label`},header:(0,u.jsx)(c,{text:`Title`}),children:(0,u.jsx)(`span`,{children:`Test`})},render:e=>(0,u.jsxs)(`div`,{"data-testid":`aria-label-dialog`,children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`interaction-dialog-aria-label`,children:`Open: aria-label override`}),(0,u.jsx)(o,{...e})]})},_={args:{propOverrides:{id:`interaction-dialog-commandfor`},header:(0,u.jsx)(c,{text:`Title`}),children:(0,u.jsx)(`span`,{children:`Test`})},render:e=>(0,u.jsxs)(`div`,{"data-testid":`commandfor-dialog`,children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`interaction-dialog-commandfor`,children:`Open: close button commandfor`}),(0,u.jsx)(o,{...e})]})},v={args:{propOverrides:{id:`interaction-dialog-events`},onClose:d(),onCancel:d(),onClick:d(),header:(0,u.jsx)(c,{text:`Title`}),children:(0,u.jsx)(`span`,{"data-testid":`events-content`,children:`Test`})},render:e=>(0,u.jsxs)(`div`,{"data-testid":`events-dialog`,children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`interaction-dialog-events`,children:`Open: events`}),(0,u.jsx)(o,{...e}),`close: 0cancel: 0click: 0`]})},y=[`Interaction`,`DialogInteraction1`,`DialogInteraction2`,`DialogInteraction3`,`DialogInteraction4`,`DialogInteraction5`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}})))()}export{v as a,l as c,_ as i,h as n,p as o,g as r,b as s,m as t};