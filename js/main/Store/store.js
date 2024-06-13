import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        masterdata: {
            DeviceType: {
                Tablet: false,
                Mobile: false
            }
        },
        mainchart: {
            HasData: true,
            HasPieChartData: true,
            TotalCountInSearchAllObjects: "4.403.928",
            TotalCountInListAllObjects: "88.518",
            TotalCountInExposeVisitAllObjects: "4.370",
            TotalCountPerAgentAllObjects: "0",
            TotalCountPerEmailAllObjects: "138",
            TotalCountPerTelefonAllObjects: "71",
            TotalCountPerAllCategoriesAllObjects: "209",
            ClickRate: "4,9%"
        },
        mainpiechart: {
            HasData: true,
            HasPieChartData: true,
            isPDFVersion: false,
            IsPerObjektPDF: false,
            data: [{ name: 'Wohnung', y: 100 }]
        },
        totalstatistics: {
            categories: ["18.08.2017", "11.03.2018", "12.03.2018", "13.03.2018", "14.03.2018", "15.03.2018", "16.03.2018", "17.03.2018", "18.03.2018", "19.03.2018", "20.03.2018", "21.03.2018", "23.03.2018", "24.03.2018", "25.03.2018", "26.03.2018", "27.03.2018", "28.03.2018", "29.03.2018", "30.03.2018", "31.03.2018", "01.04.2018", "02.04.2018", "03.04.2018", "04.04.2018", "05.04.2018", "06.04.2018", "07.04.2018", "08.04.2018", "09.04.2018", "10.04.2018", "18.04.2018", "19.04.2018", "20.04.2018", "21.04.2018", "22.04.2018", "23.04.2018", "24.04.2018", "07.07.2019"],
            data1: [0, 223, 282, 241, 144, 159, 126, 124, 112, 140, 109, 77, 120, 149, 158, 166, 145, 113, 87, 88, 63, 100, 105, 95, 115, 106, 87, 73, 82, 93, 0, 58, 123, 114, 66, 121, 127, 79, 0],
            data2: [0, 15, 15, 13, 10, 3, 10, 4, 5, 9, 10, 3, 11, 6, 6, 11, 9, 3, 2, 2, 1, 0, 4, 1, 6, 8, 1, 5, 1, 4, 0, 1, 12, 1, 2, 3, 5, 7, 0]
        },
        clickrate: {
            isPDFVersion: false,
            IsPerObjektPDF: false,
            XAxisDates: ["18.08.2017", "11.03.2018", "12.03.2018", "13.03.2018", "14.03.2018", "15.03.2018", "16.03.2018", "17.03.2018", "18.03.2018", "19.03.2018", "20.03.2018", "21.03.2018", "23.03.2018", "24.03.2018", "25.03.2018", "26.03.2018", "27.03.2018", "28.03.2018", "29.03.2018", "30.03.2018", "31.03.2018", "01.04.2018", "02.04.2018", "03.04.2018", "04.04.2018", "05.04.2018", "06.04.2018", "07.04.2018", "08.04.2018", "09.04.2018", "10.04.2018", "18.04.2018", "19.04.2018", "20.04.2018", "21.04.2018", "22.04.2018", "23.04.2018", "24.04.2018", "29.06.2019"],
            ClickRates: [0.0, 14.4, 11.9, 11.0, 6.7, 9.0, 8.0, 7.9, 6.0, 8.0, 5.7, 7.9, 11.2, 8.5, 8.2, 0.5, 7.7, 6.9, 6.3, 5.9, 4.8, 6.1, 5.9, 5.1, 6.8, 6.1, 5.6, 5.6, 4.9, 4.9, 0.0, 9.0, 6.7, 7.3, 4.4, 6.5, 6.3, 5.7, 0.0]
        },
        countinsearch: {
            isPDFVersion: false,
            IsPerObjektPDF: false,
            XAxisDates: ["18.08.2017", "11.03.2018", "12.03.2018", "13.03.2018", "14.03.2018", "15.03.2018", "16.03.2018", "17.03.2018", "18.03.2018", "19.03.2018", "20.03.2018", "21.03.2018", "23.03.2018", "24.03.2018", "25.03.2018", "26.03.2018", "27.03.2018", "28.03.2018", "29.03.2018", "30.03.2018", "31.03.2018", "01.04.2018", "02.04.2018", "03.04.2018", "04.04.2018", "05.04.2018", "06.04.2018", "07.04.2018", "08.04.2018", "09.04.2018", "10.04.2018", "18.04.2018", "19.04.2018", "20.04.2018", "21.04.2018", "22.04.2018", "23.04.2018", "24.04.2018", "29.06.2019"],
            CountInSearchOnDate: [0, 289270, 135972, 268582, 127880, 116175, 108471, 106353, 131390, 127190, 127772, 114092, 104188, 0, 118287123728, 116597, 108779, 97766, 105511, 97406, 126791, 123516, 122347, 124914, 119398, 99040, 90896, 103193, 133528, 0, 113912, 111717, 106928, 108521, 123841, 136471, 133506, 0],
            NumOfActiveObjectsOnDate: [0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        },
        contactvisit: {
            isPDFVersion: false,
            IsPerObjektPDF: false,
            XAxisDates: ["18.08.2017", "11.03.2018", "12.03.2018", "13.03.2018", "14.03.2018", "15.03.2018", "16.03.2018", "17.03.2018", "18.03.2018", "19.03.2018", "20.03.2018", "21.03.2018", "23.03.2018", "24.03.2018", "25.03.2018", "26.03.2018", "27.03.2018", "28.03.2018", "29.03.2018", "30.03.2018", "31.03.2018", "01.04.2018", "02.04.2018", "03.04.2018", "04.04.2018", "05.04.2018", "06.04.2018", "07.04.2018", "08.04.2018", "09.04.2018", "10.04.2018", "18.04.2018", "19.04.2018", "20.04.2018", "21.04.2018", "22.04.2018", "23.04.2018", "24.04.2018", "29.06.2019"],
            TotalContacts: [0, 15, 15, 13, 10, 3, 10, 4, 5, 9, 10, 3, 11, 6, 6, 11, 9, 3, 2, 2, 1, 0, 4, 1, 6, 8, 1, 5, 1, 4, 0, 1, 12, 1, 2, 3, 5, 7, 0],
            NumOfContactsPerEmail: [0, 11, 6, 8, 3, 0, 8, 2, 3, 5, 7, 1, 3, 2, 3, 7, 4, 1, 1, 1, 1, 0, 4, 1, 6, 8, 1, 5, 1, 4, 0, 1, 12, 1, 2, 3, 5, 7, 0],
            NumOfContactsPerTelephone: [0, 4, 9, 5, 7, 3, 2, 2, 2, 4, 3, 2, 8, 4, 3, 4, 5, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            NumOfActiveObjectsOnDate: [0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        },
        countinlist: {
            isPDFVersion: false,
            IsPerObjektPDF: false,
            XAxisDates: ["18.08.2017", "11.03.2018", "12.03.2018", "13.03.2018", "14.03.2018", "15.03.2018", "16.03.2018", "17.03.2018", "18.03.2018", "19.03.2018", "20.03.2018", "21.03.2018", "23.03.2018", "24.03.2018", "25.03.2018", "26.03.2018", "27.03.2018", "28.03.2018", "29.03.2018", "30.03.2018", "31.03.2018", "01.04.2018", "02.04.2018", "03.04.2018", "04.04.2018", "05.04.2018", "06.04.2018", "07.04.2018", "08.04.2018", "09.04.2018", "10.04.2018", "18.04.2018", "19.04.2018", "20.04.2018", "21.04.2018", "22.04.2018", "23.04.2018", "24.04.2018", "29.06.2019"],
            CountInListOnDate: [0, 1549, 2375, 2195, 2158, 1763, 1581, 1568, 1880, 1758, 1902, 971, 1072, 1763, 1927, 30417, 1883, 1633, 1377, 1482, 1318, 1638, 1794, 1862, 1690, 1738, 1556, 1298, 1672, 1884, 1, 646, 1849, 1568, 1512, 1858, 2001, 1379, 0],
            NumOfActiveObjectsOnDate: [0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        },
        countsuchagent: {
            isPDFVersion: false,
            IsPerObjektPDF: false,
            XAxisDates: ["18.08.2017", "11.03.2018", "12.03.2018", "13.03.2018", "14.03.2018", "15.03.2018", "16.03.2018", "17.03.2018", "18.03.2018", "19.03.2018", "20.03.2018", "21.03.2018", "23.03.2018", "24.03.2018", "25.03.2018", "26.03.2018", "27.03.2018", "28.03.2018", "29.03.2018", "30.03.2018", "31.03.2018", "01.04.2018", "02.04.2018", "03.04.2018", "04.04.2018", "05.04.2018", "06.04.2018", "07.04.2018", "08.04.2018", "09.04.2018", "10.04.2018", "18.04.2018", "19.04.2018", "20.04.2018", "21.04.2018", "22.04.2018", "23.04.2018", "24.04.2018", "29.06.2019"],
            NumOfContactsPerAgent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            NumOfActiveObjectsOnDate: [0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        },
        exposevisit: {
            isPDFVersion: false,
            IsPerObjektPDF: false,
            XAxisDates: ["18.08.2017", "11.03.2018", "12.03.2018", "13.03.2018", "14.03.2018", "15.03.2018", "16.03.2018", "17.03.2018", "18.03.2018", "19.03.2018", "20.03.2018", "21.03.2018", "23.03.2018", "24.03.2018", "25.03.2018", "26.03.2018", "27.03.2018", "28.03.2018", "29.03.2018", "30.03.2018", "31.03.2018", "01.04.2018", "02.04.2018", "03.04.2018", "04.04.2018", "05.04.2018", "06.04.2018", "07.04.2018", "08.04.2018", "09.04.2018", "10.04.2018", "18.04.2018", "19.04.2018", "20.04.2018", "21.04.2018", "22.04.2018", "23.04.2018", "24.04.2018", "29.06.2019"],
            CountExposeVisit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            NumOfActiveObjectsOnDate: [0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        },
        CumulativeStatsPerDayAllObjects: [{
            Date: 'Fr. 18.08.17',
            CountInSearch: 0,
            CountInList: 0,
            CountExposeVisit: 0,
            CountAgentMails: 0,
            CountEmailRequest: 0,
            CountTelRequest: 0,
            ClickRate: 0
        }, {
            Date: 'So. 11.03.18',
            CountInSearch: 289.270,
            CountInList: 3.762,
            CountExposeVisit: 674,
            CountAgentMails: 129,
            CountEmailRequest: 0,
            CountTelRequest: 129,
            ClickRate: "17,9%"
        }],
        DetailsPerObject: [{ "globalObjectId": "c2fc090e-2e04-4ed3-8541-131ca0647c3c", "globalUserId": 13197, "projectId": null, "anzObjFound": 17981, "anzObjCall": 1183, "anzObjRequest": 1, "anzObjTelephonCall": 5, "anzObjInResult": 5119459, "anzObjInAgentMails": 0, "referenceNumber": "S718MW  19", "headline": "Tolle 2-Zimmer-Wohnung mit Südbalkon in Bischofsmais", "street": "Hochdorferstr.", "postalCode": "94253", "city": "Bischofsmais", "estateType": 1, "distributionType": 2, "createdOn": "2019-04-11T16:04:39.793", "status": 7 }, { "globalObjectId": "ac7bacd0-9210-45e2-b599-429821f37be0", "globalUserId": 13197, "projectId": null, "anzObjFound": 659, "anzObjCall": 86, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 24638, "anzObjInAgentMails": 214, "referenceNumber": "S430MH  19", "headline": "Tolle DHH in Deggendorf-Simmling!", "street": "Simmling", "postalCode": "94469", "city": "Deggendorf", "estateType": 2, "distributionType": 2, "createdOn": "2019-07-08T09:27:44.337", "status": 7 }, { "globalObjectId": "afd5f2f5-3af8-491d-b77a-532f7dff8a96", "globalUserId": 13197, "projectId": null, "anzObjFound": 14074, "anzObjCall": 710, "anzObjRequest": 1, "anzObjTelephonCall": 3, "anzObjInResult": 2139030, "anzObjInAgentMails": 3, "referenceNumber": "2226", "headline": "Zwangsversteigerung! ZFH in Kümmersbruck - OT", "street": "Erzbergstr.", "postalCode": "92245", "city": "Kümmersbruck", "estateType": 2, "distributionType": 1, "createdOn": "2019-03-01T15:09:27.767", "status": 7 }, { "globalObjectId": "ba4773ff-4315-4f40-a61c-73216cf5c27e", "globalUserId": 13197, "projectId": null, "anzObjFound": 1563, "anzObjCall": 92, "anzObjRequest": 1, "anzObjTelephonCall": 1, "anzObjInResult": 505276, "anzObjInAgentMails": 2, "referenceNumber": "S724MW  19", "headline": "Tolle 2-Zi.-Whg. in Winzer-Ortsteil!", "street": "Vorderreckenberg", "postalCode": "94577", "city": "Winzer", "estateType": 1, "distributionType": 2, "createdOn": "2019-05-14T08:31:24.373", "status": 666 }, { "globalObjectId": "ebf836f9-da7d-4838-a676-b9512606d732", "globalUserId": 13197, "projectId": null, "anzObjFound": 12628, "anzObjCall": 379, "anzObjRequest": 2, "anzObjTelephonCall": 3, "anzObjInResult": 2196537, "anzObjInAgentMails": 0, "referenceNumber": "S1682H   2", "headline": "Pension in Riedlhütte - Bayer. Wald", "street": "Geheimrat-Frank-Str. 6", "postalCode": "94566", "city": "Riedlhütte", "estateType": 2, "distributionType": 1, "createdOn": "2019-03-22T17:29:50.997", "status": 0 }, { "globalObjectId": "a8dbc2be-e64b-44d1-b071-e8238d52288a", "globalUserId": 13197, "projectId": null, "anzObjFound": 15561, "anzObjCall": 961, "anzObjRequest": 2, "anzObjTelephonCall": 5, "anzObjInResult": 2138604, "anzObjInAgentMails": 7, "referenceNumber": "S1687H   1", "headline": "Vielseitig nutzbares Anwesen bei Tittling / Lkrs. Passau", "street": "Grafenring", "postalCode": "94104", "city": "Witzmannsberg", "estateType": 2, "distributionType": 1, "createdOn": "2019-05-20T18:17:52.627", "status": 7 }],
        SumForAllObjectsByGlobalObjectId: [{ "globalObjectId": "c2fc090e-2e04-4ed3-8541-131ca0647c3c", "globalUserId": 13197, "projectId": null, "anzObjFound": 17981, "anzObjCall": 1183, "anzObjRequest": 1, "anzObjTelephonCall": 5, "anzObjInResult": 5119459, "anzObjInAgentMails": 0, "referenceNumber": "S718MW  19", "headline": "Tolle 2-Zimmer-Wohnung mit Südbalkon in Bischofsmais", "street": "Hochdorferstr.", "postalCode": "94253", "city": "Bischofsmais", "estateType": 1, "distributionType": 2, "createdOn": "2019-04-11T16:04:39.793", "status": 7 }, { "globalObjectId": "ac7bacd0-9210-45e2-b599-429821f37be0", "globalUserId": 13197, "projectId": null, "anzObjFound": 659, "anzObjCall": 86, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 24638, "anzObjInAgentMails": 214, "referenceNumber": "S430MH  19", "headline": "Tolle DHH in Deggendorf-Simmling!", "street": "Simmling", "postalCode": "94469", "city": "Deggendorf", "estateType": 2, "distributionType": 2, "createdOn": "2019-07-08T09:27:44.337", "status": 7 }, { "globalObjectId": "afd5f2f5-3af8-491d-b77a-532f7dff8a96", "globalUserId": 13197, "projectId": null, "anzObjFound": 14074, "anzObjCall": 710, "anzObjRequest": 1, "anzObjTelephonCall": 3, "anzObjInResult": 2139030, "anzObjInAgentMails": 3, "referenceNumber": "2226", "headline": "Zwangsversteigerung! ZFH in Kümmersbruck - OT", "street": "Erzbergstr.", "postalCode": "92245", "city": "Kümmersbruck", "estateType": 2, "distributionType": 1, "createdOn": "2019-03-01T15:09:27.767", "status": 7 }, { "globalObjectId": "ba4773ff-4315-4f40-a61c-73216cf5c27e", "globalUserId": 13197, "projectId": null, "anzObjFound": 1563, "anzObjCall": 92, "anzObjRequest": 1, "anzObjTelephonCall": 1, "anzObjInResult": 505276, "anzObjInAgentMails": 2, "referenceNumber": "S724MW  19", "headline": "Tolle 2-Zi.-Whg. in Winzer-Ortsteil!", "street": "Vorderreckenberg", "postalCode": "94577", "city": "Winzer", "estateType": 1, "distributionType": 2, "createdOn": "2019-05-14T08:31:24.373", "status": 666 }, { "globalObjectId": "ebf836f9-da7d-4838-a676-b9512606d732", "globalUserId": 13197, "projectId": null, "anzObjFound": 12628, "anzObjCall": 379, "anzObjRequest": 2, "anzObjTelephonCall": 3, "anzObjInResult": 2196537, "anzObjInAgentMails": 0, "referenceNumber": "S1682H   2", "headline": "Pension in Riedlhütte - Bayer. Wald", "street": "Geheimrat-Frank-Str. 6", "postalCode": "94566", "city": "Riedlhütte", "estateType": 2, "distributionType": 1, "createdOn": "2019-03-22T17:29:50.997", "status": 0 }, { "globalObjectId": "a8dbc2be-e64b-44d1-b071-e8238d52288a", "globalUserId": 13197, "projectId": null, "anzObjFound": 15561, "anzObjCall": 961, "anzObjRequest": 2, "anzObjTelephonCall": 5, "anzObjInResult": 2138604, "anzObjInAgentMails": 7, "referenceNumber": "S1687H   1", "headline": "Vielseitig nutzbares Anwesen bei Tittling / Lkrs. Passau", "street": "Grafenring", "postalCode": "94104", "city": "Witzmannsberg", "estateType": 2, "distributionType": 1, "createdOn": "2019-05-20T18:17:52.627", "status": 7 }],
        DetailsPerObject2: [{ "datum": "2019-06-09T00:00:00", "anzObjFound": 2553, "anzObjCall": 150, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 533919, "anzObjInAgentMails": 2, "countObjects": 5 }, { "datum": "2019-06-10T00:00:00", "anzObjFound": 2791, "anzObjCall": 157, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 579594, "anzObjInAgentMails": 2, "countObjects": 5 }, { "datum": "2019-06-11T00:00:00", "anzObjFound": 2306, "anzObjCall": 147, "anzObjRequest": 1, "anzObjTelephonCall": 2, "anzObjInResult": 567448, "anzObjInAgentMails": 1, "countObjects": 5 }, { "datum": "2019-06-12T00:00:00", "anzObjFound": 1824, "anzObjCall": 125, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 357533, "anzObjInAgentMails": 7, "countObjects": 4 }, { "datum": "2019-06-13T00:00:00", "anzObjFound": 1807, "anzObjCall": 90, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 366356, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-14T00:00:00", "anzObjFound": 1719, "anzObjCall": 79, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 318627, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-15T00:00:00", "anzObjFound": 1741, "anzObjCall": 109, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 343213, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-16T00:00:00", "anzObjFound": 2568, "anzObjCall": 151, "anzObjRequest": 2, "anzObjTelephonCall": 0, "anzObjInResult": 407266, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-17T00:00:00", "anzObjFound": 2036, "anzObjCall": 86, "anzObjRequest": 0, "anzObjTelephonCall": 1, "anzObjInResult": 356753, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-18T00:00:00", "anzObjFound": 1653, "anzObjCall": 133, "anzObjRequest": 0, "anzObjTelephonCall": 5, "anzObjInResult": 369679, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-19T00:00:00", "anzObjFound": 1714, "anzObjCall": 107, "anzObjRequest": 0, "anzObjTelephonCall": 1, "anzObjInResult": 184924, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-20T00:00:00", "anzObjFound": 1981, "anzObjCall": 130, "anzObjRequest": 0, "anzObjTelephonCall": 1, "anzObjInResult": 409458, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-21T00:00:00", "anzObjFound": 1693, "anzObjCall": 97, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 332003, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-22T00:00:00", "anzObjFound": 1803, "anzObjCall": 86, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 331193, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-23T00:00:00", "anzObjFound": 2104, "anzObjCall": 124, "anzObjRequest": 2, "anzObjTelephonCall": 0, "anzObjInResult": 385994, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-24T00:00:00", "anzObjFound": 1860, "anzObjCall": 79, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 367193, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-25T00:00:00", "anzObjFound": 1657, "anzObjCall": 89, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 353735, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-26T00:00:00", "anzObjFound": 1955, "anzObjCall": 85, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 432016, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-27T00:00:00", "anzObjFound": 1905, "anzObjCall": 101, "anzObjRequest": 0, "anzObjTelephonCall": 1, "anzObjInResult": 410507, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-28T00:00:00", "anzObjFound": 1924, "anzObjCall": 126, "anzObjRequest": 1, "anzObjTelephonCall": 1, "anzObjInResult": 419865, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-29T00:00:00", "anzObjFound": 2220, "anzObjCall": 138, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 431594, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-06-30T00:00:00", "anzObjFound": 2177, "anzObjCall": 109, "anzObjRequest": 0, "anzObjTelephonCall": 1, "anzObjInResult": 423619, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-07-01T00:00:00", "anzObjFound": 2353, "anzObjCall": 84, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 457302, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-07-02T00:00:00", "anzObjFound": 2236, "anzObjCall": 95, "anzObjRequest": 0, "anzObjTelephonCall": 4, "anzObjInResult": 399488, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-07-03T00:00:00", "anzObjFound": 2111, "anzObjCall": 95, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 353561, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-07-04T00:00:00", "anzObjFound": 2057, "anzObjCall": 121, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 371856, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-07-05T00:00:00", "anzObjFound": 2358, "anzObjCall": 102, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 483693, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-07-06T00:00:00", "anzObjFound": 2127, "anzObjCall": 110, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 423412, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-07-07T00:00:00", "anzObjFound": 2442, "anzObjCall": 123, "anzObjRequest": 0, "anzObjTelephonCall": 0, "anzObjInResult": 511183, "anzObjInAgentMails": 0, "countObjects": 4 }, { "datum": "2019-07-08T00:00:00", "anzObjFound": 2791, "anzObjCall": 183, "anzObjRequest": 1, "anzObjTelephonCall": 0, "anzObjInResult": 440560, "anzObjInAgentMails": 214, "countObjects": 5 }],
        data: []
    },
    mutations: {
        setData(state, data) {
            state.data = data
        },
        update(state, data) {
            state.countinsearch.CountInSearchOnDate = [0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        }
    },
    actions: {
        loadCookie({ commit }) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", qrHref, true);
            xmlHttp.responseType = 'blob';
            xmlHttp.setRequestHeader("Authorization", "Bearer " + qrLink.getAttribute('data-jwt'));
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    var pdf = xmlHttp.response;
                    var blob = new Blob([pdf], { type: 'application/pdf' });
                    let a = document.createElement("a");
                    a.style = "display: none";
                    document.body.appendChild(a);
                    //Create a DOMString representing the blob 
                    //and point the link element towards it
                    let url = window.URL.createObjectURL(blob);
                    a.href = url;
                    a.download = 'myFile.pdf';
                    //programatically click the link to trigger the download
                    a.click();
                    //release the reference to the file by revoking the Object URL
                    window.URL.revokeObjectURL(url);
                }
            };
            xmlHttp.send();
        },
        SumForAllObjectsByGlobalObjectId({ commit }, fromDate, toDate) {
            const headers = new Headers();
            headers.append('X-Client-Id', 'test');
            headers.append('X-Tenant', 'test');
            headers.append('X-Roles', 'PUBLIC');
            headers.append('Content-Type', 'application/json');
            headers.append('content-length', '113');

            const body = `{
                "globalUserId": 13197,
                "fromDate": fromDate,
                "toDate": toDate
            }`;

            const init = {
                method: 'POST',
                headers,
                body
            }

            fetch('https://estatestatistic.iwinsvc.net/EstateStatistic/v1/ObjectStatistic/SumForAllObjectsByGlobalObjectId', init)
                .then((response) => {
                    return response.text(); // or .json() or .blob() ...
                })
                .then((text) => {
                    // text is the response body
                })
                .catch((e) => {
                    // error in e.message
                });
        },
        SumForAllObjectsByDay({ commit }, fromDate, toDate) {
            const headers = new Headers();
            headers.append('X-Client-Id', 'test');
            headers.append('X-Tenant', 'test');
            headers.append('X-Roles', 'PUBLIC');
            headers.append('Content-Type', 'application/json');
            headers.append('content-length', '113');

            const body = `{
                "globalUserId": 13197,
                "fromDate": "2019-06-09T00:00:00.000Z",
                "toDate": "2019-07-08T00:00:00.000Z"
            }`;

            const init = {
                method: 'POST',
                headers,
                body
            }

            fetch('https://estatestatistic.iwinsvc.net/EstateStatistic/v1/ObjectStatistic/SumForAllObjectsByDay', init)
                .then((response) => {
                    return response.text(); // or .json() or .blob() ...
                })
                .then((text) => {
                    // text is the response body
                })
                .catch((e) => {
                    // error in e.message
                });
        },
        DetailsPerObject({ commit }, fromDate, toDate) {
            const headers = new Headers();
            headers.append('X-Client-Id', 'test');
            headers.append('X-Tenant', 'test');
            headers.append('X-Roles', 'PUBLIC');
            headers.append('Content-Type', 'application/json');
            headers.append('content-length', '148');

            const body = `{
                "globalObjectId": "c2fc090e-2e04-4ed3-8541-131ca0647c3c",
                "fromDate": "2019-06-09T00:00:00.000Z",
                "toDate": "2019-07-08T00:00:00.000Z"
            }`;

            const init = {
                method: 'POST',
                headers,
                body
            }

            fetch('https://estatestatistic.iwinsvc.net/EstateStatistic/v1/ObjectStatistic/DetailsPerObject', init)
                .then((response) => {
                    return response.text(); // or .json() or .blob() ...
                })
                .then((text) => {
                    // text is the response body
                })
                .catch((e) => {
                    // error in e.message
                });
        },
        Projects({ commit }, fromDate, toDate) {
            const headers = new Headers();
            headers.append('content-length', '113');
            headers.append('X-Tenant', 'test');
            headers.append('X-Client-Id', 'test');
            headers.append('X-Roles', 'PUBLIC');
            headers.append('Content-Type', 'application/json');

            const body = `{
            "globalUserId": 13197,
            "fromDate": "2017-07-09T11:21:18.066Z",
            "toDate": "2019-07-09T11:21:18.066Z"
            }`;

            const init = {
                method: 'POST',
                headers,
                body
            }

            fetch('https://estatestatistic.iwinsvc.net/EstateStatistic/v1/ObjectStatistic/Projects', init)
                .then((response) => {
                    return response.text(); // or .json() or .blob() ...
                })
                .then((text) => {
                    // text is the response body
                })
                .catch((e) => {
                    // error in e.message
                });
        }
    }
});