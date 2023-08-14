---
inject: true
to: index.html
after: <ul>
---
<li>
<a href="./src/components/<%= name %>/index.html">DB<%= h.changeCase.pascal(name) %></a>
</li>
