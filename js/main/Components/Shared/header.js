import Vue from 'vue';

export default Vue.component('header_component', {
    template: `
    <div class="os-nav">
        <div>
            <div class="navigation-ui-header">
                <div class="navigation-ui-content-wrapper nav-hide-critical">
                    <a href="https://dev.immowelt.de" title="immowelt.de" class="logo" id="logo">
                        <picture>
                            <source srcset="//cdnglobal.immowelt.org/global-assets/2.9.2/legacy/0/images/logo_immowelt_blank.svg" media="(max-width: 640px)" alt="Immobilien, Wohnungen und Häuser" title="Immobilien, Wohnungen und Häuser">
                            <source srcset="//cdnglobal.immowelt.org/global-assets/2.9.2/legacy/0/images/logo_immowelt.svg" media="(min-width: 641px) and (max-width: 980px)" alt="Immobilien, Wohnungen und Häuser" title="Immobilien, Wohnungen und Häuser">
                            <img src="//cdnglobal.immowelt.org/global-assets/2.9.2/legacy/0/images/logo_immowelt.svg" alt="Immobilien, Wohnungen und Häuser" title="Immobilien, Wohnungen und Häuser">
                        </picture>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `,
});