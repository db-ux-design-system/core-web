import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./accordion-item-QK5Jobs2.js";import{n as a,t as o}from"./accordion-tZPpdK0z.js";import{n as s,t as c}from"./infotext-DWUtRaHE.js";var l=t({Multiple:()=>p,Single:()=>m,__namedExportsOrder:()=>h,default:()=>f}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),s(),a(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBAccordion/Behavior`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{behavior:`multiple`,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,u.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,u.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`(Default) Multiple`}),(0,u.jsx)(o,{...e})]})},m={args:{behavior:`single`,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,u.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,u.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`Single`}),(0,u.jsx)(o,{...e})]})},h=[`Multiple`,`Single`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "multiple",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div><DBInfotext size="small" semantic="informational" icon="none">
                    (Default) Multiple
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "single",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div><DBInfotext size="small" semantic="informational" icon="none">
                    Single
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...m.parameters?.docs?.source}}}})))()}export{g as i,m as n,l as r,p as t};