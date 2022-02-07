import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-tickets',
  templateUrl: './help-tickets.component.html',
  styleUrls: ['./help-tickets.component.css']
})
export class HelpTicketsComponent implements OnInit {

  cards: any =  [{
  "title": "Fast Casual ",
  "color": "#1AB001",
  "tickets" : [
    {"title" : "Week ","count" : 32},
    {"title" : "MTD ","count" : 126},
    {"title" : "QDT","count" : 409 },
    {"title" : "YTD","count" : 1324}
  ],
  "weekly" : [
      {"title" : "# Restaurants","count" : 32},
      {"title" : "Avg. Resolution Time","count" : 2},
      {"title" : "Ticket Type","count" : 32 },
    ]

  },{
  "title": "Casual Dine in",
  "color": "#239B9F",
  "tickets" : [
    {"title" : "Week ","count" : 32},
    {"title" : "MTD ","count" : 126},
    {"title" : "QDT","count" : 409 },
    {"title" : "YTD","count" : 1324}
  ],
  "weekly" : [
      {"title" : "# Restaurants","count" : 32},
      {"title" : "Avg. Resolution Time","count" : 2},
      {"title" : "Ticket Type","count" : 32 },
    ]
  },{
  "title": "Fine Dining",
  "color": "#23A476",
  "tickets" : [
    {"title" : "Week ","count" : 32},
    {"title" : "MTD ","count" : 126},
    {"title" : "QDT","count" : 409 },
    {"title" : "YTD","count" : 1324}
  ],
  "weekly" : [
      {"title" : "# Restaurants","count" : 32},
      {"title" : "Avg. Resolution Time","count" : 2},
      {"title" : "Ticket Type","count" : 32 },
    ]
  },{
  "title": "Bar",
  "color": "#1A5F99",
  "tickets" : [
    {"title" : "Week ","count" : 32},
    {"title" : "MTD ","count" : 126},
    {"title" : "QDT","count" : 409 },
    {"title" : "YTD","count" : 1324}
  ],
  "weekly" : [
      {"title" : "# Restaurants","count" : 32},
      {"title" : "Avg. Resolution Time","count" : 2},
      {"title" : "Ticket Type","count" : 32 },
    ]
  },{
  "title": "Food Truck",
  "color": "#2182A6",
    "tickets" : [
    {"title" : "Week ","count" : 32},
    {"title" : "MTD ","count" : 126},
    {"title" : "QDT","count" : 409 },
    {"title" : "YTD","count" : 1324}
  ],
  "weekly" : [
      {"title" : "# Restaurants","count" : 32},
      {"title" : "Avg. Resolution Time","count" : 2},
      {"title" : "Ticket Type","count" : 32 },
    ]
  },{
  "title": "Coffee/Café",
  "color": "#1D3FAA",
    "tickets" : [
    {"title" : "Week ","count" : 32},
    {"title" : "MTD ","count" : 126},
    {"title" : "QDT","count" : 409 },
    {"title" : "YTD","count" : 1324}
  ],
  "weekly" : [
      {"title" : "# Restaurants","count" : 32},
      {"title" : "Avg. Resolution Time","count" : 2},
      {"title" : "Ticket Type","count" : 32 },
    ]
  }]
  constructor() {

    console.log(this.cards)

   }

  ngOnInit(): void {
  }

}
