import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src="https://media.istockphoto.com/id/1270990570/photo/fettuccine-alfredo-wikipedia.jpg?s=612x612&w=0&k=20&c=XojFnREbHsuDuJFf9qqwAb2czSYMEQcfP5ZZ9pl6oVs="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="container w-100">
              <select className="m-2 h-100">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
