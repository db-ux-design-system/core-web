import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./stack-LANnt-yi.js";import{D as o}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBStack/Alignment Row",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","divider"]},gap:{control:"select",options:["none","3x-large","2x-large","x-large","large","medium","small","x-small","2x-small","3x-small"]},direction:{control:"select",options:["row","column"]},wrap:{control:"boolean"},alignment:{control:"select",options:["stretch","start","end","center"]},justifyContent:{control:"select",options:["space-between","start","end","center"]},id:{control:"text"},autofocus:{control:"boolean"}}},s={args:{alignment:"stretch",direction:"row",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",height:"100px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"(Default) Stretch"}),e.jsx(a,{...n})]})},t={args:{alignment:"start",direction:"row",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",height:"100px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"Start"}),e.jsx(a,{...n})]})},r={args:{alignment:"center",direction:"row",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",height:"100px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"Center"}),e.jsx(a,{...n})]})},i={args:{alignment:"end",direction:"row",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",height:"100px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"End"}),e.jsx(a,{...n})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "stretch",
    "direction": "row",
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
    height: '100px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    (Default) Stretch
                </DBInfotext><DBStack {...properties} /></div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "direction": "row",
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
    height: '100px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Start
                </DBInfotext><DBStack {...properties} /></div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "direction": "row",
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
    height: '100px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Center
                </DBInfotext><DBStack {...properties} /></div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "direction": "row",
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
    height: '100px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    End
                </DBInfotext><DBStack {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const h=["DefaultStretch","Start","Center","End"];export{r as Center,s as DefaultStretch,i as End,t as Start,h as __namedExportsOrder,g as default};
