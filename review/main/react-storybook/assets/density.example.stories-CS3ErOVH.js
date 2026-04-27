import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{D as n,M as r,N as i,t as a}from"./src-Dg0IbgPT.js";var o,s,c,l,u,d,f;e((()=>{a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBAccordion/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,o.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,o.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{"data-density":`functional`,children:[(0,o.jsx)(n,{size:`small`,semantic:`informational`,icon:`none`,children:`Functional`}),(0,o.jsx)(r,{...e})]})},u={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,o.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,o.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{"data-density":`regular`,children:[(0,o.jsx)(n,{size:`small`,semantic:`informational`,icon:`none`,children:`(Default) Regular`}),(0,o.jsx)(r,{...e})]})},d={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{headlinePlain:`Item 1`,children:`Content 1`}),(0,o.jsx)(i,{headlinePlain:`Item 2`,children:`Content 2`}),(0,o.jsx)(i,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{"data-density":`expressive`,children:[(0,o.jsx)(n,{size:`small`,semantic:`informational`,icon:`none`,children:`Expressive`}),(0,o.jsx)(r,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Functional`,`Regular`,`Expressive`]}))();export{d as Expressive,l as Functional,u as Regular,f as __namedExportsOrder,c as default};