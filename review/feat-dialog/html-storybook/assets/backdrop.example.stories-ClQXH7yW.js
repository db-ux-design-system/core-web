import{n as e}from"./iframe-BIBmFZMp.js";import{n as t,t as n}from"./button-D-ocaA3I.js";import{a as r,i,n as a,o,r as s,t as c}from"./dialog-header-Bsk8E4aS.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g;function _(){return(_=l((()=>{t(),i(),a(),o(),u=e(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDialog/Backdrop`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d(),onCancel:d()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},p={args:{backdrop:`strong`,propOverrides:{id:`dialog-backdrop-strong`},header:(0,u.jsx)(c,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`(Default) Strong`})}),footer:(0,u.jsxs)(s,{children:[(0,u.jsx)(n,{variant:`ghost`,command:`request-close`,commandfor:`dialog-backdrop-strong`,children:`Cancel`}),(0,u.jsx)(n,{variant:`brand`,command:`request-close`,commandfor:`dialog-backdrop-strong`,children:`Confirm`})]}),children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(n,{command:`show-modal`,commandfor:`dialog-backdrop-strong`,children:`Open: (Default) Strong`}),(0,u.jsx)(r,{...e})]})},m={args:{backdrop:`weak`,propOverrides:{id:`dialog-backdrop-weak`},header:(0,u.jsx)(c,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`Weak`})}),footer:(0,u.jsxs)(s,{children:[(0,u.jsx)(n,{variant:`ghost`,command:`request-close`,commandfor:`dialog-backdrop-weak`,children:`Cancel`}),(0,u.jsx)(n,{variant:`brand`,command:`request-close`,commandfor:`dialog-backdrop-weak`,children:`Confirm`})]}),children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(n,{command:`show-modal`,commandfor:`dialog-backdrop-weak`,children:`Open: Weak`}),(0,u.jsx)(r,{...e})]})},h={args:{backdrop:`none`,propOverrides:{id:`dialog-backdrop-none`},open:!1,onClose:d(),header:(0,u.jsx)(c,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`No Backdrop`})}),footer:(0,u.jsxs)(s,{children:[(0,u.jsx)(n,{variant:`ghost`,command:`request-close`,commandfor:`dialog-backdrop-none`,children:`Cancel`}),(0,u.jsx)(n,{variant:`brand`,command:`request-close`,commandfor:`dialog-backdrop-none`,children:`Confirm`})]}),children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,u.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(n,{onClick:e=>setNoBackdropOpen(!0),children:`Open: No Backdrop`}),(0,u.jsx)(r,{...e})]})},g=[`DefaultStrong`,`Weak`,`NoBackdrop`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "propOverrides": {
      id: 'dialog-backdrop-strong'
    },
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>(Default) Strong</h2>
                        </DBDialogHeader>,
    "footer": <DBDialogFooter>
                            <DBButton variant="ghost" command="request-close" commandfor="dialog-backdrop-strong">
                                Cancel
                            </DBButton>
                            <DBButton variant="brand" command="request-close" commandfor="dialog-backdrop-strong">
                                Confirm
                            </DBButton>
                        </DBDialogFooter>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-backdrop-strong">
                    Open: (Default) Strong
                </DBButton><DBDialog {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "weak",
    "propOverrides": {
      id: 'dialog-backdrop-weak'
    },
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Weak</h2>
                        </DBDialogHeader>,
    "footer": <DBDialogFooter>
                            <DBButton variant="ghost" command="request-close" commandfor="dialog-backdrop-weak">
                                Cancel
                            </DBButton>
                            <DBButton variant="brand" command="request-close" commandfor="dialog-backdrop-weak">
                                Confirm
                            </DBButton>
                        </DBDialogFooter>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-backdrop-weak">
                    Open: Weak
                </DBButton><DBDialog {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "propOverrides": {
      id: 'dialog-backdrop-none'
    },
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>No Backdrop</h2>
                        </DBDialogHeader>,
    "footer": <DBDialogFooter>
                            <DBButton variant="ghost" command="request-close" commandfor="dialog-backdrop-none">
                                Cancel
                            </DBButton>
                            <DBButton variant="brand" command="request-close" commandfor="dialog-backdrop-none">
                                Confirm
                            </DBButton>
                        </DBDialogFooter>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton onClick={event => setNoBackdropOpen(true)}>
                    Open: No Backdrop
                </DBButton><DBDialog {...properties} /></div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as DefaultStrong,h as NoBackdrop,m as Weak,g as __namedExportsOrder,f as default};