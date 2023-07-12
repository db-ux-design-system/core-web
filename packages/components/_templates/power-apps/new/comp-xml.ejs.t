---
to: ../../output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/ControlManifest.Input.xml
force: true
---
<% if(typeof props !== 'undefined'){ locals.props = JSON.parse(Buffer.from(props, 'base64').toString('ascii')) }  -%>
<?xml version="1.0" encoding="utf-8" ?>
<manifest>
    <control namespace="DBUI" constructor="DB<%= h.capitalize(name) %>" version="<%= version %>"
             display-name-key="DB<%= h.capitalize(name) %>_Display_Key" description-key="DB<%= h.capitalize(name) %>_Desc_Key"
             control-type="standard">

        <%  if(locals.props){ locals.props.forEach((prop)=>{ -%>
        <property name="<%= prop.name %>" display-name-key="<%= prop.name %>_Display_Key"

                  description-key="<%= prop.name %>_Desc_Key"

                  <% if(typeof prop.onChange !== 'undefined' && prop.onChange){ -%>
                  usage="bound"
                  <% } else { -%>
                  usage="input"
				  <% } -%>

                  <% if(typeof prop.required !== 'undefined' && prop.required){ -%>
                  required="true"
                  <% } else { -%>
                  required="false"
				  <% } -%>

				  <% if(typeof prop.defaultValue !== 'undefined' && prop.defaultValue){ -%>
                  default-value="<%= prop.defaultValue %>"
                  <% } -%>

				  <% if(typeof prop.type !== 'undefined' && prop.type !== "Icon" && prop.type !== "DefaultVariant"){ -%>
                  of-type="<%= prop.type %>"
                  <% } else if(prop.type === "Icon"){ -%>
                  of-type="Enum">
                  <value name="None" display-name-key="None">_</value>
                  <value name="Account" display-name-key="Account">account</value>
                  <value name="Edit" display-name-key="Edit">edit</value>
                  <!-- TODO: Add other icons here -->
                  </property>
                  <% } else if(prop.type === "DefaultVariant"){ -%>
                  of-type="Enum">
                  <value name="Adaptive" display-name-key="Adaptive">adaptive</value>
                  <value name="Critical" display-name-key="Critical">critical</value>
                  <value name="Informational" display-name-key="Informational">informational</value>
                  <value name="Successful" display-name-key="Successful">successful</value>
                  <value name="Warning" display-name-key="Warning">warning</value>
                  </property>
				  <% } -%>

                  <% if(prop.type === "Enum" && prop.values && prop.values.length>0 ){ -%>
                  >
                    <% prop.values.forEach((value)=>{ -%>
                        <value name="<%= value.name %>" display-name-key="<%= value.key %>"><%= value.value %></value>
                    <% }); -%>
                        </property>
                  <% } else if (prop.type !== "Icon" && prop.type !== "DefaultVariant"){ -%>
                        />
                  <% } -%>
        <% })} -%>


		<% if(typeof hasOnClick !== 'undefined' && hasOnClick){   -%>
		<property name="clicked" display-name-key="clicked_Display_Key"
		description-key="clicked_Desc_Key" of-type="TwoOptions" usage="bound" required="false"/>
		<% } -%>

		<property name="componentHeight" display-name-key="componentHeight_Display_Key"
		description-key="componentHeight_Desc_Key" of-type="Decimal" usage="bound" required="false"/>
		<property name="componentWidth" display-name-key="componentWidth_Display_Key"
		description-key="componentWidth_Desc_Key" of-type="Decimal" usage="bound" required="false"/>

        <resources>
            <code path="index.ts" order="1"/>
            <resx path="strings/DB<%= h.capitalize(name) %>.1033.resx" version="<%= version %>" />
        </resources>
    </control>
</manifest>

