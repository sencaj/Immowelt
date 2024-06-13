import Vue from 'vue';

export default Vue.component('login_component', {
    template: `
    <div>
        <div>
            <p>Melden Sie sich jetzt an, um ihre Angaben speichern und ihre Anzeige veröffentlichen zu können.</p>
            <div class="form_component">
                <label> E-Mail oder Benutzername</label>
                <input type="text" tabindex="1" class="input-validation-error" ref="login_Username" name="login_Username" data-autotest="input-login-username" />
                <span class="field-validation-error">Bitte geben Sie Ihre E-Mail-Adresse ein.</span>
            </div>
            <a class="link_02 iw_right" tabindex="6" >Passwort vergessen?</a>
            <label>Passwort</label>
            <input type="password" tabindex="2":class="input-validation-error" ref="login_Password" name="login_Password" data-autotest="input-login-passwort" />
            <span class="field-validation-error" >Bitte geben Sie ein Passwort ein.</span>
            <span class="field-validation-error" >errorMessage</span>

            <div class="form_component margin_top_10">
                <input class="checkbox" type="checkbox" tabindex="5" id="KeepLogin">
                <label for="KeepLogin">angemeldet bleiben?</label>
            </div>
            <button class="btn_01 ci_color margin_right_10 margin_bottom_20_s" tabindex="3" data-autotest="button-login-anmelden">Anmelden</button>
            <button class="btn_01 lightgray" tabindex="4" data-autotest="button-login-abbrechen">Abbrechen</button>
        </div>
        <div class="message_error">
            <h3>Leider ist ein Fehler aufgetreten</h3>
            <p>errorMessage</p>
            <button class="btn_01 lightgray" tabindex="4" data-autotest="button-registrieren-abbrechen-error">Abbrechen</button>
        </div>

        <div class="t_center ladeRosette" v-else>
            <img src="@Url.Content("~/Assets/image/map_loader.gif")" width="76" height="76" />
            <span>Ihre Angaben werden verarbeitet...</span>
        </div>
    </div>
    `
});