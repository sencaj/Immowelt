import Vue from 'vue';

export default Vue.component('table_component', {
    template: `
    <div class="content_wrapper padding_top_50">
        <div class="iw_content" style="overflow: initial;">
            <div class="grid_row">
                <ul class="tab_reiter">
                    <li class="grid_06o12 padding_right_0 iw_tab" v-bind:class="{'current': !activeTab}">
                        <a href="#tab-objekten" class="js-tab-link" id="objekten" @click="activeTab=0">nach Objekten</a>
                    </li>
                    <li class="grid_06o12 padding_right_0 iw_tab" v-bind:class="{'current': activeTab}">
                        <a href="#tab-kumuliert" class="js-tab-link" id="kumuliert" @click="activeTab=1" >kumuliert</a>
                    </li>
                </ul>
            </div>
            <div id="js-tabs">
                <div v-if="!activeTab" id="tab-objekten" class="js-tab">
                    <div class="grid_row padding_top_30">
                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s grid_12o12_print">

                            <!-- Table nach Objekten -->
                            <div id="objektentable">
                                <statistictableperobject_component ref="statistictableperobject"></statistictableperobject_component>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="iw_list_content margin_bottom_none color_bg_06">
                        <div class="pagination t_center padding_top_30">
                            <div id="objektentable-pagination" class="site-numbers">
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else id="tab-kumuliert" class="js-tab">
                    <div class="grid_row">

                        <countinsearch_component ref="countinserach"></countinsearch_component>

                        <countinlist_component ref="countinlist"></countinlist_component>

                        <exposevisit_component ref="exposevisit"></exposevisit_component>

                        <countsuchagent_component ref="countsuchagent"></countsuchagent_component>

                        <contactvisit_component ref="contactvisit"></contactvisit_component>

                        <clickrate_component ref="clickrate"></clickrate_component>

                        <div class="grid_12o12_l grid_12o12_m grid_12o12_s grid_12o12_print margin_top_20">

                            <!-- Table Kumuliert -->
                            <div id="kumulierttable">
                                <statistictableculmulativeperday_component></statistictableculmulativeperday_component>
                            </div>
                        </div>
                    </div>
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