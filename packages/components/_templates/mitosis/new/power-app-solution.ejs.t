---
inject: true
to: ../../build-power-apps/DBUI/DBUI.cdsproj
before: <ProjectReference Include="..\button\DBButton.pcfproj" />
skip_if: <ProjectReference Include="..\<%= name %>\DB<%= h.changeCase.pascal(name) %>.pcfproj" />
---
<ProjectReference Include="..\<%= name %>\DB<%= h.changeCase.pascal(name) %>.pcfproj" />
