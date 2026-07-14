import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{G as t,_ as n,at as r,ft as i,gt as a,h as o,l as s,p as c,rt as l,s as u,st as d,t as f,ut as p,y as m}from"./src-BCxXQqYo.js";var h,g,_,v,y,b,x;e((()=>{f(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBTable/Complex`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},_={args:{captionPlain:`Flat, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:u,DBButton:a,DBCheckbox:p,DBInfotext:i,DBInput:d,DBLink:t,DBTableBody:c,DBTableDataCell:m,DBTableHead:s,DBTableHeaderCell:n,DBTableRow:o,DBTag:l,DBTooltip:r},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Flat
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},v={args:{variant:`zebra`,captionPlain:`Zebra, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:u,DBButton:a,DBCheckbox:p,DBInfotext:i,DBInput:d,DBLink:t,DBTableBody:c,DBTableDataCell:m,DBTableHead:s,DBTableHeaderCell:n,DBTableRow:o,DBTag:l,DBTooltip:r},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},y={args:{variant:`spaced`,captionPlain:`Spaced, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:u,DBButton:a,DBCheckbox:p,DBInfotext:i,DBInput:d,DBLink:t,DBTableBody:c,DBTableDataCell:m,DBTableHead:s,DBTableHeaderCell:n,DBTableRow:o,DBTag:l,DBTooltip:r},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},b={args:{variant:`spaced`,mobileVariant:`list`,captionPlain:`Mobile variant: List, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:u,DBButton:a,DBCheckbox:p,DBInfotext:i,DBInput:d,DBLink:t,DBTableBody:c,DBTableDataCell:m,DBTableHead:s,DBTableHeaderCell:n,DBTableRow:o,DBTag:l,DBTooltip:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Mobile variant: List
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Flat`,`Zebra`,`Spaced`,`MobilevariantList`]}))();export{_ as Flat,b as MobilevariantList,y as Spaced,v as Zebra,x as __namedExportsOrder,g as default};