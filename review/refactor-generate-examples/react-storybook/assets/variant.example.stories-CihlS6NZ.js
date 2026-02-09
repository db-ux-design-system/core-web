import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./stack-DIzUUkvP.js";import{D as r}from"./divider-D5n78HEs.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBStack/Variant",component:s,render:t=>e.jsx(s,{...t,children:t.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"text"},gap:{control:"text"},direction:{control:"text"},wrap:{control:"text"},alignment:{control:"text"},justifyContent:{control:"text"}}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]}),class:"stack-container"},decorators:[t=>e.jsx("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:e.jsx(t,{})})]},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx(r,{}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx(r,{}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]}),class:"stack-container",variant:"divider"},decorators:[t=>e.jsx("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:e.jsx(t,{})})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><span className="dummy-component">
            <a href="#">Content 1</a>
          </span>
          <span className="dummy-component">Content 2</span>
          <span className="dummy-component">Content 3</span></>,
    "class": "stack-container"
  },
  decorators: [Story => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><span className="dummy-component">
            <a href="#">Content 1</a>
          </span>
          <DBDivider />
          <span className="dummy-component">Content 2</span>
          <DBDivider />
          <span className="dummy-component">Content 3</span></>,
    "class": "stack-container",
    "variant": "divider"
  },
  decorators: [Story => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};const f=["DefaultSimple","Divider"];export{a as DefaultSimple,n as Divider,f as __namedExportsOrder,x as default};
