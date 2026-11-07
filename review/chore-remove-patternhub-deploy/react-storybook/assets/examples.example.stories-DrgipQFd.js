import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./badge-d0YH_xk8.js";import{n as a,t as o}from"./tooltip-w7zRrU-p.js";import{n as s,t as c}from"./button-KkPyUB9O.js";import{n as l,t as u}from"./custom-select-Dq357rpT.js";import{i as d,n as f,r as p,t as m}from"./dialog-header-syw4sAzN.js";import{n as h,t as g}from"./dialog-footer-BwIZtvPI.js";import{n as _,t as v}from"./icon-D9ZKuCeO.js";var y=t({CloseandCancel:()=>C,Nestedoverlays:()=>T,Submitformincontent:()=>w,Withheaderendslot:()=>O,Withheaderstartslot:()=>D,Withheadersubtitle:()=>A,Withoutfooter:()=>k,Withtextprop:()=>E,__namedExportsOrder:()=>j,default:()=>S}),b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{r(),s(),l(),h(),f(),_(),a(),d(),b=n(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/DBDialog/Examples`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:x(),onCancel:x()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},C={args:{propOverrides:{id:`dialog-events`},onClose:x(),onCancel:x(),header:(0,b.jsx)(m,{closeButtonText:`Close`,children:(0,b.jsx)(`h2`,{children:`Events Test`})}),footer:(0,b.jsxs)(g,{children:[(0,b.jsx)(c,{variant:`ghost`,command:`request-close`,commandfor:`dialog-events`,children:`Cancel`}),(0,b.jsx)(c,{variant:`brand`,command:`request-close`,commandfor:`dialog-events`,children:`Confirm`})]}),children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{command:`show-modal`,commandfor:`dialog-events`,children:`Cancel and close Events in console`}),(0,b.jsx)(p,{...e})]})},w={args:{propOverrides:{id:`dialog-events-form`},header:(0,b.jsx)(m,{closeButtonText:`Close`,children:(0,b.jsx)(`h2`,{children:`Submit form in content`})}),footer:(0,b.jsx)(g,{children:(0,b.jsx)(c,{type:`submit`,variant:`brand`,form:`dialog-events-form-content`,children:`Submit`})}),children:(0,b.jsx)(`form`,{id:`dialog-events-form-content`,onSubmit:e=>handleSubmit(e),children:(0,b.jsx)(`p`,{children:`Submitting reaches the form in the dialog content.`})})},render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{command:`show-modal`,commandfor:`dialog-events-form`,children:`Buttons type dialog event in console`}),(0,b.jsx)(p,{...e})]})},T={args:{propOverrides:{id:`dialog-nested-overlays`},header:(0,b.jsx)(m,{closeButtonText:`Close`,children:(0,b.jsx)(`h2`,{children:`Nested overlays`})}),footer:(0,b.jsxs)(g,{children:[(0,b.jsx)(c,{variant:`ghost`,command:`request-close`,commandfor:`dialog-nested-overlays`,children:`Cancel`}),(0,b.jsx)(c,{variant:`brand`,command:`request-close`,commandfor:`dialog-nested-overlays`,children:`Confirm`})]}),children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`The tooltip and the custom-select dropdown must line up with their trigger and must not be clipped by the dialog.`}),(0,b.jsxs)(c,{children:[`Hover for a tooltip`,(0,b.jsx)(o,{placement:`top`,id:`dialog-nested-tooltip`,children:`I position against the viewport`})]}),(0,b.jsx)(u,{label:`Pick an option`,listLabel:`dialog-nested-select-list`,options:[{value:`Option 1`,id:`dialog-nested-opt-1`},{value:`Option 2`,id:`dialog-nested-opt-2`},{value:`Option 3`,id:`dialog-nested-opt-3`}]})]})},render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{command:`show-modal`,commandfor:`dialog-nested-overlays`,children:`Open: Nested overlays`}),(0,b.jsx)(p,{...e})]})},E={args:{propOverrides:{id:`dialog-areas-text`},header:(0,b.jsx)(m,{text:`With text prop`,closeButtonText:`Close`}),footer:(0,b.jsxs)(g,{children:[(0,b.jsx)(c,{variant:`ghost`,command:`request-close`,commandfor:`dialog-areas-text`,children:`Cancel`}),(0,b.jsx)(c,{variant:`brand`,command:`request-close`,commandfor:`dialog-areas-text`,children:`Confirm`})]}),children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{command:`show-modal`,commandfor:`dialog-areas-text`,children:`Open: With text prop`}),(0,b.jsx)(p,{...e})]})},D={args:{propOverrides:{id:`dialog-areas-start`},header:(0,b.jsx)(m,{closeButtonText:`Close`,startSlot:(0,b.jsx)(v,{icon:`person`}),children:(0,b.jsx)(`h2`,{children:`With header start slot`})}),footer:(0,b.jsxs)(g,{children:[(0,b.jsx)(c,{variant:`ghost`,command:`request-close`,commandfor:`dialog-areas-start`,children:`Cancel`}),(0,b.jsx)(c,{variant:`brand`,command:`request-close`,commandfor:`dialog-areas-start`,children:`Confirm`})]}),children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{command:`show-modal`,commandfor:`dialog-areas-start`,children:`Open: With header start slot`}),(0,b.jsx)(p,{...e})]})},O={args:{propOverrides:{id:`dialog-areas-end`},header:(0,b.jsx)(m,{closeButtonText:`Close`,endSlot:(0,b.jsx)(i,{children:`New`}),children:(0,b.jsx)(`h2`,{children:`With header end slot`})}),footer:(0,b.jsxs)(g,{children:[(0,b.jsx)(c,{variant:`ghost`,command:`request-close`,commandfor:`dialog-areas-end`,children:`Cancel`}),(0,b.jsx)(c,{variant:`brand`,command:`request-close`,commandfor:`dialog-areas-end`,children:`Confirm`})]}),children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{command:`show-modal`,commandfor:`dialog-areas-end`,children:`Open: With header end slot`}),(0,b.jsx)(p,{...e})]})},k={args:{propOverrides:{id:`dialog-areas-no-footer`},header:(0,b.jsx)(m,{closeButtonText:`Close`,children:(0,b.jsx)(`h2`,{children:`Without footer`})}),children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{command:`show-modal`,commandfor:`dialog-areas-no-footer`,children:`Open: Without footer`}),(0,b.jsx)(p,{...e})]})},A={args:{propOverrides:{id:`dialog-areas-subtitle`},header:(0,b.jsxs)(m,{className:`showcase-header-top-aligned`,closeButtonText:`Close`,startSlot:(0,b.jsx)(v,{icon:`person`}),children:[(0,b.jsx)(`h2`,{children:`With header subtitle`}),(0,b.jsx)(`span`,{children:`A second line of supporting`})]}),footer:(0,b.jsxs)(g,{children:[(0,b.jsx)(c,{variant:`ghost`,command:`request-close`,commandfor:`dialog-areas-subtitle`,children:`Cancel`}),(0,b.jsx)(c,{variant:`brand`,command:`request-close`,commandfor:`dialog-areas-subtitle`,children:`Confirm`})]}),children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,b.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{command:`show-modal`,commandfor:`dialog-areas-subtitle`,children:`Open: With header subtitle`}),(0,b.jsx)(p,{...e})]})},j=[`CloseandCancel`,`Submitformincontent`,`Nestedoverlays`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withoutfooter`,`Withheadersubtitle`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-events'
    },
    "onClose": fn(),
    "onCancel": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Events Test</h2>
                        </DBDialogHeader>,
    "footer": <DBDialogFooter>
                            <DBButton variant="ghost" command="request-close" commandfor="dialog-events">
                                Cancel
                            </DBButton>
                            <DBButton variant="brand" command="request-close" commandfor="dialog-events">
                                Confirm
                            </DBButton>
                        </DBDialogFooter>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-events">
                    Cancel and close Events in console
                </DBButton><DBDialog {...properties} /></div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-events-form'
    },
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Submit form in content</h2>
                        </DBDialogHeader>,
    "footer": <DBDialogFooter>
                            {/*
                             * The submit button sits in the footer, outside the
                             * form, and is wired to the form in the content via
                             * the \`form\` attribute referencing the form \`id\`.
                             */}
                            <DBButton type="submit" variant="brand" form="dialog-events-form-content">
                                Submit
                            </DBButton>
                        </DBDialogFooter>,
    "children": <form id="dialog-events-form-content" onSubmit={event => handleSubmit(event)}><p>
                            Submitting reaches the form in the dialog content.
                        </p></form>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-events-form">
                    Buttons type dialog event in console
                </DBButton><DBDialog {...properties} /></div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-nested-overlays'
    },
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Nested overlays</h2>
                        </DBDialogHeader>,
    "footer": <DBDialogFooter>
                            <DBButton variant="ghost" command="request-close" commandfor="dialog-nested-overlays">
                                Cancel
                            </DBButton>
                            <DBButton variant="brand" command="request-close" commandfor="dialog-nested-overlays">
                                Confirm
                            </DBButton>
                        </DBDialogFooter>,
    "children": <><p>
                        The tooltip and the custom-select dropdown must line up
                        with their trigger and must not be clipped by the
                        dialog.
                    </p><DBButton>
                        Hover for a tooltip
                        <DBTooltip placement="top" id="dialog-nested-tooltip">
                            I position against the viewport
                        </DBTooltip></DBButton><DBCustomSelect label="Pick an option" listLabel="dialog-nested-select-list" options={[{
        value: 'Option 1',
        id: 'dialog-nested-opt-1'
      }, {
        value: 'Option 2',
        id: 'dialog-nested-opt-2'
      }, {
        value: 'Option 3',
        id: 'dialog-nested-opt-3'
      }]} /></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-nested-overlays">
                    Open: Nested overlays
                </DBButton><DBDialog {...properties} /></div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-text'
    },
    "header": <DBDialogHeader text="With text prop" closeButtonText="Close" />,
    "footer": <DBDialogFooter>
                            <DBButton variant="ghost" command="request-close" commandfor="dialog-areas-text">
                                Cancel
                            </DBButton>
                            <DBButton variant="brand" command="request-close" commandfor="dialog-areas-text">
                                Confirm
                            </DBButton>
                        </DBDialogFooter>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-areas-text">
                    Open: With text prop
                </DBButton><DBDialog {...properties} /></div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-start'
    },
    "header": <DBDialogHeader closeButtonText="Close" startSlot={<DBIcon icon="person" />}>
                            <h2>With header start slot</h2>
                        </DBDialogHeader>,
    "footer": <DBDialogFooter>
                            <DBButton variant="ghost" command="request-close" commandfor="dialog-areas-start">
                                Cancel
                            </DBButton>
                            <DBButton variant="brand" command="request-close" commandfor="dialog-areas-start">
                                Confirm
                            </DBButton>
                        </DBDialogFooter>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-areas-start">
                    Open: With header start slot
                </DBButton><DBDialog {...properties} /></div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-end'
    },
    "header": <DBDialogHeader closeButtonText="Close" endSlot={<DBBadge>New</DBBadge>}>
                            <h2>With header end slot</h2>
                        </DBDialogHeader>,
    "footer": <DBDialogFooter>
                            <DBButton variant="ghost" command="request-close" commandfor="dialog-areas-end">
                                Cancel
                            </DBButton>
                            <DBButton variant="brand" command="request-close" commandfor="dialog-areas-end">
                                Confirm
                            </DBButton>
                        </DBDialogFooter>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-areas-end">
                    Open: With header end slot
                </DBButton><DBDialog {...properties} /></div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-no-footer'
    },
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Without footer</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-areas-no-footer">
                    Open: Without footer
                </DBButton><DBDialog {...properties} /></div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-subtitle'
    },
    "header": <DBDialogHeader className="showcase-header-top-aligned" closeButtonText="Close" startSlot={<DBIcon icon="person" />}>
                            <h2>With header subtitle</h2>
                            <span>A second line of supporting</span>
                        </DBDialogHeader>,
    "footer": <DBDialogFooter>
                            <DBButton variant="ghost" command="request-close" commandfor="dialog-areas-subtitle">
                                Cancel
                            </DBButton>
                            <DBButton variant="brand" command="request-close" commandfor="dialog-areas-subtitle">
                                Confirm
                            </DBButton>
                        </DBDialogFooter>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-areas-subtitle">
                    Open: With header subtitle
                </DBButton><DBDialog {...properties} /></div>
}`,...A.parameters?.docs?.source}}}})))()}export{D as a,E as c,O as i,y as l,T as n,A as o,w as r,k as s,C as t,M as u};