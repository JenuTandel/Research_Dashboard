import React from "react";
import mineimg from "./../assets/images/mine.jpeg";

const Home = () => {
  return (
    <main id="main" className="flex-grow-1 h-100 overflow-auto">
      <div className="row">
        {/* Card Wrapper */}
        <div className="card-wrapper primary">
          {/* Card 1 */}
          <div className="card card-primary">
            <div className="icon-wrapper primary">
              <span className="icon bi bi-eye icon-primary"></span>
            </div>
            <h4>Total views</h4>
            <h2>302.402</h2>
            <p>
              <small>Start from 1 Jan 2021</small>
            </p>
          </div>
        </div>
        {/* Card Wrapper */}
        <div className="card-wrapper info">
          {/* Card 2 */}
          <div className="card card-info">
            <div className="icon-wrapper info">
              <span className="icon bi bi-bag icon-info"></span>
            </div>
            <h4>Total views</h4>
            <h2>302.402</h2>
            {/* <a href="" className="text-primary">+ Add New Product </a> */}
            <p>
              <small>Start from 1 Jan 2021</small>
            </p>
          </div>
        </div>
        {/* Card Wrapper */}
        <div className="card-wrapper danger">
          {/* Card 3 */}
          <div className="card card-danger">
            <div className="icon-wrapper danger">
              <span className="icon bi bi-people icon-danger"></span>
            </div>
            <h4>Total views</h4>
            <h2>302.402</h2>
            <p>
              <small>Start from 1 Jan 2021</small>
            </p>
          </div>
        </div>
        {/* Card Wrapper */}
        <div className="card-wrapper secondary">
          {/* Card 4 */}
          <div className="card card-secondary">
            <div className="icon-wrapper secondary">
              <span className="icon bi bi-basket icon-secondary"></span>
            </div>
            <h4>Total views</h4>
            <h2>302.402</h2>
            <p>
              <small>Start from 1 Jan 2021</small>
            </p>
          </div>
        </div>
      </div>

      {/* Table and Grpah */}
      <div className="row1">
        {/* Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Sold</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div className="d-flex product-wrapper align-items-center">
                    <img src={mineimg} height="40px" width="40px" />
                    <p title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur enim explicabo ducimus doloribus reiciendis vero culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quo dolores dolore consequatur obcaecati id in beatae porro quisquam animi dolor vel ab doloremque eligendi, delectus dolorum perferendis ipsum rerum?">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Tenetur enim explicabo ducimus doloribus reiciendis vero
                      culpa? Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit.
                    </p>
                  </div>
                </td>
                <td className="text-primary">Active</td>
                <td>10</td>
                <td>20</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div className="d-flex product-wrapper align-items-center">
                    <img src={mineimg} height="40px" width="40px" />
                    <p title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur enim explicabo ducimus doloribus reiciendis vero culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quo dolores dolore consequatur obcaecati id in beatae porro quisquam animi dolor vel ab doloremque eligendi, delectus dolorum perferendis ipsum rerum?">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Tenetur enim explicabo ducimus doloribus reiciendis vero
                      culpa? Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit.
                    </p>
                  </div>
                </td>
                <td className="text-primary">Active</td>
                <td>10</td>
                <td>20</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <div className="d-flex product-wrapper align-items-center">
                    <img src={mineimg} height="40px" width="40px" />
                    <p title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur enim explicabo ducimus doloribus reiciendis vero culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quo dolores dolore consequatur obcaecati id in beatae porro quisquam animi dolor vel ab doloremque eligendi, delectus dolorum perferendis ipsum rerum?">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Tenetur enim explicabo ducimus doloribus reiciendis vero
                      culpa? Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit.
                    </p>
                  </div>
                </td>
                <td className="text-primary">Active</td>
                <td>10</td>
                <td>20</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div className="d-flex product-wrapper align-items-center">
                    <img src={mineimg} height="40px" width="40px" />
                    <p title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur enim explicabo ducimus doloribus reiciendis vero culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quo dolores dolore consequatur obcaecati id in beatae porro quisquam animi dolor vel ab doloremque eligendi, delectus dolorum perferendis ipsum rerum?">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Tenetur enim explicabo ducimus doloribus reiciendis vero
                      culpa? Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit.
                    </p>
                  </div>
                </td>
                <td className="text-primary">Active</td>
                <td>10</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table: end */}
        {/* Graph */}
        <div className="graph-wrapper">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4>Views & Sells</h4>
            <a className="d-flex align-items-center">
              <p>This Week</p>
              <span className="ml-2 caret fa-solid fa-caret-down"></span>
            </a>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex sqt align-items-center">
              <div className="square-g"></div>
              <h5 className="ml-2">Total Views</h5>
            </div>
            <div className="d-flex sqt align-items-center">
              <div className="square-o"></div>
              <h5 className="ml-2">Total Sells</h5>
            </div>
          </div>
          <div className="image-graph-wrapper">
            {/* <img src={graphimg} alt="graph" /> */}
          </div>
        </div>
        {/* Graph-end */}
      </div>
      {/* End : Main Content */}
    </main>
  );
};
export default Home;
