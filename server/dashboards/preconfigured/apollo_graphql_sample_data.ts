/// <reference path="../../../client/@types/types.d.ts"/>
import * as _ from 'lodash';

// The following line is important to keep in that format so it can be rendered into the page
export const config: IDashboardConfig = /*return*/ {
  id: "apollo_gql_sample_data",
  name: "Apollo + GraphQL based dashboard (with stub data)",
  icon: "dashboard",
  url: "apollo_gql",
  description: "A template using the new format which leverages the GraphQL server (works with stub data)",
  preview: "/images/apollo-gql-preview.png",
  html: `<div>
           <h1>This is an apollo-graphql enabled IBEX dashboard (stubs data)</h1>
         </div>`,
  config: {
    connections: {
    },
    layout: {
      isDraggable: true,
      isResizable: true,
      rowHeight: 20,
      verticalCompact: false,
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
      layouts: {
        lg: [
          {
            w: 5,
            h: 12,
            x: 0,
            y: 4,
            i: "0LineChart",
            minW: undefined,
            maxW: undefined,
            minH: undefined,
            maxH: undefined,
            moved: false,
            static: false,
            isDraggable: undefined,
            isResizable: undefined
          },
          {
            w: 6,
            h: 12,
            x: 5,
            y: 4,
            i: "1LineChart",
            minW: undefined,
            maxW: undefined,
            minH: undefined,
            maxH: undefined,
            moved: false,
            static: false,
            isDraggable: undefined,
            isResizable: undefined
          },
          {
            w: 3,
            h: 12,
            x: 0,
            y: 16,
            i: "2PieData",
            minW: undefined,
            maxW: undefined,
            minH: undefined,
            maxH: undefined,
            moved: false,
            static: false,
            isDraggable: undefined,
            isResizable: undefined
          },
          {
            w: 8,
            h: 12,
            x: 3,
            y: 16,
            i: "3BarChart",
            minW: undefined,
            maxW: undefined,
            minH: undefined,
            maxH: undefined,
            moved: false,
            static: false,
            isDraggable: undefined,
            isResizable: undefined
          }
        ],
        sm: [
          {
            w: 5,
            h: 12,
            x: 0,
            y: 5,
            i: "0LineChart",
            minW: undefined,
            maxW: undefined,
            minH: undefined,
            maxH: undefined,
            moved: false,
            static: false,
            isDraggable: undefined,
            isResizable: undefined
          },
          {
            w: 6,
            h: 12,
            x: 0,
            y: 17,
            i: "1LineChart",
            minW: undefined,
            maxW: undefined,
            minH: undefined,
            maxH: undefined,
            moved: false,
            static: false,
            isDraggable: undefined,
            isResizable: undefined
          },
          {
            w: 3,
            h: 12,
            x: 0,
            y: 29,
            i: "2PieData",
            minW: undefined,
            maxW: undefined,
            minH: undefined,
            maxH: undefined,
            moved: false,
            static: false,
            isDraggable: undefined,
            isResizable: undefined
          },
          {
            w: 6,
            h: 12,
            x: 0,
            y: 41,
            i: "3BarChart",
            minW: undefined,
            maxW: undefined,
            minH: undefined,
            maxH: undefined,
            moved: false,
            static: false,
            isDraggable: undefined,
            isResizable: undefined
          }
        ]
      }
    }
  },
  dataSources: [],
  elements: [],
  filters: [],
  visual: [
    {
      Type: "LineChart",
      query: "predefined_users_timeline1",
      source: "file::sampleDB.json",
      title: "MyDynamicTitle",
      subtitle: "Dyamic Subtitle for fun",
      filterId: "channelsFilter1",
      filterKey: "channel",
      dialog: "dialog2"
    },
    {
      Type: "LineChart",
      query: "predefined_users_timeline2",
      source: "file::sampleDB.json",
      title: "MyDynamicTitle2",
      subtitle: "Dyamic Subtitle for fun2",
      dialog: "dialog1"
    },
    {
      Type: "PieData", query: "predefined_pie1",
      source: "file::sampleDB.json",
      title: "Pie title", subtitle: "Dynamic Subtitle for pie"
    },
    {
      Type: "BarChart",
      query: "predefined_barchart1",
      source: "file::sampleDB.json",
      title: "This is a dynamic bar title",
      subtitle: "Suby sub title",
      filterId: "channelsFilter1",
      filterKey: "channel",
      dialog: "dialog1"
    }
  ],
  visualFilters: [{
    Type: "DropDown", query: "predefined_channels1", source: "file::sampleDB.json",
    title: "MyDropDownTitle", id: "channelsFilter1"
  }],
  visualDialog: [
    {
      Type: "Dialog",
      id: "dialog2",
      visual: [
        {
          Type: "PieData", query: "predefined_pie1", source: "file::sampleDB.json",
          title: "Pie title", subtitle: "Dynamic Subtitle for pie"
        },
        {
          Type: "LineChart", query: "predefined_users_timeline1", source: "file::sampleDB.json",
          title: "MyDynamicTitle", filters: "channelsFilter1"
        }
      ]
    },
    {
      Type: "Dialog", id: "dialog1", visual: [{
        Type: "LineChart", query: "predefined_users_timeline2",
        source: "file::sampleDB.json",
        title: "papa"
      }]
    }
  ]
}