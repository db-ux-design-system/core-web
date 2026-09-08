import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-CmbTulbT.js";import{i,n as a,r as o,t as s}from"./dialog-header-hsFlPhvX.js";import{n as c,t as l}from"./dialog-footer-Cz8dogfs.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),c(),a(),i(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDialog/JS Events on console`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d(),onCancel:d()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},p={args:{id:`dialog-events`,open:!1,onClose:d(),onCancel:d(),header:(0,u.jsx)(s,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`Events Test`})}),children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(r,{command:`show-modal`,commandfor:`dialog-events`,onClick:e=>setOpen(!0),children:`Open Dialog`}),(0,u.jsx)(o,{...e})]})},m={args:{id:`dialog-events-form`,open:!1,onClose:d(),header:(0,u.jsx)(s,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`Submit form in content`})}),footer:(0,u.jsx)(l,{children:(0,u.jsx)(r,{type:`submit`,variant:`brand`,form:`dialog-events-form-content`,children:`Submit`})}),children:(0,u.jsx)(`form`,{id:`dialog-events-form-content`,onSubmit:e=>handleSubmit(e),children:(0,u.jsx)(`p`,{children:`Submitting reaches the form in the dialog content.`})})},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(r,{command:`show-modal`,commandfor:`dialog-events-form`,onClick:e=>setOpenForm(!0),children:`Open Dialog`}),(0,u.jsx)(o,{...e})]})},h=[`CloseandCancel`,`Submitformincontent`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-events" onClick={event => setOpen(true)}>
                    Open Dialog
                </DBButton><DBDialog {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-events-form" onClick={event => setOpenForm(true)}>
                    Open Dialog
                </DBButton><DBDialog {...properties} /></div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as CloseandCancel,m as Submitformincontent,h as __namedExportsOrder,f as default};