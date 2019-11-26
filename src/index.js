import component from '.src/vue-img-loader.vue';

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('vue-img-loader', component);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default component;