import{n as e}from"./iframe-Dj0IrvtL.js";import{n as t,t as n}from"./button-lZp0Q3rm.js";import{n as r,t as i}from"./tooltip-BSlrvb06.js";import{n as a,t as o}from"./custom-select-2ai08i5d.js";import{i as s,n as c,r as l,t as u}from"./dialog-header-BwjZiqov.js";import{n as d,t as f}from"./dialog-footer-D2gyXtxW.js";import{n as p}from"./rolldown-runtime-DkW27tQK.js";var m,h,g,_,v,y,b;function x(){return(x=p((()=>{t(),a(),d(),c(),r(),s(),m=e(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBDialog/Examples`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:h(),onCancel:h()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},_={args:{id:`dialog-events`,open:!1,onClose:h(),onCancel:h(),header:(0,m.jsx)(u,{closeButtonText:`Close`,children:(0,m.jsx)(`h2`,{children:`Events Test`})}),children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(n,{command:`show-modal`,commandfor:`dialog-events`,onClick:e=>setOpenIndex(0),children:`Cancel and close Events in console`}),(0,m.jsx)(l,{...e})]})},v={args:{id:`dialog-events-form`,open:!1,onClose:h(),header:(0,m.jsx)(u,{closeButtonText:`Close`,children:(0,m.jsx)(`h2`,{children:`Submit form in content`})}),footer:(0,m.jsx)(f,{children:(0,m.jsx)(n,{type:`submit`,variant:`brand`,form:`dialog-events-form-content`,children:`Submit`})}),children:(0,m.jsx)(`form`,{id:`dialog-events-form-content`,onSubmit:e=>handleSubmit(e),children:(0,m.jsx)(`p`,{children:`Submitting reaches the form in the dialog content.`})})},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(n,{command:`show-modal`,commandfor:`dialog-events-form`,onClick:e=>setOpenIndex(1),children:`Buttons type dialog event in console`}),(0,m.jsx)(l,{...e})]})},y={args:{id:`dialog-nested-overlays`,open:!1,onClose:h(),header:(0,m.jsx)(u,{closeButtonText:`Close`,children:(0,m.jsx)(`h2`,{children:`Nested overlays`})}),children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:`The tooltip and the custom-select dropdown must line up with their trigger and must not be clipped by the dialog.`}),(0,m.jsxs)(n,{children:[`Hover for a tooltip`,(0,m.jsx)(i,{placement:`top`,id:`dialog-nested-tooltip`,children:`I position against the viewport`})]}),(0,m.jsx)(o,{label:`Pick an option`,listLabel:`dialog-nested-select-list`,options:[{value:`Option 1`,id:`dialog-nested-opt-1`},{value:`Option 2`,id:`dialog-nested-opt-2`},{value:`Option 3`,id:`dialog-nested-opt-3`}]})]})},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(n,{command:`show-modal`,commandfor:`dialog-nested-overlays`,onClick:e=>setOpenIndex(2),children:`Open: Nested overlays`}),(0,m.jsx)(l,{...e})]})},b=[`CloseandCancel`,`Submitformincontent`,`Nestedoverlays`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-events",
    "open": false,
    "onClose": fn(),
    "onCancel": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Events Test</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-events" onClick={event => setOpenIndex(0)}>
                    Cancel and close Events in console
                </DBButton><DBDialog {...properties} /></div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-events-form",
    "open": false,
    "onClose": fn(),
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
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-events-form" onClick={event => setOpenIndex(1)}>
                    Buttons type dialog event in console
                </DBButton><DBDialog {...properties} /></div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-nested-overlays",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Nested overlays</h2>
                        </DBDialogHeader>,
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
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-nested-overlays" onClick={event => setOpenIndex(2)}>
                    Open: Nested overlays
                </DBButton><DBDialog {...properties} /></div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as CloseandCancel,y as Nestedoverlays,v as Submitformincontent,b as __namedExportsOrder,g as default};