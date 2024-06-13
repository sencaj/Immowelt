import Vue from 'vue';
import store from '../../store/store';
import datepicker from 'vuejs-datepicker';

export default Vue.component('zeitraum_component', {
    template: `
    <div>
        <form action="#" method="post">
            <div class="iw_content">
                <div class="grid_row">
                    <div class="grid_12o12_s">
                        <div class="type clear">
                            <div class="filter_controls" style="white-space: unset !important;">
                                <div class="filter_control">
                                    <span class="padding_right_20 btn_row_height margin_bottom_10 filter_label">Zeitraum</span>
                                    <div class="picker_wrapper">
                                        <select class="picker valid" data-val="false" data-val-number="Es muss eine Zahl eingegeben werden." data-val-required="The TimeRange field is required." id="rangeSelector" name="TimeRange" required="false" aria-required="true" aria-invalid="false" aria-describedby="rangeSelector-error">
                                            <option value="last7days">Letzte 7 Tage</option>
                                            <option value="last30days">Letzte 30 Tage</option>
                                            <option value="last3month">Letzte 3 Monate</option>
                                            <option value="last6month">Letzte 6 Monate</option>
                                            <option value="last9month">Letzte 9 Monate</option>
                                            <option value="last12month">Letzte 12 Monate</option>
                                            <option value="Benutzerdefiniert">Benutzerdefiniert</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="filter_control" style="white-space: unset !important;">
                                    <span class="padding_right_20 btn_row_height margin_bottom_10 filter_label">von</span>
                                    <div class="w_170 date">
                                        <!-- <input aria-required="true" autocorrect="off" data-val="true" data-val-date="Es muss ein gültiges Datum eingegeben werden." data-val-required="The FromDate field is required." id="fromDate" input="disabled" name="FromDate" placeholder="Von" type="text" value="18.08.2017" class="hasDatepicker valid" aria-invalid="false" aria-describedby="fromDate-error"> -->
                                        <datepicker :value="date" :format="customFormatter">
                                            <div slot="beforeCalendarHeader" class="calender-header">
                                                Choose a Date
                                            </div>
                                        </datepicker>
                                        <span class="field-validation-valid" data-valmsg-for="FromDate" data-valmsg-replace="false">Die Eingabe ist ungültig.</span>
                                        <span class="field-validation-warning color_f_11" id="valDateFrom"></span>
                                        <span id="validationDateFrom" class="field-validation-error"></span>
                                    </div>
                                </div>

                                <div class="filter_control" style="white-space: unset !important;">
                                    <span class="padding_right_20 btn_row_height margin_bottom_10 filter_label">bis</span>                              
                                    <div class="w_170 date">
                                        <!-- <input aria-required="true" autocorrect="off" data-val="true" data-val-date="Es muss ein gültiges Datum eingegeben werden." data-val-required="The ToDate field is required." id="toDate" input="disabled" name="ToDate" placeholder="Bis" type="text" value="29.06.2019" class="hasDatepicker valid" aria-invalid="false" aria-describedby="toDate-error"> -->
                                        <datepicker :value="date" :format="customFormatter"></datepicker>
                                        <span class="field-validation-valid" data-valmsg-for="ToDate" data-valmsg-replace="false">Die Eingabe ist ungültig.</span>
                                        <span class="field-validation-warning color_f_11" id="valDateTo"></span>
                                        <span id="validationDateTo" class="field-validation-error"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="filter_module iw_left dropdown_w_100p extendFilter margin_bottom_10 margin_top_10">
                            <div class="js-header picker for_modal" data-toggle="modal" data-remodal-target="filterStatistic">
                                <span class="trigger advanced">
                                    Weitere Kriterien auswählen
                                </span>
                            </div>
                        </div>
                        <div id="suchKriterieRow" class="filter_module iw_left dropdown_w_100p extendFilter margin_bottom_10 margin_top_10"></div>
                        <div class="h_070"></div>
                        <input type="submit" id="zeitraumSubmit" class="btn_01 ci_color btn_100p js-submit submitButton" value="Ergebnisse anzeigen" @click.prevent="loadData"/>
                    </div>
                </div>
            </div>
        </form>
        <statisticfilter_component></statisticfilter_component>
    </div>
    `,
    data() {
        return {
            date: new Date(2016, 9,  16)
        }
    },
    components: {
        datepicker
    },
    methods: {
        loadData()  {
            store.dispatch('loadData')
        },
        customFormatter(date) {
            return date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
        }
    }
});