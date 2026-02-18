import{j as i}from"./jsx-runtime-u17CrQMm.js";import{u as xt,c as O,g as G,f as P,a as I,b as h,s as $,e as v,d as De,i as K,h as Ee,j as _e}from"./index-20fQ7N7z.js";import{r as n}from"./iframe-D-PfmYcM.js";import{b as Le,c as Ce,d as Ae,g as Fe,h as je,i as Re,e as Y,j as qt,D as R,k as Dt,l as Et,f as Be,m as _t}from"./constants-CD69XpC7.js";import{D as Me}from"./document-scroll-listener-Bcz2tjmG.js";import{h as Lt}from"./floating-components-BNmGdAgy.js";import{b as Ct}from"./form-components-C05wGs1e.js";import{D as Oe}from"./button-mqA4YWee.js";import{D as B}from"./infotext-Bu-FytgT.js";import{D as At}from"./input-D-ligllg.js";import{D as Ft}from"./tag-BseHWbl1.js";import{D as jt}from"./tooltip-BUPZbecD.js";const g=class g{static runCallbacks(l){for(const m of Object.values(g.callbacks))typeof m=="function"&&m(l)}constructor(){if(g._instance)return g._instance;g._instance=this,self.document&&self.document.addEventListener("click",l=>g.runCallbacks(l))}addCallback(l){const m=xt();return g.callbacks[m]=l,m}removeCallback(l){delete g.callbacks[l]}};g.callbacks={},g._instance=null;let M=g;function Rt(e,l){e={width:"fixed",...e};const m=l||n.useRef(l);return i.jsx("article",{"data-spacing":"none",ref:m,...P(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),id:e.id,...G(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:O("db-custom-select-dropdown db-card",e.className),"data-width":e.width,children:e.children})}const Ge=n.forwardRef(Rt);Ge.__docgenInfo={description:"",methods:[],displayName:"DBCustomSelectDropdown",props:{width:{required:!1,tsType:{name:"union",raw:"CustomSelectDropdownWidthType | string",elements:[{name:"unknown[number]",raw:"(typeof CustomSelectDropdownWidthList)[number]"},{name:"string"}]},description:`Changes the behavior of the dropdown with.
Default: fixed 328px
Full: Based on the size of the form-field
Auto: Based on the size of the largest list item`},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"}}};function Bt(e,l){const m=l||n.useRef(l),[z,o]=n.useState(()=>!1);function c(b){b.stopPropagation(),e.onChange&&e.onChange(b)}function k(){if(!(e.isGroupTitle||e.type==="checkbox"))return h(e.checked,"checked")?"check":"x_placeholder"}return n.useEffect(()=>{o(!!(e.isGroupTitle||e.showDivider))},[e.isGroupTitle,e.showDivider]),i.jsx("li",{ref:m,...P(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),id:e.id,...G(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:O("db-custom-select-list-item",e.className,{"db-checkbox":e.type==="checkbox"&&!e.isGroupTitle,"db-radio":e.type!=="checkbox"&&!e.isGroupTitle}),"data-divider":I(z),children:e.isGroupTitle?i.jsx("span",{children:e.groupTitle}):i.jsxs("label",{"data-icon":e.type!=="checkbox"&&e.icon?e.icon:void 0,"data-show-icon":I(e.showIcon),"data-icon-trailing":k(),children:[i.jsx("input",{className:"db-custom-select-list-item-checkbox","data-disable-focus":"true",type:e.type,name:e.name,form:e.name,checked:h(e.checked,"checked"),disabled:h(e.disabled,"disabled"),value:e.value,onChange:b=>c(b)}),e.label?i.jsx(i.Fragment,{children:e.label}):i.jsx(i.Fragment,{children:e.children})]})})}const Pe=n.forwardRef(Bt);Pe.__docgenInfo={description:"",methods:[],displayName:"DBCustomSelectListItem",props:{groupTitle:{required:!1,tsType:{name:"string"},description:"Set the title of a group of items - disables radio/checkbox behavior"},type:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CustomSelectListItemTypeList)[number]"},description:"Change the behavior of the item single(radio) or multiple(checkbox)"},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"},disabled:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"The disabled attribute can be set to keep a user from clicking on the form element."},label:{required:!1,tsType:{name:"string"},description:"The label attribute specifies the caption of the form element."},name:{required:!1,tsType:{name:"string"},description:"The name attribute gives the name of the form control, as used in form submission and in the form element's elements object."},value:{required:!1,tsType:{name:"any"},description:"The value property is to receive results from the native form element."},checked:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Define the radio or checkbox elements checked state"},change:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<T>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<T>",elements:[{name:"T"}]},name:"event"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<T>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<T>",elements:[{name:"T"}]},name:"event"}],return:{name:"void"}}},description:""},isGroupTitle:{required:!1,tsType:{name:"boolean"},description:"If the item is a group title (only text)"},showDivider:{required:!1,tsType:{name:"boolean"},description:"Show a divider on the bottom of the list item for visual grouping (don't use it on every item)"},icon:{required:!1,tsType:{name:"IconTypes"},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."},showIcon:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`}}};function Mt(e,l){const m=l||n.useRef(l);return i.jsx("div",{role:h(e.multiple,"multiple")?"group":"radiogroup","aria-label":e.label,ref:m,...P(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),id:e.id,...G(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:O("db-custom-select-list",e.className),children:i.jsx("ul",{children:e.children})})}const ze=n.forwardRef(Mt);ze.__docgenInfo={description:"",methods:[],displayName:"DBCustomSelectList",props:{label:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"}}};function Ot(e,l){e={clearSelectionText:"Clear selection",showClearSelection:!0,...e};const m=n.useId(),z=l||n.useRef(l),o=n.useRef(null),c=n.useRef(null),k=n.useRef(null),b=n.useRef(null),[d,Ne]=n.useState(()=>{}),[J,Ue]=n.useState(()=>{}),[Q,Z]=n.useState(()=>{}),[ee,te]=n.useState(()=>{}),[ne,N]=n.useState(()=>{}),[We,ae]=n.useState(()=>{}),[ie,oe]=n.useState(()=>{}),[He,Ve]=n.useState(()=>{}),[se,re]=n.useState(()=>{}),[le,Xe]=n.useState(()=>{}),[ce,D]=n.useState(()=>"no-validation"),[$e,Ke]=n.useState(()=>!1),[de,Ye]=n.useState(()=>{}),[ue,Je]=n.useState(()=>{}),[C,E]=n.useState(()=>""),[U,Qe]=n.useState(()=>{}),[Ze,A]=n.useState(()=>""),[p,et]=n.useState(()=>[]),[tt,nt]=n.useState(()=>!1),[me,at]=n.useState(()=>!1),[w,it]=n.useState(()=>0),[r,W]=n.useState(()=>[]),[x,F]=n.useState(()=>[]),[fe,he]=n.useState(()=>!1),[ge,ot]=n.useState(()=>{}),[st,rt]=n.useState(()=>0),[be,lt]=n.useState(()=>{}),[pe,ct]=n.useState(()=>{});function dt(t){t?.target?.contains&&t?.target?.contains(o.current)&&H()}const[ut,ye]=n.useState(()=>{});function ve(){return!!(e.validMessage??e.validation==="valid")}function we(){c.current&&(c.current.value=ft()),!c.current?.validity.valid||e.validation==="invalid"?(q(ee),N(e.invalidMessage||c.current?.validationMessage||Y),Ee()&&(A(ne),v(()=>A(""),1e3)),$e&&D(e.validation??"invalid")):ve()&&c.current?.validity.valid&&e.required?(q(Q),Ee()&&(A(e.validMessage??Be),v(()=>A(""),1e3)),D(e.validation??"valid")):$(e.message,e.showMessage)?(q(J),D(e.validation??"no-validation")):(q(se),D(e.validation??"no-validation"))}function mt(t){e.onDropdownToggle&&(t.stopPropagation(),e.onDropdownToggle(t)),t.target instanceof HTMLDetailsElement&&t.target.open?(ot(new M().addCallback(a=>wt(a))),lt(new Me().addCallback(a=>dt(a))),H(),pe?.observe(o.current),t.target.dataset.test||Te()):(ge&&new M().removeCallback(ge),be&&new Me().removeCallback(be),pe?.unobserve(o.current))}function ft(){return r?.length?r.at(0)??"":""}function q(t){const a=[];t&&a.push(t),U&&C?.length&&a.push(U),Je(a.join(" "))}function ht(){return e.selectAllLabel??R}function T(t){return t.label??t.value?.toString()??""}function gt(t){return t&&r?.includes?r?.includes(t):!1}function bt(t){const a=e.removeTagsTexts,s=e.options;if(a&&s){const u=s.findIndex(f=>f.value===t.value);if(u>=0&&u<a.length)return a[u]}return`${_t} ${T(t)}`}function pt(t,a){a&&a.stopPropagation(),V(t.value),L()}function H(){if(o.current){const t=o.current.querySelector("article");t&&v(()=>{Lt(t,o.current,e.placement??"bottom")},1)}}function yt(t){if(o.current?.open){if(self.document){const a=self.document.activeElement;if(a)if(a.getAttribute("type")==="checkbox"||a.getAttribute("type")==="radio"){const u=a?.closest("li");if(t.key==="ArrowDown"||t.key==="ArrowRight"){let f=u?.nextElementSibling;for(;f;){const y=f.querySelector("input");if(y){y.focus();break}f=f.nextElementSibling}f||j(a)}else{let f=u?.previousElementSibling;for(;f;){const y=f.querySelector("input");if(y){y.focus();break}f=f.previousElementSibling}if(!f){const y=o.current.querySelector('input[type="checkbox"]');if(y&&y!==a)j(a);else{const xe=_e(o.current);if(xe)v(()=>{xe.focus()},100);else{const qe=Array.from(o.current?.querySelectorAll('input[type="checkbox"],input[type="radio"]'));qe.length&&qe.at(-1)?.focus()}}}}}else a.getAttribute("type")==="search"&&(t.key==="ArrowUp"||t.key==="ArrowLeft")?(_(void 0,!0),L()):j(a)}}else(t.key==="ArrowDown"||t.key==="ArrowRight")&&(H(),o.current&&(o.current.open=!0),Te());t.stopPropagation(),t.preventDefault()}function vt(t){if(t.stopPropagation(),t.key==="Escape"&&o.current?.open)_(void 0,!0),L();else if(t.key==="Enter"&&o.current?.open){if(self.document){const a=self.document.activeElement;if(["checkbox","radio"].includes(a.getAttribute("type")||""))a.click(),t.preventDefault();else if(a.getAttribute("type")==="search"){const s=x?.find(u=>!u.isGroupTitle&&!u.disabled);s?.value&&(V(s.value),t.preventDefault())}}}else(t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="ArrowLeft"||t.key==="ArrowRight")&&yt(t)}function _(t,a){if(o.current){if(a)o.current.open=!1,L();else if(o.current.open&&t&&t.relatedTarget){const s=t.relatedTarget;o.current.contains(s)||v(()=>o.current.open=!1,1)}}}function wt(t){if(t){const a=t.target;o.current?.open&&!o.current.contains(a)&&(o.current.open=!1)}}function S(t){new Date().getTime()-st<200||(W(t),Ke(!0),e.onOptionSelected&&e.onOptionSelected(t??[]),rt(new Date().getTime()))}function V(t){t&&(h(e.multiple,"multiple")?r?.includes(t)?S(r.filter(a=>a!==t)):S([...r||[],t]):(S([t]),_(void 0,!0)))}function Tt(t){if(t.stopPropagation(),r?.length===w)S([]);else{const a=me&&b.current?b.current.value:void 0;S(e.options?e.options.filter(s=>!s.isGroupTitle&&(!a||s.value?.toLowerCase().includes(a.toLowerCase()))).map(s=>s.value??""):[])}}function j(t){if(o.current){const a=Array.from(o.current.querySelectorAll('input[type="checkbox"],input[type="radio"]'));if(a.length){const s=a.at(0),u=s===t&&a.length>1?a.at(1):s;u&&v(()=>{u.focus()},1)}}}function Te(){if(o.current){const t=_e(o.current);t?v(()=>{t.focus()},1):j()}}function Se(t){if(t===void 0)return;let a;if(typeof t=="string")a=t;else{const s=t;s.stopPropagation(),e.onSearch&&e.onSearch(s),a=s.target.value,ye(a)}!e.options||!a||a.length===0?F(e.options):e.searchFilter?F(e.options.filter(s=>e.searchFilter(s,a))):F(e.options.filter(s=>!s.isGroupTitle&&T(s).toLowerCase().includes(a.toLowerCase())))}function St(t){t.stopPropagation(),S([]),L()}function L(){o.current&&o.current.querySelector("summary")?.focus()}const[It,Ie]=n.useState(()=>!1),[ke,X]=n.useState(()=>!1);function kt(t){t.stopPropagation()}return n.useEffect(()=>{const t=e.id??`custom-select-${m}`;Ne(t),Ue(t+Le),Z(t+Ce),te(t+Ae),ae(t+Fe),oe(t+je),Ve(t+"-summary"),re(t+Re),Qe(t+"-selected-labels"),Xe(t+"-info"),N(e.invalidMessage||Y),typeof window<"u"&&"IntersectionObserver"in window&&ct(new IntersectionObserver(a=>{if(o.current){const s=a.find(({target:u})=>u===o.current);s&&!s.isIntersecting&&o.current.open&&(o.current.open=!1)}}))},[]),n.useEffect(()=>{o.current&&o.current.addEventListener("focusout",t=>_(t))},[o.current]),n.useEffect(()=>{if(d){const t=d+Le;oe(d+je),ae(d+Fe),Z(d+Ce),te(d+Ae),re(d+Re),$(e.message,e.showMessage)?q(t):q()}},[d]),n.useEffect(()=>{if(o.current){const t=o.current.querySelector("summary");t&&t.setAttribute("aria-describedby",e.ariaDescribedBy??(ue||""))}},[o.current,ue]),n.useEffect(()=>{e.showNoResults!==void 0?he(e.showNoResults):x&&he(x.length===0)},[e.showNoResults,e.showLoading,x]),n.useEffect(()=>{nt(!!(h(e.multiple,"multiple")&&(e.showSelectAll??w>5)))},[e.showSelectAll,w,e.multiple]),n.useEffect(()=>{at(e.showSearch??w>9)},[e.showSearch,w]),n.useEffect(()=>{const t=e.values;Array.isArray(t)?r!==t&&W(t):t==null&&r?.length!==0&&W([])},[e.values]),n.useEffect(()=>{c.current&&we()},[r,c.current]),n.useEffect(()=>{if(c.current){let t=de;t||(t=new AbortController,Ye(t));const a=e.values;Ct(c.current,()=>{const s=a||(c.current.value?[c.current.value]:[]);S(s),we()},t.signal)}},[c.current]),n.useEffect(()=>{D(e.validation)},[e.validation]),n.useEffect(()=>{r?.length===0?(Ie(!1),X(!1)):r?.length===w?(X(!1),Ie(!0)):r&&X(!0)},[r,w]),n.useEffect(()=>{F(e.options),it(e.options?.filter(t=>!t.isGroupTitle).length??0)},[e.options]),n.useEffect(()=>{if(ye(e.searchValue),e.searchValue){const t=e.searchValue;v(()=>{Se(t)},1)}},[e.searchValue]),n.useEffect(()=>{e.options?.length&&et(e.options?.filter(t=>!t.value||!r?.includes?!1:!t.isGroupTitle&&r?.includes(t.value)))},[e.options,r]),n.useEffect(()=>{if(e.selectedLabels){E(e.selectedLabels);return}if(p?.length){if(e.transformSelectedLabels){const t=p,a=e.transformSelectedLabels;E(a(t));return}e.selectedType==="amount"?E(e.amountText?e.amountText:`${p?.length} ${qt}`):E(p?.map(t=>T(t)).join(", "))}else E("")},[p,e.selectedType,e.amountText,e.selectedLabels,e.transformSelectedLabels]),n.useEffect(()=>{e.onAmountChange&&e.onAmountChange(p?.length??0)},[p]),n.useEffect(()=>{k.current&&(k.current.indeterminate=!!ke)},[ke,k.current]),n.useEffect(()=>{N(e.invalidMessage||c.current?.validationMessage||Y)},[c.current,e.invalidMessage]),n.useEffect(()=>()=>{de?.abort()},[]),i.jsxs("div",{id:d,ref:z,...P(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density","onOptionSelected","onAmountChange","onDropdownToggle"]),...G(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:O("db-custom-select",e.className),"aria-invalid":ce==="invalid","data-custom-validity":ce,"data-width":e.formFieldWidth,"data-variant":e.variant==="floating"&&e.selectedType==="tag"&&h(e.multiple,"multiple")?"above":e.variant,"data-required":I(e.required),"data-hide-asterisk":De(e.showRequiredAsterisk),"data-placement":e.placement,"data-selected-type":h(e.multiple,"multiple")?e.selectedType:"text","data-hide-label":De(e.showLabel),"data-icon":e.icon,"data-show-icon":I(e.showIcon),children:[i.jsxs("label",{id:ie,children:[e.label??R,i.jsx("select",{role:"none",hidden:!0,id:We,tabIndex:-1,ref:c,form:e.form,name:e.name,multiple:h(e.multiple,"multiple"),disabled:h(e.disabled,"disabled"),required:h(e.required,"required"),onChange:t=>kt(t),children:e.options?.length?i.jsx(i.Fragment,{children:e.options?.map(t=>i.jsx("option",{disabled:t.disabled,value:t.value,children:T(t)},K(t,"native-select-option-")))}):null})]}),i.jsxs("details",{ref:o,open:e.open,onToggle:t=>mt(t),onKeyDown:t=>vt(t),children:[e.children,e.options?i.jsxs(i.Fragment,{children:[i.jsxs("summary",{className:"db-custom-select-form-field",id:He,"aria-disabled":I(e.disabled),"aria-labelledby":ie,children:[C&&C?.length?i.jsxs("span",{"data-visually-hidden":I(e.selectedType==="tag"),id:U,children:[e.selectedPrefix?i.jsx("span",{"data-visually-hidden":"true",children:e.selectedPrefix}):null,C]}):null,e.selectedType==="tag"?i.jsx("div",{children:p?.map((t,a)=>i.jsx(Ft,{emphasis:"strong",behavior:"removable",removeButton:bt(t),onRemove:s=>pt(t,s),children:T(t)},K(t,"tag-")))}):null]}),i.jsxs(Ge,{width:e.dropdownWidth,children:[me?i.jsx("div",{children:i.jsx(At,{type:"search",ref:b,name:d,form:d,showLabel:!1,value:ut,label:e.searchLabel??R,placeholder:e.searchPlaceholder??e.searchLabel,ariaDescribedBy:fe||e.showLoading?le:void 0,onInput:t=>Se(t)})}):null,fe||e.showLoading?i.jsx(B,{id:le,icon:e.showLoading?"circular_arrows":void 0,semantic:e.showLoading?"informational":"warning",children:(e.showLoading?e.loadingText:e.noResultsText)??Dt}):i.jsx(i.Fragment,{children:i.jsxs(i.Fragment,{children:[tt?i.jsx("div",{children:i.jsx("div",{className:"db-checkbox db-custom-select-list-item",children:i.jsxs("label",{children:[i.jsx("input",{type:"checkbox",value:"select-all",ref:k,form:d,checked:It,onChange:t=>Tt(t)}),ht()]})})}):null,i.jsx(ze,{multiple:h(e.multiple,"multiple"),label:e.listLabel??e.label??R,children:x?i.jsx(i.Fragment,{children:x?.map(t=>i.jsx(Pe,{type:h(e.multiple,"multiple")?"checkbox":"radio",showDivider:t.showDivider,icon:t.icon,isGroupTitle:t.isGroupTitle,groupTitle:T(t),name:d,checked:gt(t.value),disabled:t.disabled,value:t.value,onChange:a=>V(t.value),children:t.isGroupTitle?null:i.jsx(i.Fragment,{children:T(t)})},K(t,"custom-select-list-item-")))}):null})]})}),i.jsx("div",{children:i.jsx(Oe,{variant:"ghost",width:"full",icon:"cross",size:"small",name:d,form:d,onClick:t=>_(void 0,!0),children:e.mobileCloseButtonText??Et})})]})]}):null]}),!e.showClearSelection||!r||r?.length===0?null:i.jsxs(Oe,{icon:"cross",variant:"ghost",size:"small",noText:!0,name:d,form:d,onClick:t=>St(t),children:[e.clearSelectionText,i.jsx(jt,{placement:"top",children:e.clearSelectionText})]}),i.jsx("span",{className:"db-custom-select-placeholder","aria-hidden":I(!0),id:se,children:e.placeholder??e.label}),$(e.message,e.showMessage)?i.jsx(B,{size:"small",icon:e.messageIcon,id:J,children:e.message}):null,ve()?i.jsx(B,{size:"small",semantic:"successful",id:Q,children:e.validMessage||Be}):null,i.jsx(B,{size:"small",semantic:"critical",id:ee,children:ne}),i.jsx("span",{"data-visually-hidden":"true",role:"status",children:Ze})]})}const Gt=n.forwardRef(Ot);Gt.__docgenInfo={description:"",methods:[],displayName:"DBCustomSelect",props:{children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"},ariaDescribedBy:{required:!1,tsType:{name:"string"},description:"Overwrites auto handling for aria-describedby."},form:{required:!1,tsType:{name:"string"},description:"Associates the control with a form element"},validation:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ValidationList)[number]"},description:"Marks an input element as invalid (red) / valid (green) / no-validation (grey). Overwrites the :user-valid selector."},disabled:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"The disabled attribute can be set to keep a user from clicking on the form element."},label:{required:!1,tsType:{name:"string"},description:"The label attribute specifies the caption of the form element."},name:{required:!1,tsType:{name:"string"},description:"The name attribute gives the name of the form control, as used in form submission and in the form element's elements object."},required:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"When the required attribute specified, the user will be required to fill the form element before submitting the form.\nThe form element will be marked semantically as required and by default also visually with an asterisk '*' next to the label (unless the property `showRequiredAsterisk` is also set with the value `false`)."},showRequiredAsterisk:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"This attribute allows to specify whether a form field which is marked as required will show a visual indicator (an asterisk '*').\nIt allows to prevent adding the visual indicator but still keep the field semantically required by setting its value to `false`.\nBy default, its value is `true`, so the asterisk is shown when `required` is set."},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LabelVariantList)[number]"},description:"Change the variant of the label to float or hidden"},placeholder:{required:!1,tsType:{name:"string"},description:"Text that appears in the form control when it has no value set"},message:{required:!1,tsType:{name:"string"},description:"Optional helper message for form components"},validMessage:{required:!1,tsType:{name:"string"},description:"Helper message for valid form components"},invalidMessage:{required:!1,tsType:{name:"string"},description:"Helper message for invalid form components"},messageIcon:{required:!1,tsType:{name:"IconTypes"},description:"Set/overwrite icon for helper message for form components"},autocomplete:{required:!1,tsType:{name:"union",raw:"string | AutoCompleteType",elements:[{name:"string"},{name:"unknown[number]",raw:"(typeof AutoCompleteList)[number]"}]},description:"See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"},showMessage:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Enables or disables the visibility of the message."},amountText:{required:!1,tsType:{name:"string"},description:'Optional: if select-type="amount" change the shown text'},listLabel:{required:!1,tsType:{name:"string"},description:"Overwrite the default aria-label (props.label) for the custom-select-list"},clearSelectionText:{required:!1,tsType:{name:"string"},description:"Label for the clear selection button"},dropdownWidth:{required:!1,tsType:{name:"union",raw:"CustomSelectDropdownWidthType | string",elements:[{name:"unknown[number]",raw:"(typeof CustomSelectDropdownWidthList)[number]"},{name:"string"}]},description:`Changes the behavior of the dropdown with.
Default: fixed 328px
Auto: Based on the size of the form-field`},formFieldWidth:{required:!1,tsType:{name:"union",raw:"WidthType | string",elements:[{name:"unknown[number]",raw:"(typeof WidthList)[number]"},{name:"string"}]},description:"Width of the component. Auto width based on children size, full width based on parent elements width."},loadingText:{required:!1,tsType:{name:"string"},description:"Dropdown - hint if data has to be loaded"},mobileCloseButtonText:{required:!1,tsType:{name:"string"},description:"Change the button text for mobile close"},multiple:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Enables CustomSelect"},noResultsText:{required:!1,tsType:{name:"string"},description:"Dropdown - hint if there are no options"},open:{required:!1,tsType:{name:"boolean"},description:"Programmatically open the dropdown. May differ if you don't use onDropdownToggle."},options:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
} & DBCustomSelectListItemExtraProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1},description:"Disables this option"},{key:"id",value:{name:"string",required:!1},description:"Identifier for option"},{key:"label",value:{name:"string",required:!1},description:"If the value is different from the label you want to show to the user."},{key:"value",value:{name:"string",required:!1},description:"The value for the option"}]}},{name:"intersection",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
} & IconProps & ShowIconProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
}`,signature:{properties:[{key:"isGroupTitle",value:{name:"boolean",required:!1},description:"If the item is a group title (only text)"},{key:"showDivider",value:{name:"boolean",required:!1},description:"Show a divider on the bottom of the list item for visual grouping (don't use it on every item)"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
   */
  icon?: IconTypes;
}`,signature:{properties:[{key:"icon",value:{name:"IconTypes",required:!1},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Enables or disables the visibility of the icon. The default value depends on the component.
   * For many components this property is optional to reflect Figma properties.
   */
  showIcon?: boolean | string;
}`,signature:{properties:[{key:"showIcon",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`}]}}]}]}],raw:"CustomSelectOptionType[]"},description:"You should pass in the options as an array."},placement:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PlacementVerticalList)[number]"},description:"The `placement` attributes values change the position to absolute and adds a transform based on the placement."},removeTagsTexts:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Optional: if you use selectedType=tag and options, you need to set the removeTagsTexts for screen reader users"},searchFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: CustomSelectOptionType, filterText: string) => boolean",signature:{arguments:[{type:{name:"intersection",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
} & DBCustomSelectListItemExtraProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1},description:"Disables this option"},{key:"id",value:{name:"string",required:!1},description:"Identifier for option"},{key:"label",value:{name:"string",required:!1},description:"If the value is different from the label you want to show to the user."},{key:"value",value:{name:"string",required:!1},description:"The value for the option"}]}},{name:"intersection",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
} & IconProps & ShowIconProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
}`,signature:{properties:[{key:"isGroupTitle",value:{name:"boolean",required:!1},description:"If the item is a group title (only text)"},{key:"showDivider",value:{name:"boolean",required:!1},description:"Show a divider on the bottom of the list item for visual grouping (don't use it on every item)"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
   */
  icon?: IconTypes;
}`,signature:{properties:[{key:"icon",value:{name:"IconTypes",required:!1},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Enables or disables the visibility of the icon. The default value depends on the component.
   * For many components this property is optional to reflect Figma properties.
   */
  showIcon?: boolean | string;
}`,signature:{properties:[{key:"showIcon",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`}]}}]}]},name:"option"},{type:{name:"string"},name:"filterText"}],return:{name:"boolean"}}},description:"Optional: Change the filter function for the search input"},searchLabel:{required:!1,tsType:{name:"string"},description:"Search label"},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Search placeholder"},searchValue:{required:!1,tsType:{name:"string"},description:"Optional: Prefill the value of the search input"},selectAllLabel:{required:!1,tsType:{name:"string"},description:"Select all checkbox label"},selectedLabels:{required:!1,tsType:{name:"string"},description:`Optional: If you want to show a custom label for the selected values.
You need to define the empty state as well based on selected options.`},selectedPrefix:{required:!1,tsType:{name:"string"},description:`Optional: Prefix text announced by screen readers before the selection
(e.g. "Selected").`},selectedType:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof SelectedTypeList)[number]"},description:"Change the selected type for values shown in multi select"},showClearSelection:{required:!1,tsType:{name:"boolean"},description:"Show clear selection button (default:true). Hide it if you have very small inputs e.g. in tables."},showLoading:{required:!1,tsType:{name:"boolean"},description:"Dropdown - enable loading infotext and spinner"},showNoResults:{required:!1,tsType:{name:"boolean"},description:"Dropdown - enable no options infotext"},showSearch:{required:!1,tsType:{name:"boolean"},description:"Forces search in header."},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"Forces select all checkbox (only for multiple)."},transformSelectedLabels:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedOptions?: CustomSelectOptionType[]) => string",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
} & DBCustomSelectListItemExtraProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1},description:"Disables this option"},{key:"id",value:{name:"string",required:!1},description:"Identifier for option"},{key:"label",value:{name:"string",required:!1},description:"If the value is different from the label you want to show to the user."},{key:"value",value:{name:"string",required:!1},description:"The value for the option"}]}},{name:"intersection",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
} & IconProps & ShowIconProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
}`,signature:{properties:[{key:"isGroupTitle",value:{name:"boolean",required:!1},description:"If the item is a group title (only text)"},{key:"showDivider",value:{name:"boolean",required:!1},description:"Show a divider on the bottom of the list item for visual grouping (don't use it on every item)"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
   */
  icon?: IconTypes;
}`,signature:{properties:[{key:"icon",value:{name:"IconTypes",required:!1},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Enables or disables the visibility of the icon. The default value depends on the component.
   * For many components this property is optional to reflect Figma properties.
   */
  showIcon?: boolean | string;
}`,signature:{properties:[{key:"showIcon",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`}]}}]}]}],raw:"CustomSelectOptionType[]"},name:"selectedOptions"}],return:{name:"string"}}},description:"Optional: If you want to show a custom label based on the selected options."},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Initial value for multi select"},onAmountChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(amount: number) => void",signature:{arguments:[{type:{name:"number"},name:"amount"}],return:{name:"void"}}},description:`Optional: if select-type="amount" when amount changes
@param amount The amount of selected checkboxes`},amountChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(amount: number) => void",signature:{arguments:[{type:{name:"number"},name:"amount"}],return:{name:"void"}}},description:`Optional: if select-type="amount" when amount changes
@param amount The amount of selected checkboxes`},onOptionSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:`Triggers after some option was clicked in dropdown
@param values the changed values`},optionSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:`Triggers after some option was clicked in dropdown
@param values the changed values`},onDropdownToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: GeneralEvent<HTMLDetailsElement>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<T>",elements:[{name:"HTMLDetailsElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user when dropdown was toggled."},dropdownToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: GeneralEvent<HTMLDetailsElement>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<T>",elements:[{name:"HTMLDetailsElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user when dropdown was toggled."},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: InputEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<T>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user when a search was performed."},search:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: InputEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<T>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user when a search was performed."},icon:{required:!1,tsType:{name:"IconTypes"},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."},showIcon:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`},showLabel:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Enables/disables the visibility of the label"}}};export{Gt as D};
