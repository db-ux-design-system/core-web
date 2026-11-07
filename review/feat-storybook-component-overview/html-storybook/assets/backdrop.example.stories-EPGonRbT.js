import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-Cd7Pz-Ib.js";import{n as a,t as o}from"./dialog-ChC35A-x.js";import{n as s,t as c}from"./dialog-footer-B8b3EYps.js";import{n as l,t as u}from"./dialog-header-C5vR0M03.js";var d=t({DefaultStrong:()=>h,NoBackdrop:()=>_,Weak:()=>g,__namedExportsOrder:()=>v,default:()=>m}),f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),s(),l(),a(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBDialog/Backdrop`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:p(),onCancel:p()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},h={args:{backdrop:`strong`,propOverrides:{id:`dialog-backdrop-strong`},header:(0,f.jsx)(u,{closeButtonText:`Close`,children:(0,f.jsx)(`h2`,{children:`(Default) Strong`})}),footer:(0,f.jsxs)(c,{children:[(0,f.jsx)(i,{variant:`ghost`,command:`request-close`,commandfor:`dialog-backdrop-strong`,children:`Cancel`}),(0,f.jsx)(i,{variant:`brand`,command:`request-close`,commandfor:`dialog-backdrop-strong`,children:`Confirm`})]}),children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(i,{command:`show-modal`,commandfor:`dialog-backdrop-strong`,children:`Open: (Default) Strong`}),(0,f.jsx)(o,{...e})]})},g={args:{backdrop:`weak`,propOverrides:{id:`dialog-backdrop-weak`},header:(0,f.jsx)(u,{closeButtonText:`Close`,children:(0,f.jsx)(`h2`,{children:`Weak`})}),footer:(0,f.jsxs)(c,{children:[(0,f.jsx)(i,{variant:`ghost`,command:`request-close`,commandfor:`dialog-backdrop-weak`,children:`Cancel`}),(0,f.jsx)(i,{variant:`brand`,command:`request-close`,commandfor:`dialog-backdrop-weak`,children:`Confirm`})]}),children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(i,{command:`show-modal`,commandfor:`dialog-backdrop-weak`,children:`Open: Weak`}),(0,f.jsx)(o,{...e})]})},_={args:{backdrop:`none`,propOverrides:{id:`dialog-backdrop-none`},open:!1,onClose:p(),header:(0,f.jsx)(u,{closeButtonText:`Close`,children:(0,f.jsx)(`h2`,{children:`No Backdrop`})}),footer:(0,f.jsxs)(c,{children:[(0,f.jsx)(i,{variant:`ghost`,command:`request-close`,commandfor:`dialog-backdrop-none`,children:`Cancel`}),(0,f.jsx)(i,{variant:`brand`,command:`request-close`,commandfor:`dialog-backdrop-none`,children:`Confirm`})]}),children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(i,{onClick:e=>setNoBackdropOpen(!0),children:`Open: No Backdrop`}),(0,f.jsx)(o,{...e})]})},v=[`DefaultStrong`,`Weak`,`NoBackdrop`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}export{y as a,d as i,_ as n,g as r,h as t};