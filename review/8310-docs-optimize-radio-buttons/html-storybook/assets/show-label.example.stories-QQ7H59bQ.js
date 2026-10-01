import{n as e}from"./iframe-DcvCoVHV.js";import{n as t,t as n}from"./infotext-DlaZo240.js";import{n as r,t as i}from"./radio-DwQa3zFp.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBRadio/Show Label`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{name:`RatingVisible`,value:`good`,showLabel:!0,children:`Good`},render:e=>(0,o.jsxs)(`fieldset`,{children:[(0,o.jsx)(`legend`,{children:`(Default) True - rate your experience`}),(0,o.jsx)(i,{...e}),(0,o.jsx)(i,{name:`RatingVisible`,value:`neutral`,showLabel:!0,children:`Neutral`}),(0,o.jsx)(i,{name:`RatingVisible`,value:`bad`,showLabel:!0,children:`Bad`})]})},u={args:{name:`RatingHidden`,value:`good`,showLabel:!1,children:`Good`},render:e=>(0,o.jsxs)(`fieldset`,{children:[(0,o.jsx)(`legend`,{children:`False - rate your experience`}),(0,o.jsx)(i,{...e}),(0,o.jsx)(i,{name:`RatingHidden`,value:`neutral`,showLabel:!1,children:`Neutral`}),(0,o.jsx)(i,{name:`RatingHidden`,value:`bad`,showLabel:!1,children:`Bad`}),(0,o.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Labels are visually hidden but still read by screen readers.`})]})},d=[`DefaultTrue`,`False`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "RatingVisible",
    "value": "good",
    "showLabel": true,
    "children": "Good"
  },
  render: (properties: any) => <fieldset><legend>(Default) True - rate your experience</legend><DBRadio {...properties} /><DBRadio name="RatingVisible" value="neutral" showLabel>
                    Neutral
                </DBRadio><DBRadio name="RatingVisible" value="bad" showLabel>
                    Bad
                </DBRadio></fieldset>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "RatingHidden",
    "value": "good",
    "showLabel": false,
    "children": "Good"
  },
  render: (properties: any) => <fieldset><legend>False - rate your experience</legend><DBRadio {...properties} /><DBRadio name="RatingHidden" value="neutral" showLabel={false}>
                    Neutral
                </DBRadio><DBRadio name="RatingHidden" value="bad" showLabel={false}>
                    Bad
                </DBRadio><DBInfotext semantic="informational" size="small" icon="none">
                    Labels are visually hidden but still read by screen readers.
                </DBInfotext></fieldset>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultTrue,u as False,d as __namedExportsOrder,c as default};