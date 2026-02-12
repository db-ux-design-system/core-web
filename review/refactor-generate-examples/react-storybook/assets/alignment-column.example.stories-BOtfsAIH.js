import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./stack-LANnt-yi.js";import{D as o}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBStack/Alignment Column",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","divider"]},gap:{control:"select",options:["none","3x-large","2x-large","x-large","large","medium","small","x-small","2x-small","3x-small"]},direction:{control:"select",options:["row","column"]},wrap:{control:"boolean"},alignment:{control:"select",options:["stretch","start","end","center"]},justifyContent:{control:"select",options:["space-between","start","end","center"]},id:{control:"text"},autofocus:{control:"boolean"}}},s={args:{alignment:"stretch",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:a=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"(Default) Stretch"}),e.jsx(n,{...a})]})},t={args:{alignment:"start",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:a=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"Start"}),e.jsx(n,{...a})]})},r={args:{alignment:"center",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:a=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"Center"}),e.jsx(n,{...a})]})},i={args:{alignment:"end",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:a=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"End"}),e.jsx(n,{...a})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "stretch",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    (Default) Stretch
                </DBInfotext><DBStack {...properties} /></div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Start
                </DBInfotext><DBStack {...properties} /></div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Center
                </DBInfotext><DBStack {...properties} /></div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    End
                </DBInfotext><DBStack {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const h=["DefaultStretch","Start","Center","End"];export{r as Center,s as DefaultStretch,i as End,t as Start,h as __namedExportsOrder,g as default};
