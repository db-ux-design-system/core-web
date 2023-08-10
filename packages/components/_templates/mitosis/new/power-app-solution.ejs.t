---
inject: true
to: ../../build-power-apps/DBUI/DBUI.cdsproj
before: ProjectReference
skip_if: <%= name %>
---
<!-- <ProjectReference Include="..\<%= name %>\DB<%= h.changeCase.pascal(name) %>.pcfproj" /> -->
