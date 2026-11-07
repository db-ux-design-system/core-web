import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./accordion-item-BR7t_Ydv.js";import{n as a,t as o}from"./accordion-Czvea6hC.js";import{n as s,t as c}from"./infotext-BzIHEy3h.js";var l=t({Expressive:()=>h,Functional:()=>p,Regular:()=>m,__namedExportsOrder:()=>g,default:()=>f}),u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),s(),a(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBAccordion/Density`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,u.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,u.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,u.jsxs)(`div`,{"data-density":`functional`,children:[(0,u.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`Functional`}),(0,u.jsx)(o,{...e})]})},m={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,u.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,u.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,u.jsxs)(`div`,{"data-density":`regular`,children:[(0,u.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`(Default) Regular`}),(0,u.jsx)(o,{...e})]})},h={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,u.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,u.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,u.jsxs)(`div`,{"data-density":`expressive`,children:[(0,u.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`Expressive`}),(0,u.jsx)(o,{...e})]})},g=[`Functional`,`Regular`,`Expressive`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div data-density="functional"><DBInfotext size="small" semantic="informational" icon="none">
                    Functional
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div data-density="regular"><DBInfotext size="small" semantic="informational" icon="none">
                    (Default) Regular
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div data-density="expressive"><DBInfotext size="small" semantic="informational" icon="none">
                    Expressive
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...h.parameters?.docs?.source}}}})))()}export{_ as a,l as i,p as n,m as r,h as t};