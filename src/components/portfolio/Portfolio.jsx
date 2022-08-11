import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  // webPortfolio,
  // mobilePortfolio,
  // designPortfolio,
  // contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Projects",
    },
    // {
    //   id: "web",
    //   title: "Web App",
    // },
    // {
    //   id: "mobile",
    //   title: "Mobile App",
    // },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      // case "web":
      //   setData(webPortfolio);
      //   break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <br></br><h1>Portfolio</h1><br></br>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <br></br><br></br><br></br>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}