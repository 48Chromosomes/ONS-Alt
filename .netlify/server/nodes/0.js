

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b2acdcac.js","_app/immutable/chunks/index.f86d78c0.js"];
export const stylesheets = [];
export const fonts = [];
