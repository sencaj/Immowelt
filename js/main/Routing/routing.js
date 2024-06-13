import VueRouter from 'vue-router'

// authentication
import authentication_component from './../Components/Authentication/authentication.js'
import login_component from './../Components/Authentication/login.js'
import registration_component from './../Components/Authentication/registration.js'
import test_component from './../Components/Authentication/test.js'

// charts
import clickrate_component from './../Components/Charts/clickrate.js'
import contactvisit_component from './../Components/Charts/contactvisit.js'
import countinlist_component from './../Components/Charts/countinlist.js'
import countinsearch_component from './../Components/Charts/countinsearch.js'
import countsuchagent_component from './../Components/Charts/countsuchagent.js'
import exposevisit_component from './../Components/Charts/exposevisit.js'
import mainpiechart_component from './../Components/Charts/mainpiechart.js'
import totalstatistics_component from './../Components/Charts/totalstatistics.js'

// shared
import header_component from './../Components/Shared/header.js'
import footer_component from './../Components/Shared/footer'
import immoheaderrwd from './../Components/Shared/immoheaderrwd.js'
import mainchart from './../Components/Shared/mainchart.js'
import mainchartprint from './../Components/Shared/mainchartprint.js'
import popuperrormessage from './../Components/Shared/popuperrormessage.js'
import remodals from './../Components/Shared/remodals.js'
import serviceerrormessage from './../Components/Shared/serviceerrormessage.js'
import statistictableculmulativeperday from './../Components/Shared/statistictableculmulativeperday.js'
import statisticfilter from './../Components/Shared/statisticfilter.js'
import statistictableperobject from './../Components/Shared/statistictableperobject.js'
import statistictableperobjectprint from './../Components/Shared/statistictableperobjectprint.js'
import table from './../Components/Shared/table.js'
import zeitraum from './../Components/Shared/zeitraum.js'
import contactrequestform from './../Components/Shared/contactrequestform.js'

const routes = [
    {
        name: 'authentication', path: '/authentication', component: authentication_component,
        children: [
            { name: 'login', path: 'login', component: login_component },
            { name: 'registration', path: 'registration', component: registration_component }
        ]
    }
];

export default new VueRouter({
    routes: routes,
    scrollBehavior: function (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});