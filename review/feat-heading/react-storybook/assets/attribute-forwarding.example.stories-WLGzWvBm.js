import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./custom-heading-sp_C0xYI.js";import{n as i,t as a}from"./heading-h2-Dlepheft.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBHeadingH2/Forwarded heading attributes`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{id:`forwarded-heading`,class:`forwarded-heading-class`,"aria-label":`ID, class, ARIA, data and style forwarded to h2`,"data-example":`heading`,style:{textTransform:`uppercase`},children:`ID, class, ARIA, data and style forwarded to h2`},render:e=>(0,o.jsx)(a,{...e})},u={args:{id:`forwarded-custom-heading`,class:`forwarded-custom-heading-class`,"data-example":`custom-heading`,style:{textTransform:`uppercase`},children:(0,o.jsx)(`h2`,{children:`ID, class, data and style on the wrapper`})},render:e=>(0,o.jsx)(r,{...e})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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