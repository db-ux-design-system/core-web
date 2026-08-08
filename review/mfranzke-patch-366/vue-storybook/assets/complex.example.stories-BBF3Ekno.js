import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-85CJ0JUA.js";import{n as r,t as i}from"./infotext-Dxb7kIUS.js";import{n as a,t as o}from"./checkbox-CvblYVbu.js";import{n as s,t as c}from"./input-Bg9i2OEx.js";import{n as l,t as u}from"./tooltip-BEGr45Gz.js";import{n as d,t as f}from"./tag-CPErde56.js";import{n as p,t as m}from"./link-C8cHh4v6.js";import{c as h,d as g,f as _,i as v,l as y,m as b,n as x,p as S,r as C,s as w,t as T,u as E}from"./table-BYsSP3jP.js";var D,O,k,A,j,M,N;function P(){return(P=e((()=>{t(),a(),r(),c(),m(),w(),S(),C(),g(),y(),f(),u(),T(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/DBTable/Complex`,component:x,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},k={args:{captionPlain:`Flat, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="flat" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:x,DBButton:n,DBCheckbox:o,DBInfotext:i,DBInput:s,DBLink:p,DBTableBody:h,DBTableDataCell:b,DBTableHead:v,DBTableHeaderCell:_,DBTableRow:E,DBTag:d,DBTooltip:l},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Flat
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},A={args:{variant:`zebra`,captionPlain:`Zebra, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="zebra" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:x,DBButton:n,DBCheckbox:o,DBInfotext:i,DBInput:s,DBLink:p,DBTableBody:h,DBTableDataCell:b,DBTableHead:v,DBTableHeaderCell:_,DBTableRow:E,DBTag:d,DBTooltip:l},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},j={args:{variant:`spaced`,captionPlain:`Spaced, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="spaced" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:x,DBButton:n,DBCheckbox:o,DBInfotext:i,DBInput:s,DBLink:p,DBTableBody:h,DBTableDataCell:b,DBTableHead:v,DBTableHeaderCell:_,DBTableRow:E,DBTag:d,DBTooltip:l},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},M={args:{variant:`spaced`,mobileVariant:`list`,captionPlain:`Mobile variant: List, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="list" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:x,DBButton:n,DBCheckbox:o,DBInfotext:i,DBInput:s,DBLink:p,DBTableBody:h,DBTableDataCell:b,DBTableHead:v,DBTableHeaderCell:_,DBTableRow:E,DBTag:d,DBTooltip:l},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Mobile variant: List
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Flat, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="flat" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Flat
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "zebra",
    "captionPlain": "Zebra, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="zebra" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "Spaced, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="spaced" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Spaced
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "mobileVariant": "list",
    "captionPlain": "Mobile variant: List, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="list" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Mobile variant: List
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...M.parameters?.docs?.source}}},N=[`Flat`,`Zebra`,`Spaced`,`MobilevariantList`]})))()}P();export{k as Flat,M as MobilevariantList,j as Spaced,A as Zebra,N as __namedExportsOrder,O as default};