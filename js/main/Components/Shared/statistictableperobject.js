import Vue from 'vue';
export default Vue.component('statistictableperobject_component', {
    template: `
    <table class="table_02" style="page-break-inside:avoid;">
    <thead>
        <tr class="t_center">
            <th>Objekte</th>
            <th colspan="2">In Ergebnisliste</th>
            <th style="white-space: nowrap">Exposéaufrufe <a data-remodal-target="exposeaufrufe"><i class="icon-info-circled"></i></a></th>
            <th style="white-space: nowrap">Im Suchauftrag <a data-remodal-target="suchagent"><i class="icon-info-circled"></i></a></th>
            <th style="white-space: nowrap" colspan="3">Kontakte <a data-remodal-target="kontakte"><i class="icon-info-circled"></i></a></th>
            <th style="white-space: nowrap">Klickrate <a data-remodal-target="klickrate"><i class="icon-info-circled"></i></a></th>
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
        </tr>
        <tr></tr>
    </thead>

    <tbody>
        <tr class="t_center objectstatisticsObjectDetail" data-href="" data-clickrate="0" data-pertelefon="0" data-peremail="0" data-suchauftrag="0" data-enthalten="278.926" data-exposeaufrufe="0" data-objectreferencenr="" data-objectstreet="Plankenweg 41" data-objectid="584a1f32-66be-4e2e-bd30-158b4edb5419" data-objectplz="56070" data-objectcity="Koblenz" data-objectkeywords="kpl. renov. Altbau-Whg. in 4-FH" data-gesehen="0" data-createdon="Sonntag, 11. März 2018 " style="cursor:pointer">

            <td class="t_left">
                <div class="spinner spinner-circle" style="display:none">
                    <div class="loader" style="margin-left:0px">
                        <svg class="circular" viewBox="24 24 48 48"> <circle class="path" cx="48" cy="48" r="18" fill="none" stroke-width="2" stroke-miterlimit="10"></circle></svg>
                    </div>
                </div>

                <strong>
                    <div style="color:red">Objekt wurde gelöscht</div>
                    kpl. renov. Altbau-Whg. in 4-FH <br>
                            </strong>


                    56070 Koblenz
                        </td>
                <td data-label="Enthalten">278.926</td>
                <td data-label="Gesehen">0</td>
                <td data-label="Exposéaufrufe">0</td>
                <td data-label="Suchauftrag">0</td>
                <td data-label="Email">0</td>
                <td data-label="Telefon">0</td>
                <td data-label="Gesamt">0</td>
                <td data-label="Klickrate">0%</td>
                    </tr>
            <tr class="t_center objectstatisticsObjectDetail" data-href="" data-clickrate="4,9" data-pertelefon="71" data-peremail="138" data-suchauftrag="0" data-enthalten="4.125.002" data-exposeaufrufe="4.370" data-objectreferencenr="" data-objectstreet="Plankenweg 41" data-objectid="f6948a6d-daf8-4f43-b088-74e96180d10d" data-objectplz="56070" data-objectcity="Koblenz" data-objectkeywords="kpl. renov. Altbau-Whg. in 4-FH" data-gesehen="88.518" data-createdon="Sonntag, 11. März 2018 " style="cursor:pointer">

                <td class="t_left">
                    <div class="spinner spinner-circle" style="display:none">
                        <div class="loader" style="margin-left:0px">
                            <svg class="circular" viewBox="24 24 48 48"> <circle class="path" cx="48" cy="48" r="18" fill="none" stroke-width="2" stroke-miterlimit="10"></circle></svg>
                        </div>
                    </div>

                    <strong>

                        kpl. renov. Altbau-Whg. in 4-FH <br>
                            </strong>

                        56070 Koblenz
                    </td>
                    <td data-label="Enthalten">4.125.002</td>
                    <td data-label="Gesehen">88.518</td>
                    <td data-label="Exposéaufrufe">4.370</td>
                    <td data-label="Suchauftrag">0</td>
                    <td data-label="Email">138</td>
                    <td data-label="Telefon">71</td>
                    <td data-label="Gesamt">209</td>
                    <td data-label="Klickrate">4,9%</td>
            </tr>
        </tbody>
    </table>
    `,
});
