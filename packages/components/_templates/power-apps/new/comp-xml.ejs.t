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
                  description-key="<%= prop.name %>_Desc_Key" of-type="<%= prop.type %>" usage="bound" required="false"

                  <% if(prop.type === "Enum" && prop.values && prop.values.length>0 ){ -%>
                  >
                    <% prop.values.forEach((value)=>{ -%>
                        <value name="<%= value.name %>" display-name-key="<%= value.key %>"><%= value.value %></value>
                    <% }); -%>
                        </property>
                  <% } else{ -%>
                        />
                  <% } -%>
        <% })} -%>
        <resources>
            <code path="index.ts" order="1"/>
        </resources>
    </control>
</manifest>

