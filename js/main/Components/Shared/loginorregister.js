import Vue from 'vue';

export default Vue.component('immoheaderrwd_component', {
    template: `
    <form novalidate="novalidate">
    <div class="modal-header js-modal-header">
        <button data-remodal-action="close" class="btn_close icon-close iw_right"></button>
        <h3 class="modal_headline js-login">Anmelden <span class="sub"></span></h3>
        <h3 class="modal_headline js-registration">Registrieren <span class="sub">Jetzt registrieren und viele Vorteile nutzen!</span></h3>
    </div>
    <div class="modal-body">
        <div class="grid_row js-login">
            <div class="modal_column1 grid_05o12 grid_05o12_m grid_12o12_s padding_bottom_none">
                <label class="w_100p">E-Mail oder Benutzername
                    <input class="js-usrmail-input margin_bottom_10 w_100p" data-val="true" data-val-required="Bitte geben Sie Ihre E-Mail-Adresse ein!" id="Name" name="Name" type="text" value="" tabindex="5" />
                    <span class="field-validation-valid js-validation-usrmail" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                </label>

                <label class="w_100p">
                    Passwort<span class="iw_right"><a class="link_02 padding_none js-submit-jump" href="//dev-secure.immowelt.de/autmvc/LostPassword/start">vergessen?</a></span>
                    <input class="js-pwd-input margin_bottom_10 w_100p" data-val="true" data-val-required="Bitte geben Sie Ihr Passwort ein!" id="Password" name="Password" type="password" tabindex="6"/>
                    <span class="field-validation-valid js-validation-pwd" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                </label>

                <label class="w_100p radiobutton">
                    angemeldet bleiben?
                    <input type="checkbox" class="js-always-loggedin-input" tabindex="7">
                </label>

                <div class="js-error-capslock message_info margin_top_20" style="display:none;">Ihre Feststelltaste ist aktiv!</div>
                <div class="js-error-message message_error margin_top_20" style="display:none;"></div>

                <button class="btn_01 ci_color iw_right w_100p margin_top_10 margin_bottom_10 js-submit-login" tabindex="8">Anmelden</button>
                <a class="link_02 margin_top_20 padding_none js-login js-auth-change-link margin_bottom_10" data-remodal-target="dev-modal-auth~both-register" href="#">Neu hier? Registrieren</a>

                <input type="hidden" class="js-endlink-input" value="https://dev.immowelt.de/objektstatistik?tagid=b5c21d6069b644769a2d178b3af46616&amp;ita=103">
                <input type="hidden" class="js-mediaid-input" value="0">
                <input type="hidden" class="js-additionaldata-input" value="portal=dev.immowelt.de&amp;referrer=https%253a%252f%252fdev.immowelt.de%252fobjektstatistik%253ftagid%253db5c21d6069b644769a2d178b3af46616%2526ita%253d103">
                <input type="hidden" class="js-urltologin-input" value="//dev-secure.immowelt.de/autmvc/Authentication/Login">
                <input type="hidden" class="js-urltocreatejumpurl-input" value="//dev-secure.immowelt.de/autmvc/Authentication/JumpTo">
                <input type="hidden" class="js-eventtype-input" value="common">
            </div>
            
            <div class="grid_07o12 grid_07o12_m grid_12o12_s padding_bottom_none">
                <strong class="w_100p"><span class="icon-lock"></span> Sicherheitshinweis: Geben Sie Ihre Zugangsdaten niemals an Dritte weiter</strong>
                <p class="padding_top_10">Falls Sie verdächtige Nachrichten erhalten, die nach Ihren Zugangsdaten fragen oder Sie zum Besuch einer fremden Webseite auffordern, wenden Sie sich bitte direkt an uns.</p>
                <a class="link_02" onclick="IwAG.Authentication.getInstance().goToSchutz(0)" href="javascript:void(0);">aktuelle Sicherheitsinformationen lesen</a>
            </div>
        </div>
        
        <div class="js-registration">
            <div class="grid_row">
                <div class="modal_column1 grid_05o12 grid_05o12_m grid_12o12_s padding_bottom_none">
                    <div class="no_l no_m no_s">
                        <label>Geben Sie eine gültige Email-Adresse an.
                            <input type="text" id="ValidatationForEmail873" name="ValidatationForEmail" autocomplete="off">
                        </label>
                        <input type="hidden" id="objectVal749" name="objectVal" value="xAuxqgZYbx4KzmiaNqAE8gE/dUe/pBXhoiIkufnFWqnD1DNOlhpfkk701j1P7/welkz/BxqMJsgiTwTdpoU85w==">
                    </div>
                    <label class="w_100p">
                         E-Mail<input class="js-usrmail-input margin_bottom_10 w_100p" data-val="true" data-val-required="Bitte geben Sie Ihre E-Mail-Adresse ein!" id="Email" name="Email" type="text" value="">
                        <span class="field-validation-valid js-validation-usrmail" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                    </label>
                        Mit der Registrierung nehmen Sie den Immowelt-Service in Anspruch. Sie erhalten anhand der von Ihnen eingegebenen Daten, genutzten Services und auf Grundlage unseres Geschäftszwecks auf Ihr Anliegen ausgerichtete Informationen. Diesem Service können Sie jederzeit unter <a href="mailto:datenschutz@immowelt.de">datenschutz@immowelt.de</a> widersprechen. Weitere Informationen finden Sie in der <a target="_blank" href="https://dev.immowelt.de/immoweltag/datenschutz">Datenschutzerklärung</a>.
                        <button class="btn_01 ci_color iw_right w_100p margin_top_10 margin_bottom_20 js-submit-register">Registrieren</button>
                        <a class="link_02 margin_top_20 padding_none js-registration js-auth-change-link margin_bottom_10" data-remodal-target="dev-modal-auth~both-login" href="#">mit bestehendem Konto anmelden</a>
                        <input type="hidden" class="js-endlink-input" value="https://dev.immowelt.de/objektstatistik?tagid=b5c21d6069b644769a2d178b3af46616&amp;ita=103">
                        <input type="hidden" class="js-mediaid-input" value="0">
                        <input type="hidden" class="js-additionaldata-input" value="portal=dev.immowelt.de&amp;referrer=https%253a%252f%252fdev.immowelt.de%252fobjektstatistik%253ftagid%253db5c21d6069b644769a2d178b3af46616%2526ita%253d103">
                        <input type="hidden" class="js-urltoregister-input" value="//dev-secure.immowelt.de/autmvc/Register/Register">
                        <input type="hidden" class="js-eventtype-input" value="common">
                        <input type="hidden" class="js-registrationsource-input" value="Default">
                    </div>

                    <div class="grid_07o12 grid_07o12_m grid_12o12_s padding_bottom_none">
                    <ul class="textlist_icon_02 no_s">
                    <li>Suchaufträge, Suchanzeigen und Merkzettel helfen bei Ihrer Suche</li>
                    <li>Ihr Suchfortschritt bleibt erhalten - auch mobil</li>
                    <li>erstellen und verwalten Sie Immobilienanzeigen</li>
                    </ul>
                    <strong class="w_100p margin_top_20"><span class="icon-lock"></span> Ihre persönlichen Daten werden geschützt</strong>
                    <p class="padding_top_10">Wir gewährleisten den größtmöglichen Schutz Ihrer persönlichen Daten und geben sie nicht an Dritte weiter.</p>
                    </div>
                </div>
                <div class="js-error-message message_error margin_top_10 clear" style="display:none;"></div>


            </div>
            <div class="js-registration-success" style="display:none;">
            <div class="message_success">
            <h3>Bitte bestätigen Sie Ihre Registrierung.</h3>
            <p>
                In Kürze erhalten Sie eine E-Mail mit einem Bestätigungslink. Klicken Sie bitte auf diesen Link, um Ihre Registrierung abzuschließen.
                Hinweis: Sollten Sie die E-Mail nicht erhalten, prüfen Sie bitte auch Ihren Spam-Ordner.
            </p>
            </div>
        </div>
        </div>
        <div class="modal-footer">
        </div>
    </form>
    `,
});