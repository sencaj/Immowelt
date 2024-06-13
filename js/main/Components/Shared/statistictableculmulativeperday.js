import Vue from 'vue';
import store from '../../store/store';

export default Vue.component('statistictableculmulativeperday_component', {
    template: `
    <div>
        <a href="#" name="perDay" style="visibility:hidden"></a>
        <h3>Statistik nach Tagen</h3>
        <table class="table_02">
            <thead>
                <tr class="t_center">
                    <th>Datum <a data-remodal-target="datum"><i class="icon-info-circled"></i></a></th>
                    <th colspan="2">In Ergebnisliste</th>
                    <th>Exposéaufrufe <a data-remodal-target="exposeaufrufe"><i class="icon-info-circled"></i></a></th>
                    <th>Im Suchauftrag <a data-remodal-target="suchagent"><i class="icon-info-circled"></i></a></th>
                    <th colspan="3">Kontakte <a data-remodal-target="kontakte"><i class="icon-info-circled"></i></a></th>
                    <th>Klickrate <a data-remodal-target="klickrate"><i class="icon-info-circled"></i></a></th>
                </tr>
                <tr class="t_center">
                    <th></th>
                    <th>enthalten <a data-remodal-target="enthalten"><i class="icon-info-circled"></i></a></th>
                    <th>gesehen <a data-remodal-target="gesehen"><i class="icon-info-circled"></i></a></th>
                    <th></th>
                    <th></th>
                    <th>per E-Mail <a data-remodal-target="perEmail"><i class="icon-info-circled"></i></a></th>
                    <th>per Telefon <a data-remodal-target="perTelefon"><i class="icon-info-circled"></i></a></th>
                    <th>gesamt <a data-remodal-target="gesamt"><i class="icon-info-circled"></i></a></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr></tr>
            </thead>
            <tbody>
                <tr v-for="item in objects" class="t_center">
                    <td><strong>{{ item.Date }}</strong></td>
                    <td data-label="Enthalten">{{ item.CountInSearch }}</td>
                    <td data-label="Gesehen">{{ item.CountInList }}</td>
                    <td data-label="Exposéaufrufe">{{ item.CountExposeVisit }}</td>
                    <td data-label="Suchauftrag">{{ item.CountAgentMails }}</td>
                    <td data-label="Email">{{ item.CountEmailRequest }}</td>
                    <td data-label="Telefon">{{ item.CountTelRequest }}</td>
                    <td data-label="Gesamt">{{ item.CountEmailRequest + item.CountTelRequest }}</td>
                    <td data-label="Gesamt">{{ item.CountTelRequest }}</td>
                    <td data-label="Klickrate">{{ item.ClickRate }}</td>
                </tr>
                <tr class="t_center">
                    <td class="summe"><strong>Summe</strong></td>
                    <td data-label="Enthalten">4.403.928</td>
                    <td data-label="Gesehen">88.518</td>
                    <td data-label="Exposéaufrufe">4.370</td>
                    <td data-label="Suchauftrag">0</td>
                    <td data-label="Email">138</td>
                    <td data-label="Telefon">7</td>
                    <td data-label="Gesamt">209</td>
                    <td data-label="Klickrate">4.9%</td>
                </tr>
            </tbody>
        </table>

        <!-- Pagination -->
        <div class="iw_list_content margin_bottom_none color_bg_06">
            <div class="pagination t_center padding_top_30">
                <div id="kumulierttable-pagination" class="site-numbers">
                <div class="page-navigation"><a data-direction="-1" data-previous="true" href="#" class="btn_01 lightgray">&lt;</a><a data-page="0" href="#" class="btn_01 lightgray" style="display: inline-block;">1</a><a data-page="1" href="#" class="btn_01 lightgray" style="display: inline-block;">2</a><a data-page="2" href="#" class="btn_01 lightgray" style="display: inline-block;">3</a><a data-page="3" href="#" class="btn_01 lightgray" data-selected="true" style="display: inline-block;">4</a><a data-direction="1" data-next="true" href="#" class="btn_01 lightgray">&gt;</a></div></div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            CumulativeStatsPerDayAllObjects: [{
                Date: 'Fr. 18.08.17',
                CountInSearch: 0,
                CountInList: 0,
                CountExposeVisit: 0,
                CountAgentMails: 0,
                CountEmailRequest: 0,
                CountTelRequest: 0,
                ClickRate: 0
            }]
        }
    },
    computed: {
        objects() {
            return store.state.CumulativeStatsPerDayAllObjects
        }
    }
});