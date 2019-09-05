import React from "react";
import { MDBDataTable, MDBIcon, MDBBtn } from "mdbreact";

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: "Id",
        field: "id",
        sort: "asc",
        width: 150
      },
      {
        label: "Titre",
        field: "titre",
        sort: "asc",
        width: 270
      },
      {
        label: "Catégories",
        field: "office",
        sort: "asc",
        width: 200
      },
      {
        label: "Région",
        field: "region",
        sort: "asc",
        width: 100
      },
      {
        label: "Surface",
        field: "surface",
        sort: "asc",
        width: 150
      },
      {
        label: "Prix",
        field: "prix",
        sort: "asc",
        width: 100
      },
      {
        label: "Action",
        field: "actions",
        sort: "asc",
        width: 100
      }
    ],
    rows: [
      {
        Id: "Tiger Nixon",
        titre: "System Architect",
        office: "Edinburgh",
        region: "61",
        surface: "2011/04/25",
        prix: "$320",
        actionS: (
          <div>
            <MDBBtn
              floating
              size="lg"
              gradient="red"
              className="fas fa-trash-alt"
              style={{ color: "red" }}
            ></MDBBtn>
            <MDBBtn floating size="lg" gradient="purple" className="">
              <MDBIcon icon="fas fa-check" style={{ color: "green" }} />
            </MDBBtn>
            <MDBBtn floating size="lg" gradient="purple">
              <MDBIcon icon="fas fa-pause" style={{ color: "yellow" }} />
            </MDBBtn>
            <MDBBtn floating size="lg" gradient="purple">
              <MDBIcon icon="far fa-eye" />
            </MDBBtn>
          </div>
        )
      },
      {
        id: "Garrett Winters",
        titre: "Accountant",
        office: "Tokyo",
        region: "63",
        surface: "2011/07/25",
        prix: "$170"
      },
      {
        id: "Ashton Cox",
        titre: "Junior Technical Author",
        office: "San Francisco",
        region: "66",
        surface: "2009/01/12",
        prix: "$86"
      },
      {
        id: "Cedric Kelly",
        titre: "Senior Javascript Developer",
        office: "Edinburgh",
        region: "22",
        surface: "2012/03/29",
        prix: "$433"
      },
      {
        id: "Airi Satou",
        titre: "Accountant",
        office: "Tokyo",
        region: "33",
        surface: "2008/11/28",
        prix: "$162"
      },
      {
        id: "Brielle Williamson",
        titre: "Integration Specialist",
        office: "New York",
        region: "61",
        surface: "2012/12/02",
        prix: "$372"
      },
      {
        id: "Herrod Chandler",
        titre: "Sales Assistant",
        office: "San Francisco",
        region: "59",
        surface: "2012/08/06",
        prix: "$137"
      },
      {
        id: "Rhona Davidson",
        titre: "Integration Specialist",
        office: "Tokyo",
        region: "55",
        surface: "2010/10/14",
        prix: "$327"
      },
      {
        id: "Colleen Hurst",
        titre: "Javascript Developer",
        office: "San Francisco",
        region: "39",
        surface: "2009/09/15",
        prix: "$205"
      },
      {
        id: "Sonya Frost",
        titre: "Software Engineer",
        office: "Edinburgh",
        region: "23",
        surface: "2008/12/13",
        prix: "$103"
      },
      {
        id: "Jena Gaines",
        titre: "Office Manregionr",
        office: "London",
        region: "30",
        surface: "2008/12/19",
        prix: "$90"
      },
      {
        id: "Quinn Flynn",
        titre: "Support Lead",
        office: "Edinburgh",
        region: "22",
        surface: "2013/03/03",
        prix: "$342"
      },
      {
        id: "Charde Marshall",
        titre: "Regional Director",
        office: "San Francisco",
        region: "36",
        surface: "2008/10/16",
        prix: "$470"
      },
      {
        id: "Haley Kennedy",
        titre: "Senior Marketing Designer",
        office: "London",
        region: "43",
        surface: "2012/12/18",
        prix: "$313"
      },
      {
        id: "Tatyana Fitzpatrick",
        titre: "Regional Director",
        office: "London",
        region: "19",
        surface: "2010/03/17",
        prix: "$385"
      },
      {
        id: "Michael Silva",
        titre: "Marketing Designer",
        office: "London",
        region: "66",
        surface: "2012/11/27",
        prix: "$198"
      },
      {
        id: "Paul Byrd",
        titre: "Chief Financial Officer (CFO)",
        office: "New York",
        region: "64",
        surface: "2010/06/09",
        prix: "$725"
      },
      {
        id: "Gloria Little",
        titre: "Systems Administrator",
        office: "New York",
        region: "59",
        surface: "2009/04/10",
        prix: "$237"
      },
      {
        id: "Bradley Greer",
        titre: "Software Engineer",
        office: "London",
        region: "41",
        surface: "2012/10/13",
        prix: "$132"
      },
      {
        id: "Dai Rios",
        titre: "Personnel Lead",
        office: "Edinburgh",
        region: "35",
        surface: "2012/09/26",
        prix: "$217"
      },
      {
        id: "Jenette Caldwell",
        titre: "Development Lead",
        office: "New York",
        region: "30",
        surface: "2011/09/03",
        prix: "$345"
      },
      {
        id: "Yuri Berry",
        titre: "Chief Marketing Officer (CMO)",
        office: "New York",
        region: "40",
        surface: "2009/06/25",
        prix: "$675"
      },
      {
        id: "Caesar Vance",
        titre: "Pre-Sales Support",
        office: "New York",
        region: "21",
        surface: "2011/12/12",
        prix: "$106"
      },
      {
        id: "Doris Wilder",
        titre: "Sales Assistant",
        office: "Sidney",
        region: "23",
        surface: "2010/09/20",
        prix: "$85"
      },
      {
        id: "Angelica Ramos",
        titre: "Chief Executive Officer (CEO)",
        office: "London",
        region: "47",
        surface: "2009/10/09",
        prix: "$1"
      },
      {
        id: "Gavin Joyce",
        titre: "Developer",
        office: "Edinburgh",
        region: "42",
        surface: "2010/12/22",
        prix: "$92"
      },
      {
        id: "Jennifer Chang",
        titre: "Regional Director",
        office: "Singapore",
        region: "28",
        surface: "2010/11/14",
        prix: "$357"
      },
      {
        id: "Brenden Wagner",
        titre: "Software Engineer",
        office: "San Francisco",
        region: "28",
        surface: "2011/06/07",
        prix: "$206"
      },
      {
        id: "Fiona Green",
        titre: "Chief Operating Officer (COO)",
        office: "San Francisco",
        region: "48",
        surface: "2010/03/11",
        prix: "$850"
      },
      {
        id: "Shou Itou",
        titre: "Regional Marketing",
        office: "Tokyo",
        region: "20",
        surface: "2011/08/14",
        prix: "$163"
      },
      {
        id: "Michelle House",
        titre: "Integration Specialist",
        office: "Sidney",
        region: "37",
        surface: "2011/06/02",
        prix: "$95"
      },
      {
        id: "Suki Burks",
        titre: "Developer",
        office: "London",
        region: "53",
        surface: "2009/10/22",
        prix: "$114"
      },
      {
        id: "Prescott Bartlett",
        titre: "Technical Author",
        office: "London",
        region: "27",
        surface: "2011/05/07",
        prix: "$145"
      },
      {
        id: "Gavin Cortez",
        titre: "Team Leader",
        office: "San Francisco",
        region: "22",
        surface: "2008/10/26",
        prix: "$235"
      },
      {
        id: "Martena Mccray",
        titre: "Post-Sales support",
        office: "Edinburgh",
        region: "46",
        surface: "2011/03/09",
        prix: "$324"
      },
      {
        id: "Unity Butler",
        titre: "Marketing Designer",
        office: "San Francisco",
        region: "47",
        surface: "2009/12/09",
        prix: "$85"
      },
      {
        id: "Howard Hatfield",
        titre: "Office Manregionr",
        office: "San Francisco",
        region: "51",
        surface: "2008/12/16",
        prix: "$164"
      },
      {
        id: "Hope Fuentes",
        titre: "Secretary",
        office: "San Francisco",
        region: "41",
        surface: "2010/02/12",
        prix: "$109"
      },
      {
        id: "Vivian Harrell",
        titre: "Financial Controller",
        office: "San Francisco",
        region: "62",
        surface: "2009/02/14",
        prix: "$452"
      },
      {
        id: "Timothy Mooney",
        titre: "Office Manregionr",
        office: "London",
        region: "37",
        surface: "2008/12/11",
        prix: "$136"
      },
      {
        id: "Jackson Bradshaw",
        titre: "Director",
        office: "New York",
        region: "65",
        surface: "2008/09/26",
        prix: "$645"
      },
      {
        id: "Olivia Liang",
        titre: "Support Engineer",
        office: "Singapore",
        region: "64",
        surface: "2011/02/03",
        prix: "$234"
      },
      {
        id: "Bruno Nash",
        titre: "Software Engineer",
        office: "London",
        region: "38",
        surface: "2011/05/03",
        prix: "$163"
      },
      {
        id: "Sakura Yamamoto",
        titre: "Support Engineer",
        office: "Tokyo",
        region: "37",
        surface: "2009/08/19",
        prix: "$139"
      },
      {
        id: "Thor Walton",
        titre: "Developer",
        office: "New York",
        region: "61",
        surface: "2013/08/11",
        prix: "$98"
      },
      {
        id: "Finn Camacho",
        titre: "Support Engineer",
        office: "San Francisco",
        region: "47",
        surface: "2009/07/07",
        prix: "$87"
      },
      {
        id: "Serge Baldwin",
        titre: "Data Coordinator",
        office: "Singapore",
        region: "64",
        surface: "2012/04/09",
        prix: "$138"
      },
      {
        id: "Zenaida Frank",
        titre: "Software Engineer",
        office: "New York",
        region: "63",
        surface: "2010/01/04",
        prix: "$125"
      },
      {
        id: "Zorita Serrano",
        titre: "Software Engineer",
        office: "San Francisco",
        region: "56",
        surface: "2012/06/01",
        prix: "$115"
      },
      {
        id: "Jennifer Acosta",
        titre: "Junior Javascript Developer",
        office: "Edinburgh",
        region: "43",
        surface: "2013/02/01",
        prix: "$75"
      },
      {
        id: "Cara Stevens",
        titre: "Sales Assistant",
        office: "New York",
        region: "46",
        surface: "2011/12/06",
        prix: "$145"
      },
      {
        id: "Hermione Butler",
        titre: "Regional Director",
        office: "London",
        region: "47",
        surface: "2011/03/21",
        prix: "$356"
      },
      {
        id: "Lael Greer",
        titre: "Systems Administrator",
        office: "London",
        region: "21",
        surface: "2009/02/27",
        prix: "$103"
      },
      {
        id: "Jonas Alexander",
        titre: "Developer",
        office: "San Francisco",
        region: "30",
        surface: "2010/07/14",
        prix: "$86"
      },
      {
        id: "Shad Decker",
        titre: "Regional Director",
        office: "Edinburgh",
        region: "51",
        surface: "2008/11/13",
        prix: "$183"
      },
      {
        id: "Michael Bruce",
        titre: "Javascript Developer",
        office: "Singapore",
        region: "29",
        surface: "2011/06/27",
        prix: "$183"
      },
      {
        id: "Donna Snider",
        titre: "Customer Support",
        office: "New York",
        region: "27",
        surface: "2011/01/25",
        prix: "$112"
      },
      {
        id: "Donna Snider",
        titre: "Customer Support",
        office: "New York",
        region: "27",
        surface: "2011/01/25",
        prix: "$112"
      }
    ]
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default DatatablePage;
