import Vue from 'vue';

export default Vue.component('authentication_component', {
    template: `
    <div class="content_wrapper authentifizierung">
        <div class="card">
            <div class="tab_container">
                <div class="tab_1o2 current">Anmelden</div>
                <div class="tab_2o2">Registrieren</div>
            </div>
            <transition name="contentx" mode="out-in">
                <router-view ref="loginRouterViewRef"></router-view>
            </transition>
        </div>
        <div class="security_advice" >
            <div class="comment">
                <strong><span class="icon-lock"></span> Sicherheitshinweis: <br />Geben Sie Ihre Zugangsdaten niemals an Dritte weiter</strong>
                <p class="padding_top_10">Falls Sie verdächtige Nachrichten erhalten, die nach Ihren Zugangsdaten fragen oder Sie zum Besuch einer fremden Webseite auffordern, wenden Sie sich bitte direkt an uns.</p>
            </div>
            <a class="link_02" href="javascript:void(0);">aktuelle Sicherheitsinformationen lesen</a>
        </div>

        <div class="security_advice" >
            <div class="comment">
                <strong class="w_100p margin_top_20"><span class="icon-lock"></span> Ihre persönlichen Daten werden geschützt</strong>
                <p class="padding_top_10">Wir gewährleisten den größtmöglichen Schutz Ihrer persönlichen Daten und geben sie nicht an Dritte weiter.</p>
            </div>
        </div>  
    </div>
    `    
});