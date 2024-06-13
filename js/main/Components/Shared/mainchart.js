import Vue from 'vue';

export default Vue.component('mainchart_component', {
    template: `
    <div class="content_wrapper">
        <div class="iw_content">
            <div class="grid_row">
                <h2 class="margin_bottom_30">
                    Meine wichtigsten Kennzahlen
                    <a data-remodal-target="erklärung"><i class="icon-info-circled size_f_24"></i></a>
                </h2>
                <div class="grid_08o12_l grid_01o12 grid_12o12_m grid_12o12_s">
                    <ul class="tab_reiter">
                        <li class="grid_06o12 padding_right_0 iw_tab" v-bind:class="{'current': !activeTab}">
                            <a class="js-tab-link icon-chart-line" data-tab-link="main-chart-tab" @click="activeTab=0"></a>
                        </li>
                        <li class="grid_06o12 padding_right_0 iw_tab" v-bind:class="{'current': activeTab}">
                            <a class="js-tab-link icon-chart-pie-1" data-tab-link="pie-chart-tab" @click="activeTab=1"></a>
                        </li>
                    </ul>
                    <div id="js-tabs" class="h_500" >
                        <div v-if="!activeTab" id="main-chart-tab" class="js-tab">
                           <totalstatistics_component></totalstatistics_component>
                        </div>
                        <div v-else id="pie-chart-tab" class="js-tab">
                            <mainpiechart_component></mainpiechart_component>
                        </div>
                    </div>
                    <contactrequestform_component></contactrequestform_component>
                </div>

                <div class="grid_03o12_l grid_12o12_m grid_12o12_s">
                    <table class="table_01">
                        <tbody>
                            <tr>
                                <td><strong>In Ergebnisliste</strong></td>
                                <td data-label="" class="t_right"></td>
                            </tr>
                            <tr class="">
                                <td>enthalten</td>
                                <td data-label="" class="t_right">4.403.928</td>
                            </tr>
                            <tr>
                                <td>gesehen</td>
                                <td data-label="" class="t_right">88.518</td>
                            </tr>
                            <tr>
                                <td><strong>Exposéaufrufe</strong></td>
                                <td data-label="" class="t_right">4.370</td>
                            </tr>
                            <tr>
                                <td><strong>Im Suchauftrag</strong></td>
                                <td data-label="" class="t_right">0</td>
                            </tr>
                            <tr>
                                <td><strong>Kontakte</strong></td>
                                <td data-label="" class="t_right"></td>
                            </tr>
                            <tr>
                                <td>per E-Mail</td>
                                <td data-label="" class="t_right">138</td>
                            </tr>
                            <tr>
                                <td>per Telefon</td>
                                <td data-label="" class="t_right">71</td>
                            </tr>
                            <tr>
                                <td>gesamt</td>
                                <td data-label="" class="t_right">209</td>
                            </tr>
                            <tr>
                                <td><strong>Klickrate</strong></td>
                                <td data-label="" class="t_right">4,9%</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="margin_top_80_l margin_top_50_m margin_top_10_s"></div>
                    <a href="#perDay" class="link_02 padding_bottom_20" id="per_day_statistics">
                        Statistik nach Tagen
                    </a>
                    <p class="t_small">Hinweis: Die Daten sind vortagesaktuell </p>
                    <a href="/objektstatistik/ExportToExcel" class="btn_01 btn_30 btn_100 lightgray icon-file-excel" id="excel-download">Als Excel herunterladen</a>
                    <div class="h_010"></div>
                    <a href="/objektstatistik/ExportToPdf" id="downloadLinkPDF" class="btn_01 btn_30 btn_100 lightgray icon-pdf">Als PDF herunterladen</a>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            activeTab: 0
        }
    }
});