import Vue from 'vue';

export default Vue.component('remodals_component', {
    template: `
    <div>
        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="erklärung" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        Meine wichtigsten Kennzahlen
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            Abweichungen zum tatsächlichen Traffic - durch Non-Human-Traffic - können nicht ausgeschlossen werden.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="datum" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        Datum
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            Hier werden all diejenigen Tage angezeigt, an denen Ihr Objekt aktiv war und mindestens eine der gemessenen Kennzahlen im Wert größer Null war.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="enthalten" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        In Ergebnisliste enthalten
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            Häufigkeit, mit der Ihre auf Immowelt aktive Anzeige in einer Ergebnisliste enthalten war.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="gesehen" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        In Ergebnisliste gesehen
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            Häufigkeit, mit der Ihre Anzeige in einer Ergebnisliste von Immobiliensuchenden gesehen wurde.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="exposeaufrufe" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        Exposéaufrufe
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            So häufig wurde Ihr Immobilienexposé aufgerufen.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="kontakte" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        Kontakte
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            So oft wurde Ihre Telefonnummer abgerufen bzw. das Kontaktformular abgesendet, um mit Ihnen bezüglich einer Immobilienanzeige Kontakt aufzunehmen.
                            Beachten Sie hierbei, dass nicht jeder Abruf Ihrer Telefonnummer auch tatsächlich einen Anruf zur Folge haben muss.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="suchagent" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        Im Suchauftrag
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            So oft wurde Ihre Immobilie im persönlichen Suchagenten, den die Suchenden selbst anlegen, angezeigt.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="klickrate" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        Klickrate
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            Dieser Prozentwert besagt, wie häufig Ihre Anzeige aufgerufen wurde, wenn diese im Suchergebnis zu sehen war. Das hilft Ihnen, die Attraktivität Ihrer Immobilienanzeige einzuschätzen.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="EinenMomentBitte" data-remodal-options="hashTracking: false" style="padding:44px; max-width:550px;">
            <div class="modal-content">
                <div class="modal-header objectstatisticsObjectDetail">
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            Einen Moment bitte. Wir erstellen den Bericht zu Ihrer Objektstatistik.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                    <div class="spinner spinner-circle">
                        <div class="loader">
                            <svg class="circular" viewBox="24 24 48 48"> <circle class="path" cx="48" cy="48" r="18" fill="none" stroke-width="2" stroke-miterlimit="10" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!--object detail modal-->
        <a data-remodal-target="objectdetail" id="objectdetail-ID" style="visibility:hidden">OBJ details</a>
        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="objectdetail" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>

                    <div class="iw_left objectDetailHeader">
                        <h1 class="margin_bottom_none nesto">Objektauswertung</h1>
                        <small class="margin_bottom_10 comment">Hinweis: Die Daten sind vortagesaktuell</small>
                    </div>

                    <div class="h_040"></div>
                    <br />
                    <div class="line_01"></div>

                        <div class="content_wrapper">
                            <div class="iw_content">

                                <div class="grid_row">

                                    <h4><strong class="margin_bottom_none"><span id="detail_object_name"></span></strong></h4>
                                    <div>Zeitraum von 18.08.2017 bis 29.06.2019</div>
                                    <br />
                                    <div class="grid_03o12_l grid_12o12_m grid_12o12_s">

                                        <table class="table_01">
                                            <tbody style="padding:8px,0px;">
                                                <tr>
                                                    <td><strong>PLZ:</strong></td>
                                                    <td><span id="detail_plz"></span>&nbsp;<span id="detail_city"></span></td>
                                                </tr>
                                                <tr>


                                                    <td><strong>Straße:</strong></td>
                                                    <td><span id="detail_street"></span></td>
                                                </tr>
                                                <tr>
                                                    <td style="white-space:nowrap"><strong>Referenz-Nr.:</strong></td>
                                                    <td><span id="detail_referenceNr"></span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Erfasst:</strong></td>
                                                    <td><span id="detail_erfasst"></span></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="grid_03o12_l"></div>
                                    <div class="grid_03o12_l grid_12o12_m grid_12o12_s">

                                        <table class="table_01">
                                            <tbody>
                                                <tr>
                                                    <td style="white-space:nowrap"><strong>In Ergebnisliste</strong></td>
                                                    <td data-label="" class="t_right"></td>
                                                </tr>
                                                <tr class="">
                                                    <td>enthalten</td>
                                                    <td data-label="" class="t_right"><span id="detail_enthalten"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>gesehen</td>
                                                    <td data-label="" class="t_right"><span id="detail_gesehen"></span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Exposéaufrufe</strong></td>
                                                    <td data-label="" class="t_right"><span id="detail_exposeAufrufe"></span></td>
                                                </tr>
                                                <tr>
                                                    <td style="white-space:nowrap"><strong>Im Suchauftrag</strong></td>
                                                    <td data-label="" class="t_right"><span id="detail_suchauftrag"></span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Kontakte</strong></td>
                                                    <td data-label="" class="t_right"></td>
                                                </tr>
                                                <tr>
                                                    <td style="white-space:nowrap">per E-Mail</td>
                                                    <td data-label="" class="t_right"><span id="detail_perEmail"></span></td>
                                                </tr>
                                                <tr>
                                                    <td style="white-space:nowrap">per Telefon</td>
                                                    <td data-label="" class="t_right"><span id="detail_perTelefon"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>gesamt</td>
                                                    <td data-label="" class="t_right"><span id="detail_gesamtKontakte"></span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Klickrate</strong></td>
                                                    <td data-label="" class="t_right"><span id="detail_clickrate">%</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <div class="grid_row" style="padding-bottom: 0px;">

                                        <a class="btn_01 lightgray icon-pdf grid_04o12_l" id="print-object">Als PDF herunterladen</a>
                                        <div id="print-object-spinner" class="spinner spinner-circle" style="display:none;">
                                            <div class="loader" style="float:left; margin-left:0px; width: 44px;  ">
                                                <svg class="circular" viewBox="24 24 48 48"> <circle class="path" cx="48" cy="48" r="18" fill="none" stroke-width="2" stroke-miterlimit="10" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    
                </div>
                <div class="line_01"></div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s" id="objectdetail-MAIN">

                            <!------->
                            <div class="grid_12o12">
                                <h3>
                                    In Ergebnisliste enthalten
                                </h3>
                            </div>
                            <div class="h_010"></div>
                            <div class="grid_12o12_l grid_09o12_m grid_12o12_s">
                                <div id="ergebnisEnthalten_detail" style="width:100%; height:400px;"></div>
                            </div>

                            <div class="grid_12o12">
                                <h3>
                                    In Ergebnisliste gesehen
                                </h3>
                            </div>
                            <div class="h_010"></div>
                            <div class="grid_12o12_l grid_09o12_m grid_12o12_s">
                                <div id="ergebnisGesehen_detail" style="width:100%; height:400px;"></div>
                            </div>

                            <div class="grid_12o12">
                                <h3>
                                    Exposéaufrufe
                                </h3>
                            </div>
                            <div class="h_010"></div>
                            <div class="grid_12o12_l grid_09o12_m grid_12o12_s">
                                <div id="exposeaufrufe_detail" style="width:100%; height:400px;"></div>
                            </div>

                            <div class="grid_12o12">
                                <h3>
                                    im Suchauftrag
                                </h3>
                            </div>

                            <div class="grid_12o12_l grid_09o12_m grid_12o12_s">
                                <div id="imSuchagent_detail" style="width:100%; height:400px;"></div>
                            </div>

                            <div class="grid_12o12">
                                <h3>
                                    Kontakte
                                </h3>
                            </div>
                            <div class="grid_12o12_l grid_09o12_m grid_12o12_s">
                                <div id="kontakte_detail" style="width:100%; height:400px;"></div>
                            </div>


                            <div class="grid_12o12">
                                <h3>
                                    Klickrate
                                </h3>
                            </div>
                            <div class="grid_12o12_l grid_09o12_m grid_12o12_s">
                                <div id="klickrate_detail" style="width:100%; height:400px;"></div>
                            </div>


                            <!------->
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!--object detail - no data modal -->
        <a data-remodal-target="objectdetail-nodata" id="objectdetail-nodata-ID" style="visibility:hidden"></a>
        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="objectdetail-nodata" data-remodal-options="hashTracking: false">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    INFO
                </div>
                <div class="modal-body">
                    Zur Zeit gibt es keine Daten verfügbar
                </div>
            </div>
        </div>


        <!-- Modal pop-up Pie chart -->

        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="piechart">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                            Meine wichtigsten Kennzahlen
                        </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            In dieser Übersicht zeigen wir Ihnen die genutzten Immobilenarten in dem oben selektierten Zeitraum.
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal pop-up Per E-Mail -->
        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="perEmail">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        Per E-Mail
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            Per E-Mail description
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal pop-up Per Telefon -->
        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="perTelefon">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        Per Telefon
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            Per Telefon description
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal pop-up Gesamt -->
        <div class="remodal-bg"></div>
        <div class="remodal double_width" data-remodal-id="gesamt">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                    <h2 class="modal_headline js-login" style="display: block;">
                        Gesamt
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="grid_row">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s">
                            Gesamt description
                        </div>
                        <div class="modal_footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
});