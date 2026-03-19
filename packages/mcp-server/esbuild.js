import * as esbuild from "esbuild";

await esbuild.build({
	entryPoints: ["src/index.ts"],
	bundle: true,
	platform: "node",
	format: "esm",
	outfile: "build/index.js",
	banner: { js: "#!/usr/bin/env node" },
});
