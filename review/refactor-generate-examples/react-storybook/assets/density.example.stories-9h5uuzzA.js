import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./section-3e8okUz6.js";import{D as i}from"./card-D9SKJ6GV.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSection/Density",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},width:{control:"select",options:["full","medium","large","small"]},spacing:{control:"select",options:["medium","small","large","none"]},autofocus:{control:"boolean"}}},a={args:{class:"db-color-informational db-bg-color-basic-level-2","data-density":"functional",id:"test-id-123",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:e.jsxs(e.Fragment,{children:[e.jsx(i,{style:{inlineSize:"100%"},children:"Functional"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Functional"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Functional"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Functional"})]})},render:r=>e.jsx(n,{...r})},s={args:{class:"db-color-informational db-bg-color-basic-level-2","data-density":"regular",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:e.jsxs(e.Fragment,{children:[e.jsx(i,{style:{inlineSize:"100%"},children:"(Default) Regular"}),e.jsx(i,{style:{inlineSize:"100%"},children:"(Default) Regular"}),e.jsx(i,{style:{inlineSize:"100%"},children:"(Default) Regular"}),e.jsx(i,{style:{inlineSize:"100%"},children:"(Default) Regular"})]})},render:r=>e.jsx(n,{...r})},l={args:{class:"db-color-informational db-bg-color-basic-level-2","data-density":"expressive",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:e.jsxs(e.Fragment,{children:[e.jsx(i,{style:{inlineSize:"100%"},children:"Expressive"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Expressive"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Expressive"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Expressive"})]})},render:r=>e.jsx(n,{...r})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "data-density": "functional",
    "id": "test-id-123",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "children": <><DBCard style={{
        inlineSize: '100%'
      }}>Functional</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Functional</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Functional</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Functional</DBCard></>
  },
  render: (properties: any) => <DBSection {...properties} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "data-density": "regular",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "children": <><DBCard style={{
        inlineSize: '100%'
      }}>
                    (Default) Regular
                </DBCard><DBCard style={{
        inlineSize: '100%'
      }}>
                    (Default) Regular
                </DBCard><DBCard style={{
        inlineSize: '100%'
      }}>
                    (Default) Regular
                </DBCard><DBCard style={{
        inlineSize: '100%'
      }}>
                    (Default) Regular
                </DBCard></>
  },
  render: (properties: any) => <DBSection {...properties} />
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "data-density": "expressive",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "children": <><DBCard style={{
        inlineSize: '100%'
      }}>Expressive</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Expressive</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Expressive</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Expressive</DBCard></>
  },
  render: (properties: any) => <DBSection {...properties} />
}`,...l.parameters?.docs?.source}}};const y=["Functional","DefaultRegular","Expressive"];export{s as DefaultRegular,l as Expressive,a as Functional,y as __namedExportsOrder,u as default};
