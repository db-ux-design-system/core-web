import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{D as n,M as r,N as i,t as a}from"./src-U3vAJcA5.js";var o,s,c,l,u,d;e((()=>{a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBAccordion/Variant`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{variant:`divider`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,o.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,o.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(n,{size:`small`,semantic:`informational`,icon:`none`,children:`(Default) Divider`}),(0,o.jsx)(r,{...e})]})},u={args:{variant:`card`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,o.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,o.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(n,{size:`small`,semantic:`informational`,icon:`none`,children:`Card`}),(0,o.jsx)(r,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Divider`,`Card`]}))();export{u as Card,l as Divider,d as __namedExportsOrder,c as default};