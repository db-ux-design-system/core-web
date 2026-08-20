import{n as e}from"./iframe-9bAi0jzk.js";import{n as t,t as n}from"./custom-heading-Qof5NBXC.js";import{n as r,t as i}from"./heading-h2-C3W6pM3O.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBHeadingH2/Forwarded heading attributes`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{id:`forwarded-heading`,class:`forwarded-heading-class`,"aria-label":`ID, class, ARIA, data and style forwarded to h2`,"data-example":`heading`,style:{textTransform:`uppercase`},children:`ID, class, ARIA, data and style forwarded to h2`},render:e=>(0,o.jsx)(i,{...e})},u={args:{id:`forwarded-custom-heading`,class:`forwarded-custom-heading-class`,"data-example":`custom-heading`,style:{textTransform:`uppercase`},children:(0,o.jsx)(`h2`,{children:`ID, class, data and style on the wrapper`})},render:e=>(0,o.jsx)(n,{...e})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "forwarded-heading",
    "class": "forwarded-heading-class",
    "aria-label": "ID, class, ARIA, data and style forwarded to h2",
    "data-example": "heading",
    "style": {
      textTransform: 'uppercase'
    },
    "children": "ID, class, ARIA, data and style forwarded to h2"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "forwarded-custom-heading",
    "class": "forwarded-custom-heading-class",
    "data-example": "custom-heading",
    "style": {
      textTransform: 'uppercase'
    },
    "children": <h2>ID, class, data and style on the wrapper</h2>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...u.parameters?.docs?.source}}},d=[`NativeIDclassARIAdataandstyle`,`WrapperIDclassdataandstyle`]})))()}f();export{l as NativeIDclassARIAdataandstyle,u as WrapperIDclassdataandstyle,d as __namedExportsOrder,c as default};