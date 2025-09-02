

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.91006eab.js","_app/immutable/chunks/index.f86d78c0.js","_app/immutable/chunks/stores.95c1a488.js","_app/immutable/chunks/singletons.503ba141.js","_app/immutable/chunks/index.ae718bad.js"];
export const stylesheets = [];
export const fonts = [];
