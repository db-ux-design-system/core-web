import{i as e}from"./preload-helper-BPaw4Svr.js";import{t}from"./jsx-runtime-D23nRf6i.js";import{St as n,ft as r,t as i,wt as a}from"./src-BlHnuTtR.js";var o,s,c,l,u,d;e((()=>{i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBAccordion/Behavior`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{behavior:`multiple`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{headlinePlain:`Item 1`,children:`Content 1`}),(0,o.jsx)(a,{headlinePlain:`Item 2`,children:`Content 2`}),(0,o.jsx)(a,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(r,{size:`small`,semantic:`informational`,icon:`none`,children:`(Default) Multiple`}),(0,o.jsx)(n,{...e})]})},u={args:{behavior:`single`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{headlinePlain:`Item 1`,children:`Content 1`}),(0,o.jsx)(a,{headlinePlain:`Item 2`,children:`Content 2`}),(0,o.jsx)(a,{headlinePlain:`Item 3`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(r,{size:`small`,semantic:`informational`,icon:`none`,children:`Single`}),(0,o.jsx)(n,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Multiple`,`Single`]}))();export{l as Multiple,u as Single,d as __namedExportsOrder,c as default};