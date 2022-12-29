function Muro() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="list-group">
              <a href="" className="list-group-item">
                Category 1
              </a>
              <a href="" className="list-group-item">
                Category 2
              </a>
              <a href="" className="list-group-item">
                Category 3
              </a>
            </div>
          </div>
          <div className="col-lg-9">
            <form action="/admin/add-product" method="POST">
              <div className="form-group row">
                <div className="col-sm-2">
                  <label htmlFor="productName">Name</label>
                </div>
                <div className="col-sm-10">
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      name="productName"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-2"></div>
                <div className="col-sm-10 ">
                  <div className="d-flex justify-content-start mt-3">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Save 
                        product"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Muro;
