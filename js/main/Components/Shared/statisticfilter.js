import Vue from 'vue';

export default Vue.component('statisticfilter_component', {
    template: `
    <div>
        <div class="remodal-bg"></div>
        <div class="remodal transform_none double_width filterStatistic" data-remodal-id="filterStatistic" data-remodal-options="hashTracking: false">
            <div class="modal-content">

                    <div class="modal-header">
                        <button class="btn_close icon-close iw_right" data-remodal-action="close"></button>
                        <h2 class="modal_headline js-login" style="display: block;">
                            Weitere Kriterien auswählen
                        </h2>
                    </div>
                    <div class="modal-body padding_bottom_40_s">
                        <div class="grid_row">
                            <div class="grid_08o12_l grid_12o12_m grid_12o12_s">
                                <div class="grid_row">
                                    <div class="grid_12o12_l grid_12o12_m grid_12o12_s padding_top_20">
                                        <div class="form_component">
                                            <label for=""></label>
                                        </div>

                                        <div class="form_component">
                                            Überschrift
                                        </div>

                                        <div class="form_component">
                                            <label class="padding_bottom_10">Immobilienart</label>
                                            <div class="picker_wrapper">
                                            </div>
                                        </div>

                                        <div class="form_component">
                                            <div class="filter_dropdown neubauprojekt">
                                                <label class="switch">Neubauprojekte</label>
                                                <span class="js-show-action picker ellipsis current switch" data-tablet-scrollto="#js-searchBox" data-mobile-scrollto="#js-searchWhat">
                                                    <span class="js-show-action inner_searchWhat"><span class="js-show-action inner_searchWhat color_f_03">Wähle eine Option</span></span>
                                                </span>

                                                <div class="js-default-hidden flyout target" data-mobile-scrollto="#js-searchWhat" data-tablet-scrollto="#js-searchBox">
                                                    <div class="flyout_section iw_left">
                                                        <ul>
                                                            <li>
                                                                <label>
                                                                
                                                                    <input name="EtypeEsr" type="radio" class="projektSelector" value="-1" data-title="Alle Projekte">Alle Projekte
                                                                </label>
                                                            </li>
                                                                <li>
                                                                    <label>
                                                                        <input name="EtypeEsr" class="projektSelector" type="radio"/>
                                                                    </label>
                                                                </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input id="hfSearchEtype" name="Etype" type="hidden" value="0">
                                                <input id="hfSearchEsr" name="Esr" type="hidden" value="1">
                                                <input id="hfSearchEqid" name="Eqid" type="hidden" value="1012">
                                            </div>
                                        </div>

                                        <div class="form_component">
                                            <label class="padding_bottom_10">Miete / Kauf</label>
                                            <div class="picker_wrapper">
                                            </div>
                                        </div>

                                        <div class="form_component">
                                            <label>Straße</label>
                                        </div>

                                        <div class="form_component">
                                            <div class="input_zip_city">
                                                <div class="input_zip">
                                                    <label>PLZ  <a href="#" tabindex="-1"></a></label>
                                                </div>
                                                <div class="input_city">
                                                    <label>Ort</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input id="fromDateAdditionalFilter" name="fromDate" autocorrect="off" type="text" style="visibility: hidden; position: absolute; width: 0.1px; height: 0.1px;">
                        <input id="toDateAdditionalFilter" name="toDate" autocorrect="off" type="text" style="visibility: hidden; position: absolute; width: 0.1px; height: 0.1px;">
                        <input id="anbieterIDAdditionalFilter" name="AnbieterID" autocorrect="off" type="text" style="visibility: hidden; position: absolute; width: 0.1px; height: 0.1px;">
                        <input id="globalObjectIdRemovedAdditionalFilter" name="GlobalObjectIdRemoved" autocorrect="off" type="text" style="visibility: hidden; position: absolute; width: 0.1px; height: 0.1px;">
                        <div id="additionalFilterValidationMessage" style="color: #f33;"></div>
                    </div>
                    <div class="modal_fix_btn_footer">
                        <input id="realSubmitButton" type="submit" class="btn_01 ci_color btn_100p js-submit" value="Übernehmen" />
                        <div class="clear"></div>
                        <a href="#" id="clearStatisticsFilter" class="link_02 padding_none">Weitere Kriterien zurücksetzen</a>
                    </div>
            </div>
        </div>
    </div>
    `,
});