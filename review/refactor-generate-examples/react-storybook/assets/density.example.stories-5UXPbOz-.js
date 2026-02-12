import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./stack-LANnt-yi.js";import{D as o}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBStack/Density",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","divider"]},gap:{control:"select",options:["none","3x-large","2x-large","x-large","large","medium","small","x-small","2x-small","3x-small"]},direction:{control:"select",options:["row","column"]},wrap:{control:"boolean"},alignment:{control:"select",options:["stretch","start","end","center"]},justifyContent:{control:"select",options:["space-between","start","end","center"]},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{"data-density":"functional",style:{padding:"var(--db-spacing-fixed-xs)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{"data-density":"functional",style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"Functional"}),e.jsx(i,{...n})]})},s={args:{"data-density":"regular",style:{padding:"var(--db-spacing-fixed-xs)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"(Default) Regular"}),e.jsx(i,{...n})]})},t={args:{"data-density":"expressive",style:{padding:"var(--db-spacing-fixed-xs)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{"data-density":"expressive",style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:[e.jsx(o,{size:"small",icon:"none",semantic:"informational",children:"Expressive"}),e.jsx(i,{...n})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div data-density="functional" style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Functional
                </DBInfotext><DBStack {...properties} /></div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
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
                    (Default) Regular
                </DBInfotext><DBStack {...properties} /></div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div data-density="expressive" style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Expressive
                </DBInfotext><DBStack {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{s as DefaultRegular,t as Expressive,a as Functional,g as __namedExportsOrder,f as default};
