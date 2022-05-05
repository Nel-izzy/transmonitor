const Pagination = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>Showing 1 to 10 of 500 entries</div>
      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link text-secondary" href="/app">
                Previous
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="/app">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/app">
                2
              </a>
            </li>

            <li class="page-item">
              <a class="page-link text-secondary" href="/app">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
