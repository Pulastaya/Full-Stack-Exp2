import React from 'react';

function Experiment2() {
  const cards = [
    { title: "HTML", text: "Used to structure web pages" },
    { title: "CSS", text: "Used to style web pages" },
    { title: "JavaScript", text: "Adds interactivity to websites" },
    { title: "Bootstrap", text: "Responsive CSS framework" }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Experiment-2: Card-Based Layout
      </h2>

      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button className="btn btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiment2;
