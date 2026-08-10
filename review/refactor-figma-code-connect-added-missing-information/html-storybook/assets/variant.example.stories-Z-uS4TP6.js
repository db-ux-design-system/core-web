import{n as e}from"./iframe-DiGpxR6U.js";import{n as t,t as n}from"./accordion-item-CA2Eix-d.js";import{n as r,t as i}from"./accordion-C00Uwe6e.js";import{n as a,t as o}from"./infotext-DtkEUiVC.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p;function m(){return(m=s((()=>{t(),a(),r(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBAccordion/Variant`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{variant:`divider`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{headlinePlain:`Item 1`,children:`Content 1`}),(0,c.jsx)(n,{headlinePlain:`Item 2`,children:`Content 2`}),(0,c.jsx)(n,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(o,{size:`small`,semantic:`informational`,icon:`none`,children:`(Default) Divider`}),(0,c.jsx)(i,{...e})]})},f={args:{variant:`card`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{headlinePlain:`Item 1`,children:`Content 1`}),(0,c.jsx)(n,{headlinePlain:`Item 2`,children:`Content 2`}),(0,c.jsx)(n,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(o,{size:`small`,semantic:`informational`,icon:`none`,children:`Card`}),(0,c.jsx)(i,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "divider",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div><DBInfotext size="small" semantic="informational" icon="none">
                    (Default) Divider
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "card",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div><DBInfotext size="small" semantic="informational" icon="none">
                    Card
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`Divider`,`Card`]})))()}m();export{f as Card,d as Divider,p as __namedExportsOrder,u as default};