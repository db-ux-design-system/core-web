---
inject: true
to: "<%= showcases ? `../../showcases/vue-showcase/src/utils/navigation-items.ts` : null %>"
prepend: true
---
import <%= h.changeCase.pascal(name) %>Showcase from '@components/components/<%= name %>/showcase/<%= name %>.showcase.vue';
