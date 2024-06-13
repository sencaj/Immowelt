import Vue from 'vue';

export default Vue.component('contactrequestform_component', {
    template: `
    <div class="os-promo">
        <div class="color_bg_05 padding_top_10 padding_right_10 padding_bottom_10 padding_left_20">
            <img class="iw_left margin_top_10 margin_right_20 padding_none" src="objektstatistik-reloaded/dist/images/icon_more_contacts.svg" alt="More Contacts">

            <div class="os-promo__content">
                <h3 class="color_f_01 margin_none">
                    <p class="padding_none size_f_14">Mehr Kontakte gewünscht?</p>
                </h3>
                <a href="https://kontaktformularverwaltung.immowelt.de" class="link_02" target="_blank">Optimieren Sie Ihre Einstellungen im Kontaktformular</a>
            </div>
            <img class="iw_right no_s" src="objektstatistik-reloaded/dist/images/contact_form.svg" alt="Contact Form">
        </div>
        <div class="color_bg_05 padding_top_10 padding_right_10 padding_bottom_10 padding_left_20">
            <img class="iw_left margin_top_10 margin_right_20 padding_none" src="objektstatistik-reloaded/dist/images/icon_improve_statistic.svg" alt="More Contacts">

            <div class="os-promo__content">
                <h3 class="color_f_01 margin_none">
                    <p class="padding_none size_f_14">Jetzt Statistik boosten</p>
                </h3>
                <a href="https://dev.immowelt.de/anbieten/erfolgreich-vermarkten" class="link_02" target="_blank">Ihre Objekte noch sichtbarer auf Top-Plätzen!</a>
            </div>
            <img class="iw_right no_s" src="objektstatistik-reloaded/dist/images/improve_statistic.svg" alt="Contact Form">
        </div>
    </div>
    `
});