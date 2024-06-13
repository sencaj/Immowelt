import Vue from 'vue';

export default Vue.component('statistictableperobjectprint_component', {
    template: `
    <div>
        <div style="height:30px; page-break-before:always;"></div>
        <ul class="tab_reiter">
            <li class="iw_tab current objektenPrint">
                <a href="#tab-objekten" class="" id="objektenPrint">nach Objekten</a>
            </li>
        </ul>

        <div>
            <!-- columns are manipulated with "colspan" and in objektsatistik.css with width % -->
            <table class="table_02 ">
                <thead>
                        <!--First header row-->
                        <tr class="t_center">
                            <th>Objekte</th>
                            <th colspan="2" style="white-space:nowrap">In Ergebnisliste</th>
                            <th>Exposéaufrufe<a data-remodal-target="exposeaufrufe"></a></th>
                            <th>Im Suchauftrag</th>
                            <th colspan="3" class="t_center">Kontakte <a data-remodal-target="kontakte"></a></th>
                            <th>Klickrate <a data-remodal-target="klickrate"></a></th>
                        </tr>
                        <!--Second header row-->
                        <tr class="t_center">
                            <th></th>
                            <th class="t_small">enthalten <a data-remodal-target="enthalten"></a></th>
                            <th class="t_small">gesehen <a data-remodal-target="gesehen"></a></th>
                            <th></th>
                            <td></td>
                            <th>E-Mail <i class="icon-info-circled"></i></th>
                            <th>Telefon <i class="icon-info-circled"></i></th>
                            <th>gesamt <i class="icon-info-circled"></i></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="table_02">
                            <tr style="page-break-inside:avoid;">
                                <td class="t_small">
                                    <strong></strong>
                                </td>
                                <td data-label="Enthalten" class="t_center">4.403.928</td>

                                <td data-label="Gesehen" class="t_center">88.518</td>

                                <td data-label="Exposéaufrufe" class="t_center">4.370</td>

                                <td data-label="Suchauftrag" class="t_center">0</td>

                                <td data-label="Email" class="t_center">138</td>

                                <td data-label="Telefon" class="t_center">71</td>

                                <td data-label="Gesamt" class="t_center">209</td>

                                <td data-label="Klickrate" class="t_center">4,9%</td>

                            </tr>
                    </tbody>
                </table>
        </div>
    </div>
    `,
});