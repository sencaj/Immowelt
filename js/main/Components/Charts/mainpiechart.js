import Vue from 'vue'
import store from '../../store/store'

export default Vue.component('mainpiechart_component', {
template: `
    <div>
        <div class="grid_12o12_l grid_09o12_m grid_12o12_s" v-bind:class="isPDF">
            <highcharts id="gesamtSt" :options="chart" :updateArgs="[true, false]" style="width:100%;" ref="mainpiechart"></highcharts>
        </div>
    </div>
    `,
    data () {
        return {
            mounted: false,
            chartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    style: {
                        fontFamily: "Open Sans"
                    }
                },
                credits: {
                    enabled: false
                },
                colors: ['#ffd470', '#ffb86f', '#80d3fe', '#90ee7e', '#7798bf', '#eeaaee', '#8bdfdf', '#ff71aa', '#88d575', '#df5353', '#6fa7e9', '#aaeeee', '#62dd93', '#ffa853', '#f4ec73', '#f89fc2'],
                title: {
                    useHTML: true,
                    text: 'Ihre Immobilienarten' + '<a href="#" data-remodal-target="piechart" class="padding_left_10"><i class="icon-info-circled size_f_20"></i></a>'  
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: false,
                        cursor: 'pointer',
                        innerSize: '65%',
                        size: '70%',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: 'Prozentsatz',
                    colorByPoint: true,
                    animation: false,
                    data: []
                }]
            }
        }
    },
    computed: {
        isPDF() {
            return { 'offset_01_l kontaktePadding': store.state.mainpiechart.isPDFVersion }
        },
        chart() {
            const chart = this.chartOptions
            const mpc = store.state.mainpiechart
            chart.series[0].data = this.mounted ? mpc.data : []
            return chart 
        }
    },
    mounted() {
        this.mounted = true
    }
});
