import React, { useState, useEffect} from "react";
import "../css/Udlaansoversigt.css";

const initialData = [
  {
    elevnummer: ["12345"],
    computernummer: ["PC-0293"],
    udlaansdato: ["2023-09-18"],
    udlobsdato: ["2023-10-18"],
  },
  {
    elevnummer: ["67890"],
    computernummer: ["PC-0456"],
    udlaansdato: ["2023-12-17"],
    udlobsdato: ["2023-12-18"],
  },
  {
    elevnummer: ["21314"],
    computernummer: ["PC-0789"],
    udlaansdato: ["2024-01-17"],
    udlobsdato: ["2024-01-18"],
  },
  {
    elevnummer: ["12342"],
    computernummer: ["PC-1321"],
    udlaansdato: ["2024-01-19"],
    udlobsdato: ["2024-01-20"],
  },
];

const Udlaansoversigt = () => {
  const [data] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) => {
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();
    return (
      item.elevnummer.some((num) => num.toLowerCase().includes(query)) ||
      item.computernummer.some((num) => num.toLowerCase().includes(query)) ||
      item.udlaansdato.some((date) => date.toLowerCase().includes(query)) ||
      item.udlobsdato.some((date) => date.toLowerCase().includes(query))
    );
  });

  const overviewContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const overviewTitleStyle = {
    marginBottom: "20px",
  };

  const searchFieldStyle = {
    width: "40%",
    maxWidth: "300px",
    minWidth: "200px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  };

  const formGroupsStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  };

  const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 20px",
  };

  const formGroupHeadingStyle = {
    marginBottom: "5px",
  };

  

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth > 600) {
    return (
      <div style={overviewContainerStyle}>
        <h2 style={overviewTitleStyle}>Udlånsoversigt</h2>
        <input
          style={searchFieldStyle}
          type="text"
          placeholder="Søgefelt"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div style={formGroupsStyle}>
          {filteredData.length > 0 ? (
            <div style={formGroupStyle}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginRight: "20px" }}>
                  <h5 style={formGroupHeadingStyle}>Elevnummer</h5>
                  {filteredData.map((item, index) => (
                    <p key={index}>{item.elevnummer}</p>
                  ))}
                </div>
                <div style={{ marginRight: "20px" }}>
                  <h5 style={formGroupHeadingStyle}>Computernummer</h5>
                  {filteredData.map((item, index) => (
                    <p key={index}>{item.computernummer}</p>
                  ))}
                </div>
                <div style={{ marginRight: "20px" }}>
                  <h5 style={formGroupHeadingStyle}>Udlånsdato</h5>
                  {filteredData.map((item, index) => (
                    <p key={index}>{item.udlaansdato}</p>
                  ))}
                </div>
                <div>
                  <h5 style={formGroupHeadingStyle}>Udløbsdato</h5>
                  {filteredData.map((item, index) => (
                    <p key={index}>{item.udlobsdato}</p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p style={{ color: "grey" }}>
              Intet dukkede op, tjek for skrivefejl.
            </p>
          )}
        </div>
      </div>
    );
  } else
    return (
      <div style={overviewContainerStyle}>
        <h2 style={overviewTitleStyle}>Udlånsoversigt</h2>
        <input
          style={searchFieldStyle}
          type="text"
          placeholder="Søgefelt"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div style={formGroupsStyle}>
          {filteredData.length > 0 ? (
            <div style={formGroupStyle}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ marginRight: "20px" }}>
                    <h5 style={formGroupHeadingStyle}>Elevnummer</h5>
                    {filteredData.map((item, index) => (
                      <p key={index}>{item.elevnummer}</p>
                    ))}
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <h5 style={formGroupHeadingStyle}>Computernummer</h5>
                    {filteredData.map((item, index) => (
                      <p key={index}>{item.computernummer}</p>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ marginRight: "20px" }}>
                    <h5 style={formGroupHeadingStyle}>Udlånsdato</h5>
                    {filteredData.map((item, index) => (
                      <p key={index}>{item.udlaansdato}</p>
                    ))}
                  </div>
                  <div>
                    <h5 style={formGroupHeadingStyle}>Udløbsdato</h5>
                    {filteredData.map((item, index) => (
                      <p key={index}>{item.udlobsdato}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p style={{ color: "grey" }}>
              Intet dukkede op, tjek for skrivefejl.
            </p>
          )}
        </div>
      </div>
    );
};

export default Udlaansoversigt;
