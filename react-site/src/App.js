import "./App.css";

function App() {
  return (
    <div className="App w-100 h-100">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main role="main" className="inner cover top-buffer">
          <h1 className="cover-heading">Adam Daum</h1>
          <p className="lead">
            I'm a software developer. I like to make stuff that's fun, fast,
            looks cool, and is easy to use. I love to learn, and explore the
            latest tech. This basic site is hosted on{" "}
            <a href="https://pages.github.com">GitHub Pages</a>, and made with{" "}
            <a href="https://reactjs.org/">React</a>, using{" "}
            <a href="https://reactjs.org/docs/create-a-new-react-app.html">
              Create React App
            </a>
            , the{" "}
            <a href="https://www.npmjs.com/package/gh-pages">gh-pages</a> npm
            package, and 
            <a href="https://getbootstrap.com/"> Bootstrap 5</a>.
          </p>
        </main>
        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>
              Drop me an email at&nbsp;
              <a href="mailto:adam@adamdaum.com">adam@adamdaum.com</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
