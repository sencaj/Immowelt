import Vue from 'vue';

export default Vue.component('registration_component', {
    template: `
    <div>
        <div>
            <div>
                <p>Registrieren Sie sich jetzt, um ihre Angaben speichern und ihre Anzeige veröffentlichen zu können.</p>
                <div class="form_component">
                    <label>E-Mail</label>
                    <input type="text" tabindex="1" class="input-validation-error" ref="email" name="email" data-autotest="input-registrieren-email" />
                    <span class="field-validation-error">Bitte geben Sie eine gültige E-Mail-Adresse ein.</span>
                </div>
                <div class="form_component">
                    <p class="t_small">
                        Mit der Registrierung nehmen Sie den Immowelt-Service in Anspruch. Sie erhalten anhand der von Ihnen eingegebenen Daten,
                        genutzten Services und auf Grundlage unseres Geschäftszwecks auf Ihr Anliegen ausgerichtete Informationen.
                        Diesem Service können Sie jederzeit unter <a href="mailto:datenschutz@immowelt.de">datenschutz@immowelt.de</a> widersprechen.
                        Weitere Informationen finden Sie in der <a href="/immoweltag/datenschutz" target="_blank">Datenschutzerklärung</a>.
                    </p>
                </div>
                <button class="btn_01 ci_color margin_right_10 margin_bottom_20_s" tabindex="3" data-autotest="button-registrieren-registrieren">Registrieren</button>
                <button class="btn_01 lightgray" tabindex="4" data-autotest="button-registrieren-abbrechen">Abbrechen</button>
            </div>

            <div class="message_success">
                <h3>Bitte bestätigen Sie Ihre Registrierung.</h3>
                <p>
                    In Kürze erhalten Sie eine E-Mail mit einem Bestätigungslink. Klicken Sie bitte auf diesen Link, um Ihre Registrierung abzuschließen.
                    Hinweis: Sollten Sie die E-Mail nicht erhalten, prüfen Sie bitte auch Ihren Spam-Ordner.
                </p>
            </div>

            <div class="message_error">
                <h3>Leider ist ein Fehler aufgetreten</h3>
                <p> errorMessage </p>
                <button class="btn_01 lightgray" tabindex="4" data-autotest="button-registrieren-abbrechen-error">Abbrechen</button>
            </div>

            @{ int rndNum = new Random().Next(999); }

            <div class="no_l no_m no_s">
                <label>
                    Geben Sie eine gültige Email-Adresse an.
                    <input type="text" id="ValidatationForEmail+@rndNum" name="ValidatationForEmail" autocomplete="off" />
                </label>
                <input type="hidden" name="objectVal" id="objectVal+@rndNum" />
            </div>
        </div>
        <div class="t_center ladeRosette" v-else>
            <img src="@Url.Content("~/Assets/image/map_loader.gif")" width="76" height="76" />
            <span>Ihre Angaben werden verarbeitet...</span>
        </div>
    </div>
    `
});