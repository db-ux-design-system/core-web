import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-Dq3CKSIp.js";import{n as i,t as a}from"./button-DbGzlNWS.js";import{n as o,t as s}from"./tooltip-CsEwEvTl.js";import{n as c,t as l}from"./custom-select-BMhaoNlh.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./dialog-header-pP97hAkD.js";import{n as g,t as _}from"./icon-Ddm3Ciwz.js";var v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),i(),c(),d(),f(),g(),o(),p(),v=t(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/DBDialog/Examples`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:y(),onCancel:y()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},x={args:{propOverrides:{id:`dialog-events`},onClose:y(),onCancel:y(),header:(0,v.jsx)(h,{closeButtonText:`Close`,children:(0,v.jsx)(`h2`,{children:`Events Test`})}),footer:(0,v.jsxs)(m,{children:[(0,v.jsx)(a,{variant:`ghost`,command:`request-close`,commandfor:`dialog-events`,children:`Cancel`}),(0,v.jsx)(a,{variant:`brand`,command:`request-close`,commandfor:`dialog-events`,children:`Confirm`})]}),children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(a,{command:`show-modal`,commandfor:`dialog-events`,children:`Cancel and close Events in console`}),(0,v.jsx)(u,{...e})]})},S={args:{propOverrides:{id:`dialog-events-form`},header:(0,v.jsx)(h,{closeButtonText:`Close`,children:(0,v.jsx)(`h2`,{children:`Submit form in content`})}),footer:(0,v.jsx)(m,{children:(0,v.jsx)(a,{type:`submit`,variant:`brand`,form:`dialog-events-form-content`,children:`Submit`})}),children:(0,v.jsx)(`form`,{id:`dialog-events-form-content`,onSubmit:e=>handleSubmit(e),children:(0,v.jsx)(`p`,{children:`Submitting reaches the form in the dialog content.`})})},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(a,{command:`show-modal`,commandfor:`dialog-events-form`,children:`Buttons type dialog event in console`}),(0,v.jsx)(u,{...e})]})},C={args:{propOverrides:{id:`dialog-nested-overlays`},header:(0,v.jsx)(h,{closeButtonText:`Close`,children:(0,v.jsx)(`h2`,{children:`Nested overlays`})}),footer:(0,v.jsxs)(m,{children:[(0,v.jsx)(a,{variant:`ghost`,command:`request-close`,commandfor:`dialog-nested-overlays`,children:`Cancel`}),(0,v.jsx)(a,{variant:`brand`,command:`request-close`,commandfor:`dialog-nested-overlays`,children:`Confirm`})]}),children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`p`,{children:`The tooltip and the custom-select dropdown must line up with their trigger and must not be clipped by the dialog.`}),(0,v.jsxs)(a,{children:[`Hover for a tooltip`,(0,v.jsx)(s,{placement:`top`,id:`dialog-nested-tooltip`,children:`I position against the viewport`})]}),(0,v.jsx)(l,{label:`Pick an option`,listLabel:`dialog-nested-select-list`,options:[{value:`Option 1`,id:`dialog-nested-opt-1`},{value:`Option 2`,id:`dialog-nested-opt-2`},{value:`Option 3`,id:`dialog-nested-opt-3`}]})]})},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(a,{command:`show-modal`,commandfor:`dialog-nested-overlays`,children:`Open: Nested overlays`}),(0,v.jsx)(u,{...e})]})},w={args:{propOverrides:{id:`dialog-areas-text`},header:(0,v.jsx)(h,{text:`With text prop`,closeButtonText:`Close`}),footer:(0,v.jsxs)(m,{children:[(0,v.jsx)(a,{variant:`ghost`,command:`request-close`,commandfor:`dialog-areas-text`,children:`Cancel`}),(0,v.jsx)(a,{variant:`brand`,command:`request-close`,commandfor:`dialog-areas-text`,children:`Confirm`})]}),children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(a,{command:`show-modal`,commandfor:`dialog-areas-text`,children:`Open: With text prop`}),(0,v.jsx)(u,{...e})]})},T={args:{propOverrides:{id:`dialog-areas-start`},header:(0,v.jsx)(h,{closeButtonText:`Close`,startSlot:(0,v.jsx)(_,{icon:`person`}),children:(0,v.jsx)(`h2`,{children:`With header start slot`})}),footer:(0,v.jsxs)(m,{children:[(0,v.jsx)(a,{variant:`ghost`,command:`request-close`,commandfor:`dialog-areas-start`,children:`Cancel`}),(0,v.jsx)(a,{variant:`brand`,command:`request-close`,commandfor:`dialog-areas-start`,children:`Confirm`})]}),children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(a,{command:`show-modal`,commandfor:`dialog-areas-start`,children:`Open: With header start slot`}),(0,v.jsx)(u,{...e})]})},E={args:{propOverrides:{id:`dialog-areas-end`},header:(0,v.jsx)(h,{closeButtonText:`Close`,endSlot:(0,v.jsx)(r,{children:`New`}),children:(0,v.jsx)(`h2`,{children:`With header end slot`})}),footer:(0,v.jsxs)(m,{children:[(0,v.jsx)(a,{variant:`ghost`,command:`request-close`,commandfor:`dialog-areas-end`,children:`Cancel`}),(0,v.jsx)(a,{variant:`brand`,command:`request-close`,commandfor:`dialog-areas-end`,children:`Confirm`})]}),children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(a,{command:`show-modal`,commandfor:`dialog-areas-end`,children:`Open: With header end slot`}),(0,v.jsx)(u,{...e})]})},D={args:{propOverrides:{id:`dialog-areas-no-footer`},header:(0,v.jsx)(h,{closeButtonText:`Close`,children:(0,v.jsx)(`h2`,{children:`Without footer`})}),children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(a,{command:`show-modal`,commandfor:`dialog-areas-no-footer`,children:`Open: Without footer`}),(0,v.jsx)(u,{...e})]})},O={args:{propOverrides:{id:`dialog-areas-subtitle`},header:(0,v.jsxs)(h,{className:`showcase-header-top-aligned`,closeButtonText:`Close`,startSlot:(0,v.jsx)(_,{icon:`person`}),children:[(0,v.jsx)(`h2`,{children:`With header subtitle`}),(0,v.jsx)(`span`,{children:`A second line of supporting`})]}),footer:(0,v.jsxs)(m,{children:[(0,v.jsx)(a,{variant:`ghost`,command:`request-close`,commandfor:`dialog-areas-subtitle`,children:`Cancel`}),(0,v.jsx)(a,{variant:`brand`,command:`request-close`,commandfor:`dialog-areas-subtitle`,children:`Confirm`})]}),children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,v.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(a,{command:`show-modal`,commandfor:`dialog-areas-subtitle`,children:`Open: With header subtitle`}),(0,v.jsx)(u,{...e})]})},k=[`CloseandCancel`,`Submitformincontent`,`Nestedoverlays`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withoutfooter`,`Withheadersubtitle`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}}})))()}A();export{x as CloseandCancel,C as Nestedoverlays,S as Submitformincontent,E as Withheaderendslot,T as Withheaderstartslot,O as Withheadersubtitle,D as Withoutfooter,w as Withtextprop,k as __namedExportsOrder,b as default};