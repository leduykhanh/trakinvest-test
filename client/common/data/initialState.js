
const All_EVENTS = [{
            'title': 'All Day Event',
            'start': new Date(2016, 3, 0),
            image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },
          {
            'title': 'Long Event',
            'start': new Date(2016, 3, 7),
            'end': new Date(2016, 3, 10),
            image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },

          {
            'title': 'DTS STARTS',
            'start': new Date(2016, 12, 13, 0, 0, 0),
            'end': new Date(2016, 12, 20, 0, 0, 0),
            image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },

          {
            'title': 'DTS ENDS',
            'start': new Date(2016, 10, 6, 0, 0, 0),
            'end': new Date(2016, 10, 13, 0, 0, 0),
            image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },

          {
            'title': 'Some Event',
            'start': new Date(2016, 3, 9, 0, 0, 0),
            'end': new Date(2016, 3, 9, 0, 0, 0),
            image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },
          {
            'title': 'Conference',
            'start': new Date(2016, 3, 11),
            'end': new Date(2016, 3, 13),
            desc: 'Big conference for important people',
            image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },
          {
            'title': 'Meeting',
            'start': new Date(2016, 3, 12, 10, 30, 0, 0),
            'end': new Date(2016, 3, 12, 12, 30, 0, 0),
            desc: 'Pre-meeting meeting, to prepare for the meeting',
            image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },
          {
            'title': 'Lunch',
            'start':new Date(2016, 3, 12, 12, 0, 0, 0),
            'end': new Date(2016, 3, 12, 13, 0, 0, 0),
            desc: 'Power lunch',
            image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },
          {
            'title': 'Meeting',
            'start':new Date(2016, 3, 12,14, 0, 0, 0),
            'end': new Date(2016, 3, 12,15, 0, 0, 0),
            image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },
          {
            'title': 'Happy Hour',
            'start':new Date(2016, 3, 12, 17, 0, 0, 0),
            'end': new Date(2016, 3, 12, 17, 30, 0, 0),
            desc: 'Most important meal of the day',
           image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },
          {
            'title': 'Dinner',
            'start':new Date(2016, 3, 12, 20, 0, 0, 0),
            'end': new Date(2016, 3, 12, 21, 0, 0, 0),
           image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          },
          {
            'title': 'Birthday Party',
            'start':new Date(2016, 3, 11, 7, 0, 0),
            'end': new Date(2016, 3, 11, 10, 30, 0),
           image:"/public/static/images/news/news-sample-1.png",
            date: "13 Nov 2016",
            company: "HSBC bank (HK:5)",
            start_time: "11:00 am",
            end_time: "12:30 pm"
          }
      ];

const ALL_CONNECTIONS = [{"title": "AgriTrade 1", "stock_quote": "ABC1"},
            {"title": "AgriTrade 2", "stock_quote": "ABC1"},
            {"title": "AgriTrade 3", "stock_quote": "ABC1"},
            {"title": "AgriTrade 4", "stock_quote": "ABC1"},
            {"title": "AgriTrade 5", "stock_quote": "ABC1"},
            {"title": "AgriTrade 6", "stock_quote": "ABC1"},
            {"title": "AgriTrade 7", "stock_quote": "ABC1"}];

const ALL_NEWS = [
    {
        id: 1,
        image: "/public/static/images/news/news-sample-1.png",
        date: "13 Nov 2016",
        company: "HSBC bank (HK:5)",
        title: "Jan-Sep profits lower on weeaker revenue"
    },
    {
        id: 2,
        image: "/public/static/images/news/news-sample-1.png",
        date: "13 Nov 2016",
        company: "HSBC bank (HK:5)",
        title: "Jan-Sep profits lower on weeaker revenue"
    },
    {
        id: 3,
       image: "/public/static/images/news/news-sample-1.png",
        date: "13 Nov 2016",
        company: "HSBC bank (HK:5)",
        title: "Jan-Sep profits lower on weeaker revenue"
    },
    {
        id: 4,
        image: "/public/static/images/news/news-sample-1.png",
        date: "13 Nov 2016",
        company: "HSBC bank (HK:5)",
        title: "Jan-Sep profits lower on weeaker revenue"
    },
    {
        id: 5,
        image: "/public/static/images/news/news-sample-1.png",
        date: "13 Nov 2016",
        company: "HSBC bank (HK:5)",
        title: "Jan-Sep profits lower on weeaker revenue"
    },
    {
        id: 6,
        image: "/public/static/images/news/news-sample-1.png",
        date: "13 Nov 2016",
        company: "HSBC bank (HK:5)",
        title: "Jan-Sep profits lower on weeaker revenue"
    }

];
const default_pagination_state= {
     isFetching: false,
    nextPageUrl: undefined,
    page: 0,
    count:0,
    ids:[],
    pageSize:9
}
export const initial_state = {
    "pagination":{



    },
    "autoSuggest":{
    },
    "entities": {
        "connections": {
            "all": {}
        },
        "news": {
            "all":{},
            "current_news": {}

        },
        "events":{
            "all":{}
        },
        "notifications": {
            "count": 4
        }
    }
}